"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageToggle");

  const index = routing.locales.indexOf(locale as (typeof routing.locales)[number]);
  const nextLocale = routing.locales[(index + 1) % routing.locales.length];

  return (
    <button
      type="button"
      // usePathname() has no locale prefix; next-intl re-applies it for the target locale
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={t(nextLocale)}
      title={t(nextLocale)}
      className={className}
    >
      <span className="text-[11px] font-semibold">{locale.toUpperCase()}</span>
    </button>
  );
}
