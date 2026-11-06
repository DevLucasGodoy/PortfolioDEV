import { routing } from "@/i18n/routing";
import { baseURL, getContent, sameAs } from "@/resources";
import type { Metadata } from "next";

type MetaInput = {
  title: string;
  description: string;
  locale: string;
  /** Path without locale prefix, e.g. "/about" or "/" */
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/** Next metadata with canonical, hreflang alternates, Open Graph and Twitter cards. */
export function buildMeta({
  title,
  description,
  locale,
  path,
  image,
  type = "website",
  publishedTime,
}: MetaInput): Metadata {
  const suffix = path === "/" ? "" : path;
  const url = `${baseURL}/${locale}${suffix}`;
  const ogImage = image || `/api/og/generate?title=${encodeURIComponent(title)}&locale=${locale}`;

  return {
    metadataBase: new URL(baseURL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `${baseURL}/${l}${suffix}`])),
        "x-default": `${baseURL}/${routing.defaultLocale}${suffix}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type,
      locale: locale === "en" ? "en_US" : "pt_BR",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

/** JSON-LD for a page or post, authored by the site owner. */
export function JsonLd({
  type,
  locale,
  path,
  title,
  description,
  image,
  datePublished,
}: {
  type: "WebPage" | "BlogPosting";
  locale: string;
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
}) {
  const { person, about } = getContent(locale);
  const suffix = path === "/" ? "" : path;
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    url: `${baseURL}/${locale}${suffix}`,
    headline: title,
    name: title,
    description,
    image: `${baseURL}${image || `/api/og/generate?title=${encodeURIComponent(title)}`}`,
    inLanguage: locale === "en" ? "en-US" : "pt-BR",
    ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    author: {
      "@type": "Person",
      name: person.name,
      url: `${baseURL}/${locale}${about.path}`,
      image: `${baseURL}${person.avatar}`,
      sameAs: Object.values(sameAs),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
