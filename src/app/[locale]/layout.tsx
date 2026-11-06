import "@/app/globals.css";

import { Footer, Header, RouteGuard } from "@/components";
import { ContentProvider } from "@/components/ContentProvider";
import { routing } from "@/i18n/routing";
import { fontVariables, getContent } from "@/resources";
import { buildMeta } from "@/utils/seo";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { home } = getContent(locale);
  return buildMeta({
    title: home.title,
    description: home.description,
    locale,
    path: home.path,
    image: home.image,
  });
}

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const content = getContent(locale);

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      data-scroll-behavior="smooth"
      className={fontVariables}
    >
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <NextIntlClientProvider>
          <ContentProvider content={content}>
            <Header />
            <RouteGuard>{children}</RouteGuard>
            <div className="mx-auto w-full max-w-4xl border-x border-t border-border">
              <Footer />
            </div>
          </ContentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
