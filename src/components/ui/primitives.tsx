import { cn } from "@/lib/utils";
import type React from "react";

/** Small rounded pill, e.g. "4 meses", tech tags. */
export function Chip({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Green "Disponível" badge with a pulsing dot. */
export function StatusBadge({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary-soft px-2.5 py-0.5 text-xs font-medium text-primary",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </span>
  );
}

/** Bordered section with the template's generous padding. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-b border-border px-5 py-16 sm:px-10 md:py-20", className)}
    >
      {children}
    </section>
  );
}

/** "// About me" eyebrow + big heading. */
export function SectionHeader({
  eyebrow,
  title,
  className,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("mb-10 flex flex-col gap-2", className)}>
      <span className="font-mono text-sm text-primary italic">{`// ${eyebrow}`}</span>
      <Tag className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </Tag>
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-3xl border border-border bg-card shadow-xs", className)}>
      {children}
    </div>
  );
}
