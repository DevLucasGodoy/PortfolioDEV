import FcdLanding from "@/components/first-class-dev/FcdLanding";
import { fcdFontVars } from "@/components/first-class-dev/fonts";
import { baseURL, getContent } from "@/resources";
import { Meta, Schema } from "@once-ui-system/core";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { firstClassDev } = getContent(locale);
  return Meta.generate({
    title: firstClassDev.title,
    description: firstClassDev.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(firstClassDev.label)}`,
    path: firstClassDev.path,
  });
}

export default async function FirstClassDevPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { firstClassDev: fcd, about, person } = getContent(locale);

  const labels =
    locale === "en"
      ? { visit: "I want a site like this", specialist: "Talk to a specialist" }
      : { visit: "Quero um site assim", specialist: "Falar com especialista" };

  return (
    <div className={fcdFontVars} style={{ width: "100%" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${locale}${fcd.path}`}
        title={fcd.title}
        description={fcd.description}
        image={`/api/og/generate?title=${encodeURIComponent(fcd.label)}`}
        author={{
          name: person.name,
          url: `${baseURL}/${locale}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <FcdLanding fcd={fcd} locale={locale} labels={labels} />
    </div>
  );
}
