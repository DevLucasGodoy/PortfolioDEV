"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { ProjectItem } from "./Projects";

export const folders = ["products", "clients", "building"] as const;
export type Folder = (typeof folders)[number];

/** Project grid with folder filter chips. */
export function WorkFolders({ projects }: { projects: ProjectItem[] }) {
  const t = useTranslations("Work");
  const [folder, setFolder] = useState<Folder | "all">("all");

  const items = folder === "all" ? projects : projects.filter((p) => p.folder === folder);
  const filters = (["all", ...folders] as const).filter(
    (name) => name === "all" || projects.some((p) => p.folder === name),
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={name === folder}
            onClick={() => setFolder(name)}
            className={cn(
              "rounded-full border border-border px-4 py-1.5 text-sm transition-colors",
              name === folder
                ? "border-foreground bg-foreground text-background"
                : "bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {t(name)}
            <span className="ml-1.5 text-xs opacity-60">
              {name === "all" ? projects.length : projects.filter((p) => p.folder === name).length}
            </span>
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} label={t("readMore")} />
        ))}
      </div>
    </div>
  );
}
