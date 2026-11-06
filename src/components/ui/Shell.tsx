import { cn } from "@/lib/utils";
import type React from "react";

/** The template's centered column framed by vertical hairlines. */
export function Shell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <main className={cn("mx-auto w-full max-w-4xl border-x border-border", className)}>
      {children}
    </main>
  );
}
