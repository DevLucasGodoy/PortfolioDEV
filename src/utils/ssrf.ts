/**
 * SSRF guard for server-side fetch of user-supplied URLs.
 *
 * Blocks non-http(s) schemes and requests aimed at loopback, private,
 * link-local (cloud metadata) and other reserved ranges via IP literals.
 *
 * Limitation: this validates the URL host only. It does NOT resolve DNS, so a
 * hostname that resolves to an internal IP (DNS rebinding) is not caught here.
 * Keep these endpoints behind an allowlist if you need stronger guarantees.
 */

function parseIPv4(host: string): number[] | null {
  const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host);
  if (!m) return null;
  const parts = m.slice(1).map(Number);
  if (parts.some((p) => p > 255)) return null;
  return parts;
}

function isPrivateIPv4(parts: number[]): boolean {
  const [a, b] = parts;
  if (a === 0) return true; // 0.0.0.0/8
  if (a === 10) return true; // 10.0.0.0/8
  if (a === 127) return true; // loopback
  if (a === 169 && b === 254) return true; // link-local / cloud metadata
  if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12
  if (a === 192 && b === 168) return true; // 192.168.0.0/16
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT 100.64.0.0/10
  if (a === 192 && b === 0 && parts[2] === 0) return true; // 192.0.0.0/24
  if (a >= 224) return true; // multicast + reserved
  return false;
}

function isBlockedIPv6(host: string): boolean {
  // host arrives without brackets here
  const h = host.toLowerCase();
  if (h === "::1" || h === "::") return true; // loopback / unspecified
  if (h.startsWith("fc") || h.startsWith("fd")) return true; // unique local fc00::/7
  if (h.startsWith("fe80")) return true; // link-local
  // IPv4-mapped (::ffff:169.254.x.x etc.)
  const mapped = /::ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/i.exec(h);
  if (mapped) {
    const parts = parseIPv4(mapped[1]);
    if (parts && isPrivateIPv4(parts)) return true;
  }
  return false;
}

export function assertSafeUrl(raw: string): URL {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("Invalid URL");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Blocked URL scheme");
  }

  let host = url.hostname.toLowerCase();
  // strip IPv6 brackets if present
  if (host.startsWith("[") && host.endsWith("]")) {
    host = host.slice(1, -1);
  }

  if (host === "localhost" || host.endsWith(".localhost")) {
    throw new Error("Blocked host");
  }

  const ipv4 = parseIPv4(host);
  if (ipv4) {
    if (isPrivateIPv4(ipv4)) throw new Error("Blocked host");
  } else if (host.includes(":")) {
    if (isBlockedIPv6(host)) throw new Error("Blocked host");
  }

  return url;
}
