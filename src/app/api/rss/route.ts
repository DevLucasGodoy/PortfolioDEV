import { routing } from "@/i18n/routing";
import { baseURL, getContent } from "@/resources";
import { getPosts } from "@/utils/utils";
import { type NextRequest, NextResponse } from "next/server";

function escapeXml(value: string): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(request: NextRequest) {
  const requested = request.nextUrl.searchParams.get("locale");
  const locale = routing.locales.includes(requested as any)
    ? (requested as string)
    : routing.defaultLocale;

  const { blog, person } = getContent(locale);
  const posts = getPosts(["src", "posts", "blog"], locale);

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Generate RSS XML
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(blog.title)}</title>
    <link>${escapeXml(baseURL)}/${locale}/blog</link>
    <description>${escapeXml(blog.description)}</description>
    <language>${locale === "en" ? "en" : "pt-BR"}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(baseURL)}/api/rss?locale=${locale}" rel="self" type="application/rss+xml" />
    <managingEditor>${escapeXml(person.email || "noreply@example.com")} (${escapeXml(person.name)})</managingEditor>
    <webMaster>${escapeXml(person.email || "noreply@example.com")} (${escapeXml(person.name)})</webMaster>
    <image>
      <url>${escapeXml(baseURL)}${escapeXml(person.avatar || "/images/avatar.jpg")}</url>
      <title>${escapeXml(blog.title)}</title>
      <link>${escapeXml(baseURL)}/${locale}/blog</link>
    </image>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${escapeXml(baseURL)}/${locale}/blog/${escapeXml(post.slug)}</link>
      <guid>${escapeXml(baseURL)}/${locale}/blog/${escapeXml(post.slug)}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${String(post.metadata.summary ?? "").replace(/\]\]>/g, "]]&gt;")}]]></description>
      ${post.metadata.image ? `<enclosure url="${escapeXml(baseURL)}${escapeXml(post.metadata.image)}" type="image/jpeg" />` : ""}
      ${post.metadata.tag ? `<category>${escapeXml(post.metadata.tag)}</category>` : ""}
      <author>${escapeXml(person.email || "noreply@example.com")} (${escapeXml(person.name)})</author>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  // Return the RSS XML with the appropriate content type
  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
