/**
 * Signed, expiring auth tokens for the password-gate cookie.
 *
 * Token format: `<expiryMs>.<hmacHex>` where hmac = HMAC-SHA256(expiryMs, AUTH_SECRET).
 * This replaces the previous static `authToken=authenticated` value, which any
 * client could forge to bypass the gate. Uses Web Crypto so it works in both the
 * Node and Edge runtimes.
 */

const encoder = new TextEncoder();

export const AUTH_TTL_MS = 60 * 60 * 1000; // 1 hour

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET environment variable is not set");
  }
  return secret;
}

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacHex(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return bufToHex(sig);
}

/** Constant-time string compare (avoids timing leaks on the signature). */
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function createAuthToken(ttlMs: number = AUTH_TTL_MS): Promise<string> {
  const expiry = String(Date.now() + ttlMs);
  const sig = await hmacHex(expiry, getSecret());
  return `${expiry}.${sig}`;
}

export async function verifyAuthToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const idx = token.lastIndexOf(".");
  if (idx <= 0) return false;

  const expiryStr = token.slice(0, idx);
  const sig = token.slice(idx + 1);

  const expiry = Number(expiryStr);
  if (!Number.isFinite(expiry) || expiry < Date.now()) return false;

  const expected = await hmacHex(expiryStr, getSecret());
  return timingSafeEqual(sig, expected);
}
