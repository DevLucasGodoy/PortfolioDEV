"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Row, ToggleButton } from "@once-ui-system/core";
import { useLocale, useTranslations } from "next-intl";

const flags: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
};

export const LanguageToggle = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageToggle");

  const index = routing.locales.indexOf(locale as (typeof routing.locales)[number]);
  const nextLocale = routing.locales[(index + 1) % routing.locales.length];

  const switchTo = (next: string) => {
    if (next === locale) return;
    // usePathname() returns the path without the locale prefix; next-intl
    // re-applies the prefix for the target locale.
    router.replace(pathname, { locale: next });
  };

  return (
    <Row vertical="center" data-border="rounded" aria-label={t("label")}>
      <ToggleButton
        size="s"
        onClick={() => switchTo(nextLocale)}
        aria-label={t(nextLocale)}
        title={t(nextLocale)}
      >
        {flags[locale] ?? t(locale)}
      </ToggleButton>
    </Row>
  );
};
