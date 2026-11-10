"use client";

import { useContent } from "@/components/ContentProvider";
import { ButtonLink } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/primitives";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LuFileText } from "react-icons/lu";

export function Hero({ cvHref }: { cvHref?: string }) {
  const { landing, home, person, about } = useContent();
  const locale = useLocale();
  const t = useTranslations("Nav");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % landing.greetings.length), 2600);
    return () => clearInterval(id);
  }, [landing.greetings.length]);

  return (
    <section
      id="hero"
      className="border-b border-border px-5 pt-28 pb-16 sm:px-10 md:pt-36 md:pb-20"
    >
      <StatusBadge>{t("available")}</StatusBadge>
      <h1 className="mt-5 flex flex-wrap items-center gap-x-3 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        <span className="relative inline-flex h-[1.15em] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={landing.greetings[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="inline-block"
            >
              {landing.greetings[index]},
            </motion.span>
          </AnimatePresence>
        </span>
        <span>{t("iAm", { name: person.firstName })}</span>
        <span className="inline-block origin-[70%_70%] animate-wave" aria-hidden="true">
          👋
        </span>
      </h1>
      <p className="mt-2 text-2xl text-muted-foreground sm:text-3xl">{landing.role}</p>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base [&_strong]:font-semibold [&_strong]:text-foreground">
        {home.subline}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink
          href={cvHref ?? `/${locale}${about.path}`}
          variant="outline"
          {...(cvHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <LuFileText className="size-4" />
          {landing.cta.cv}
        </ButtonLink>
        <ButtonLink href="#contact" variant="outline">
          <span className="size-2 rounded-full bg-primary" />
          {landing.cta.connect}
        </ButtonLink>
      </div>
    </section>
  );
}
