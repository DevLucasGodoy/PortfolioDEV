import { AUTH_TTL_MS, createAuthToken, timingSafeEqual } from "@/utils/auth";
import { clientIp, rateLimit } from "@/utils/rateLimit";
import * as cookie from "cookie";
import { type NextRequest, NextResponse } from "next/server";

const RATE_MAX = 5;
const RATE_WINDOW_MS = 60 * 1000;

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  const limit = rateLimit(`auth:${ip}`, RATE_MAX, RATE_WINDOW_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many attempts. Try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const password =
    typeof (body as { password?: unknown })?.password === "string"
      ? (body as { password: string }).password
      : "";
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

  if (!correctPassword) {
    console.error("PAGE_ACCESS_PASSWORD environment variable is not set");
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  if (timingSafeEqual(password, correctPassword)) {
    const token = await createAuthToken();
    const response = NextResponse.json({ success: true }, { status: 200 });

    response.headers.set(
      "Set-Cookie",
      cookie.serialize("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: Math.floor(AUTH_TTL_MS / 1000),
        sameSite: "strict",
        path: "/",
      }),
    );

    return response;
  }

  return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
}
