import { CustomMDX, ScrollToHash, Shell } from "@/components";
import { ArticleHeader } from "@/components/ArticleHeader";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { routing } from "@/i18n/routing";
import { baseURL, getContent } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { buildMeta, JsonLd } from "@/utils/seo";
import { getPosts } from "@/utils/utils";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  return routing.locales.flatMap((locale) =>
    getPosts(["src", "posts", "blog"], locale).map((post) => ({ locale, slug: post.slug })),
  );
}

function findPost(locale: string, slug: string | string[]) {
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug || "";
  return getPosts(["src", "posts", "blog"], locale).find((post) => post.slug === slugPath);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = findPost(locale, slug);
  if (!post) return {};

  const { blog } = getContent(locale);
  return buildMeta({
    title: post.metadata.title,
    description: post.metadata.summary,
    locale,
    path: `${blog.path}/${post.slug}`,
    image: post.metadata.image || undefined,
    type: "article",
    publishedTime: post.metadata.publishedAt,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = findPost(locale, slug);
  if (!post) notFound();

  const { blog, person } = getContent(locale);
  const t = await getTranslations("Blog");

  return (
    <Shell>
      <JsonLd
        type="BlogPosting"
        locale={locale}
        path={`${blog.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        image={post.metadata.image || undefined}
        datePublished={post.metadata.publishedAt}
      />
      <ArticleHeader
        backHref={`/${locale}${blog.path}`}
        backLabel={t("breadcrumb")}
        date={
          post.metadata.publishedAt &&
          formatDate(post.metadata.publishedAt, locale === "en" ? "en" : "pt")
        }
        title={post.metadata.title}
        subtitle={post.metadata.subtitle || undefined}
        image={post.metadata.image || undefined}
      >
        <div className="flex items-center gap-2">
          <span className="relative size-7 overflow-hidden rounded-full">
            <Image
              src={person.avatar}
              alt={person.name}
              fill
              sizes="28px"
              className="object-cover"
            />
          </span>
          <span className="text-sm text-foreground">{person.name}</span>
        </div>
      </ArticleHeader>

      <div className="border-b border-border px-5 py-12 sm:px-10">
        <article className="prose mx-auto max-w-2xl">
          <CustomMDX source={post.content} />
        </article>
        <ShareSection
          title={post.metadata.title}
          url={`${baseURL}/${locale}${blog.path}/${post.slug}`}
        />
      </div>

      <Section className="border-b-0">
        <SectionHeader eyebrow={blog.label} title={t("latestPosts")} />
        <Posts exclude={[post.slug]} limit={2} />
      </Section>
      <ScrollToHash />
    </Shell>
  );
}
