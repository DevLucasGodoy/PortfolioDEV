import { getPosts } from "@/utils/utils";
import { getLocale } from "next-intl/server";
import { type Folder, WorkFolders } from "./WorkFolders";

export interface ProjectItem {
  slug: string;
  href: string;
  title: string;
  summary: string;
  image?: string;
  tag?: string;
  year: string;
  link: string;
  folder: Folder;
}

// A project without a public link is still being built
const folderOf = (tag: string | undefined, link: string | undefined): Folder => {
  if (!link) return "building";
  return tag === "Cliente" ? "clients" : "products";
};

/** Work posts for a locale, newest first. */
export function getProjects(locale: string, exclude: string[] = []): ProjectItem[] {
  return getPosts(["src", "posts", "work"], locale)
    .filter((post) => !exclude.includes(post.slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    )
    .map((post) => ({
      slug: post.slug,
      href: `/${locale}/work/${post.slug}`,
      title: post.metadata.title,
      summary: post.metadata.summary,
      image: post.metadata.images?.[0],
      tag: typeof post.metadata.tag === "string" ? post.metadata.tag : undefined,
      year: String(new Date(post.metadata.publishedAt).getFullYear()),
      link: post.metadata.link || "",
      folder: folderOf(post.metadata.tag, post.metadata.link),
    }));
}

/** Filterable project grid (used on /work and as "related" on case studies). */
export async function Projects({ exclude = [] }: { exclude?: string[] }) {
  const locale = await getLocale();
  return <WorkFolders projects={getProjects(locale, exclude)} />;
}
