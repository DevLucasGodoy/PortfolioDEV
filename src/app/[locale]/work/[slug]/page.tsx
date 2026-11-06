import { CustomMDX, ScrollToHash, Shell } from "@/components";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjects } from "@/components/work/Projects";
import { routing } from "@/i18n/routing";
import { getContent } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { buildMeta, JsonLd } from "@/utils/seo";
import { getPosts } from "@/utils/utils";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LuExternalLink } from "react-icons/lu";

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  return routing.locales.flatMap((locale) =>
    getPosts(["src", "posts", "work"], locale).map((post) => ({ locale, slug: post.slug })),
  );
}

function findPost(locale: string, slug: string | string[]) {
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug || "";
  return getPosts(["src", "posts", "work"], locale).find((post) => post.slug === slugPath);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = findPost(locale, slug);
  if (!post) return {};

  const { work } = getContent(locale);
  return buildMeta({
    title: post.metadata.title,
    description: post.metadata.summary,
    locale,
    path: `${work.path}/${post.slug}`,
    image: post.metadata.image || undefined,
    type: "article",
    publishedTime: post.metadata.publishedAt,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = findPost(locale, slug);
  if (!post) notFound();

  const { work, landing } = getContent(locale);
  const t = await getTranslations("Work");
  const related = getProjects(locale, [post.slug]).slice(0, 2);

  return (
    <Shell>
      <JsonLd
        type="BlogPosting"
        locale={locale}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        image={post.metadata.image || undefined}
        datePublished={post.metadata.publishedAt}
      />
      <ArticleHeader
        backHref={`/${locale}${work.path}`}
        backLabel={t("breadcrumb")}
        date={
          post.metadata.publishedAt &&
          formatDate(post.metadata.publishedAt, locale === "en" ? "en" : "pt")
        }
        title={post.metadata.title}
        image={post.metadata.images[0]}
      >
        <div className="flex flex-wrap items-center gap-4">
          {post.metadata.team.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {post.metadata.team.map((member) => (
                  <span
                    key={member.name}
                    className="relative size-7 overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {post.metadata.team.map((member, idx) => (
                  <span key={member.name}>
                    {idx > 0 && ", "}
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:underline"
                    >
                      {member.name}
                    </a>
                  </span>
                ))}
              </span>
            </div>
          )}
          {post.metadata.link && (
            <ButtonLink href={post.metadata.link} variant="brand" size="sm">
              {t("viewProject")} <LuExternalLink className="size-3.5" />
            </ButtonLink>
          )}
        </div>
      </ArticleHeader>

      <div className="border-b border-border px-5 py-12 sm:px-10">
        <article className="prose mx-auto max-w-2xl">
          <CustomMDX source={post.content} />
        </article>
      </div>

      {related.length > 0 && (
        <Section className="border-b-0">
          <SectionHeader eyebrow={work.label} title={t("related")} />
          <div className="grid gap-5 sm:grid-cols-2">
            {related.map((project) => (
              <ProjectCard key={project.slug} project={project} label={landing.works.caseStudy} />
            ))}
          </div>
        </Section>
      )}
      <ScrollToHash />
    </Shell>
  );
}
