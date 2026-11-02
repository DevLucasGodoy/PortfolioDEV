import { routing } from "@/i18n/routing";
import { baseURL } from "@/resources";

/** Locale-aware `path` + hreflang `alternates` for `Meta.generate` (also yields the canonical tag). */
export function localeMeta(locale: string, path: string) {
  const suffix = path === "/" ? "" : path;
  return {
    path: `/${locale}${suffix}`,
    alternates: [
      ...routing.locales.map((hrefLang) => ({
        hrefLang,
        href: `${baseURL}/${hrefLang}${suffix}`,
      })),
      { hrefLang: "x-default", href: `${baseURL}/${routing.defaultLocale}${suffix}` },
    ],
  };
}
