import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { LuArrowLeft } from "react-icons/lu";

/** Shared header for case studies and blog posts. */
export function ArticleHeader({
  backHref,
  backLabel,
  date,
  title,
  subtitle,
  image,
  children,
}: {
  backHref: string;
  backLabel: string;
  date?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-border px-5 pt-28 pb-10 sm:px-10 md:pt-36">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <LuArrowLeft className="size-4" /> {backLabel}
      </Link>
      {date && <p className="mt-6 font-mono text-xs text-primary">{date}</p>}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
        {title}
      </h1>
      {subtitle && <p className="mt-3 text-lg text-muted-foreground italic">{subtitle}</p>}
      {children && <div className="mt-5">{children}</div>}
      {image && (
        <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-border bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 800px"
            className="object-cover"
          />
        </div>
      )}
    </header>
  );
}
