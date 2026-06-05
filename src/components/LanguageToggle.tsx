"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Row, ToggleButton } from "@once-ui-system/core";
import { useLocale, useTranslations } from "next-intl";

export const LanguageToggle = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageToggle");

  const switchTo = (next: string) => {
    if (next === locale) return;
    // usePathname() returns the path without the locale prefix; next-intl
    // re-applies the prefix for the target locale.
    router.replace(pathname, { locale: next });
  };

  return (
    <Row gap="2" vertical="center" data-border="rounded" aria-label={t("label")}>
      {routing.locales.map((loc) => (
        <ToggleButton key={loc} size="s" selected={locale === loc} onClick={() => switchTo(loc)}>
          {t(loc)}
        </ToggleButton>
      ))}
    </Row>
  );
};
