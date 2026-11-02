import { clientIp, rateLimit } from "@/utils/rateLimit";
import { type NextRequest, NextResponse } from "next/server";

const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: NextRequest) {
  const limit = rateLimit(`contact:${clientIp(request)}`, RATE_MAX, RATE_WINDOW_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many attempts. Try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  // Line breaks are stripped so a name can't inject email headers
  const name = text(body?.name).replace(/[\r\n]+/g, " ");
  const email = text(body?.email);
  const message = text(body?.message);

  if (
    !name ||
    name.length > 200 ||
    email.length > 320 ||
    !EMAIL_RE.test(email) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Contact form environment variables are not set");
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `Portfólio · Contato de ${name}`,
        text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the contact email", response.status);
      return NextResponse.json({ message: "Send failed" }, { status: 502 });
    }
  } catch {
    console.error("Resend request failed");
    return NextResponse.json({ message: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
