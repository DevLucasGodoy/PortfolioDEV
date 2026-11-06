import { Chip } from "@/components/ui/primitives";
import { formatDate } from "@/utils/formatDate";
import type { getPosts } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

type PostData = ReturnType<typeof getPosts>[number];

export default function Post({
  post,
  locale,
  alt,
}: { post: PostData; locale: string; alt: string }) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row"
    >
      {post.metadata.image && (
        <div className="relative aspect-video overflow-hidden bg-muted sm:aspect-auto sm:w-2/5">
          <Image
            src={post.metadata.image}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="font-mono text-xs text-primary">
          {formatDate(post.metadata.publishedAt, locale === "en" ? "en" : "pt", false)}
        </p>
        <h3 className="text-xl font-semibold tracking-tight text-balance text-foreground">
          {post.metadata.title}
        </h3>
        {post.metadata.summary && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.metadata.summary}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-2">
          {typeof post.metadata.tag === "string" && post.metadata.tag ? (
            <Chip>{post.metadata.tag}</Chip>
          ) : (
            <span />
          )}
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
            <LuArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
