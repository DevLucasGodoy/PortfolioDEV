import { clientIp, rateLimit } from "@/utils/rateLimit";
import { assertSafeUrl } from "@/utils/ssrf";
import { type NextRequest, NextResponse } from "next/server";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function GET(request: NextRequest) {
  try {
    const limit = rateLimit(`ogproxy:${clientIp(request)}`, 40, 60 * 1000);
    if (!limit.allowed) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const url = new URL(request.url);
    const imageUrl = url.searchParams.get("url");

    if (!imageUrl) {
      return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
    }

    let safeUrl: URL;
    try {
      safeUrl = assertSafeUrl(imageUrl);
    } catch {
      return NextResponse.json({ error: "Invalid or blocked URL" }, { status: 400 });
    }

    // Fetch the image
    const response = await fetch(safeUrl.toString(), {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ImageProxy/1.0)",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image: ${response.status}` },
        { status: response.status },
      );
    }

    // Only proxy images — prevents the endpoint being used as an open proxy.
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) {
      return NextResponse.json({ error: "Unsupported content type" }, { status: 415 });
    }

    const imageData = await response.arrayBuffer();
    if (imageData.byteLength > MAX_IMAGE_BYTES) {
      return NextResponse.json({ error: "Image too large" }, { status: 413 });
    }

    // Return the image with appropriate headers
    return new NextResponse(imageData, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    return NextResponse.json({ error: "Failed to proxy image" }, { status: 500 });
  }
}
