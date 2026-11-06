"use client";

import { useContent } from "@/components/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { iconLibrary } from "@/resources/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";

const tile = "relative overflow-hidden rounded-3xl border border-border bg-card shadow-xs";

export function AboutBento() {
  const { landing, person } = useContent();
  const { about } = landing;
  const [open, setOpen] = useState(false);

  const photos = (
    <>
      <div className="relative mx-auto mb-2 h-28 w-full">
        {about.trip.images.slice(0, 3).map((src, i) => (
          <span
            key={src}
            className={cn(
              "absolute top-1/2 h-24 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border-4 border-card shadow-md transition-all duration-300",
              i === 0 && "left-[32%] -rotate-12 group-hover:left-[24%]",
              i === 1 && "left-1/2 z-10 group-hover:-translate-y-[60%]",
              i === 2 && "left-[68%] rotate-12 group-hover:left-[76%]",
            )}
          >
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
          {about.trip.title}
          {about.trip.href && <LuArrowUpRight className="size-3.5 text-primary" />}
        </span>
        <span className="rounded-full border border-border px-2 py-0.5 text-[11px] whitespace-nowrap text-muted-foreground">
          {about.trip.count}
        </span>
      </div>
    </>
  );

  return (
    <Section id="about">
      <Reveal>
        <SectionHeader eyebrow={about.eyebrow} title={about.title} />
      </Reveal>
      <Reveal
        delay={0.05}
        className="grid gap-4 md:grid-cols-[1fr_1.25fr] md:grid-rows-[auto_auto]"
      >
        {/* Portrait */}
        <div className={cn(tile, "aspect-[4/5] md:row-span-2 md:aspect-auto")}>
          <Image
            src={person.avatar}
            alt={person.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Everyday stack */}
          <div className={cn(tile, "flex flex-col gap-3 p-4")}>
            <span className="text-[11px] tracking-wide text-muted-foreground uppercase">
              {about.stack.label}
            </span>
            <div className="grid flex-1 grid-cols-2 gap-2">
              {about.stack.items.map((item) => {
                const Icon = iconLibrary[item.icon];
                return (
                  <span
                    key={item.name}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-muted p-2 text-center"
                  >
                    {Icon && <Icon className="size-6 text-foreground" />}
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {item.name}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Photo stack */}
          {about.trip.href ? (
            <Link
              href={about.trip.href}
              className={cn(tile, "group flex flex-col justify-end gap-2 p-4")}
            >
              {photos}
            </Link>
          ) : (
            <div className={cn(tile, "group flex flex-col justify-end gap-2 p-4")}>{photos}</div>
          )}
        </div>

        {/* Sticky note */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className={cn(
            tile,
            "group flex min-h-48 flex-col items-center justify-center gap-4 p-6 text-left",
          )}
        >
          {open ? (
            <p className="max-w-sm text-center text-base text-muted-foreground [&_strong]:text-foreground">
              {about.note.surprise}
            </p>
          ) : (
            <span className="flex size-32 -rotate-6 items-center justify-center bg-yellow-200 p-4 text-center font-hand text-xl leading-tight text-neutral-800 shadow-md transition-transform duration-300 group-hover:rotate-0">
              {about.note.sticky}
            </span>
          )}
          <span className="text-xl font-medium text-foreground">{about.note.caption}</span>
        </button>
      </Reveal>
    </Section>
  );
}
