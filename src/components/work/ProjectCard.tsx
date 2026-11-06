import { Chip } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import type { ProjectItem } from "./Projects";

/** Zolt "featured work" card. `wide` lays text and image side by side on desktop. */
export function ProjectCard({
  project,
  wide = false,
  label,
}: {
  project: ProjectItem;
  wide?: boolean;
  label: string;
}) {
  return (
    <Link
      href={project.href}
      aria-label={`${label}: ${project.title}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        wide && "md:flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-soft via-muted to-primary-soft",
          wide && "md:aspect-auto md:w-1/2",
        )}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-3 p-5 sm:p-6",
          wide && "md:w-1/2 md:justify-center",
        )}
      >
        <h3 className="text-xl font-semibold tracking-tight text-balance text-foreground">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tag && <Chip>{project.tag}</Chip>}
          <Chip>{project.year}</Chip>
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-sm font-semibold text-primary">
              {project.title.charAt(0)}
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-medium text-foreground">{project.title}</span>
              <span className="truncate text-xs text-muted-foreground">
                {project.link
                  ? project.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")
                  : project.tag}
              </span>
            </span>
          </span>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
            <LuArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
