"use client";

import { useContent } from "@/components/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuQuote, LuUser } from "react-icons/lu";

export function Testimonials() {
  const { testimonials } = useContent().landing;
  const t = useTranslations("Testimonials");
  const [index, setIndex] = useState(0);
  const count = testimonials.items.length;
  const item = testimonials.items[index];
  if (!item) return null;

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
      </Reveal>
      <Reveal className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
        <div className="relative mx-auto grid size-52 grid-cols-3 grid-rows-3 gap-2">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} className="rounded-xl border border-border bg-card/60" />
          ))}
          <span className="absolute inset-[33%] flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-primary-soft shadow-lg">
            {item.avatar ? (
              <Image src={item.avatar} alt={item.name} fill sizes="70px" className="object-cover" />
            ) : (
              <LuUser className="size-7 text-primary" />
            )}
          </span>
        </div>
        <div>
          <LuQuote className="mb-4 size-8 text-primary" />
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              <blockquote className="text-xl leading-snug text-foreground sm:text-2xl">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          {count > 1 && (
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t("prev")}
                className="flex size-8 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary-soft"
              >
                <LuArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t("next")}
                className="flex size-8 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary-soft"
              >
                <LuArrowRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
