import { getPosts } from "@/utils/utils";
import { getLocale, getTranslations } from "next-intl/server";
import Post from "./Post";

/** Blog posts, newest first, optionally excluding slugs and limited to `limit`. */
export async function Posts({ exclude = [], limit }: { exclude?: string[]; limit?: number }) {
  const locale = await getLocale();
  const t = await getTranslations("Blog");
  const posts = getPosts(["src", "posts", "blog"], locale)
    .filter((post) => !exclude.includes(post.slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <Post
          key={post.slug}
          post={post}
          locale={locale}
          alt={t("thumbnailAlt", { title: post.metadata.title })}
        />
      ))}
    </div>
  );
}
