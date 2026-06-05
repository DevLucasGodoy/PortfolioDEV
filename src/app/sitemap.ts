import { routing } from "@/i18n/routing";
import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts } from "@/utils/utils";

type SitemapEntry = {
  url: string;
  lastModified: string;
  alternates?: { languages: Record<string, string> };
};

function altLanguages(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${baseURL}/${locale}${path}`]),
  );
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const today = new Date().toISOString().split("T")[0];

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routeEntries: SitemapEntry[] = routing.locales.flatMap((locale) =>
    activeRoutes.map((route) => {
      const path = route !== "/" ? route : "";
      return {
        url: `${baseURL}/${locale}${path}`,
        lastModified: today,
        alternates: { languages: altLanguages(path) },
      };
    }),
  );

  const blogEntries: SitemapEntry[] = routing.locales.flatMap((locale) =>
    getPosts(["src", "posts", "blog"], locale).map((post) => ({
      url: `${baseURL}/${locale}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      alternates: { languages: altLanguages(`/blog/${post.slug}`) },
    })),
  );

  const workEntries: SitemapEntry[] = routing.locales.flatMap((locale) =>
    getPosts(["src", "posts", "work"], locale).map((post) => ({
      url: `${baseURL}/${locale}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      alternates: { languages: altLanguages(`/work/${post.slug}`) },
    })),
  );

  return [...routeEntries, ...blogEntries, ...workEntries];
}
