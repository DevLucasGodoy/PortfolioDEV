import { type Folder, WorkFolders } from "@/components/work/WorkFolders";
import { getPosts } from "@/utils/utils";
import { getLocale } from "next-intl/server";

interface ProjectsProps {
  exclude?: string[];
}

// A project without a public link is still being built
const folderOf = (tag: string | undefined, link: string | undefined): Folder => {
  if (!link) return "building";
  return tag === "Cliente" ? "clients" : "products";
};

export async function Projects({ exclude = [] }: ProjectsProps) {
  const locale = await getLocale();

  const projects = getPosts(["src", "posts", "work"], locale)
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
      link: post.metadata.link || "",
      folder: folderOf(post.metadata.tag, post.metadata.link),
    }));

  return <WorkFolders projects={projects} />;
}
