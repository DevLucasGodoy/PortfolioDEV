import FcdLanding from "@/components/first-class-dev/FcdLanding";
import { fcdFontVars } from "@/components/first-class-dev/fonts";
import { getContent } from "@/resources";
import { buildMeta, JsonLd } from "@/utils/seo";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { firstClassDev } = getContent(locale);
  return buildMeta({
    title: firstClassDev.title,
    description: firstClassDev.description,
    locale,
    path: firstClassDev.path,
    image: `/api/og/generate?title=${encodeURIComponent(firstClassDev.label)}&locale=${locale}`,
  });
}

export default async function FirstClassDevPage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { firstClassDev: fcd } = getContent(locale);

  const labels =
    locale === "en"
      ? { visit: "I want a site like this", specialist: "Talk to a specialist" }
      : { visit: "Quero um site assim", specialist: "Falar com especialista" };

  return (
    <main className={fcdFontVars} style={{ width: "100%" }}>
      <JsonLd
        type="WebPage"
        locale={locale}
        path={fcd.path}
        title={fcd.title}
        description={fcd.description}
      />
      <FcdLanding fcd={fcd} locale={locale} labels={labels} />
    </main>
  );
}
