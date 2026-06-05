import type { Locale } from "@/i18n/routing";
import { enContent } from "./en";
import { ptContent } from "./pt";

export type Content = typeof ptContent;

const byLocale: Record<Locale, Content> = {
  pt: ptContent,
  en: enContent,
};

/**
 * Returns the full content bundle for a given locale.
 * Falls back to PT (the default locale) for unknown values.
 */
export function getContent(locale: string): Content {
  return byLocale[locale as Locale] ?? ptContent;
}
