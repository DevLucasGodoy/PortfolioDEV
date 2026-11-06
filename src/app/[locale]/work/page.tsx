import { Shell } from "@/components";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { Projects } from "@/components/work/Projects";
import { getContent } from "@/resources";
import { buildMeta, JsonLd } from "@/utils/seo";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { work } = getContent(locale);
  return buildMeta({ title: work.title, description: work.description, locale, path: work.path });
}

export default async function Work({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { work, landing } = getContent(locale);

  return (
    <Shell>
      <JsonLd
        type="WebPage"
        locale={locale}
        path={work.path}
        title={work.title}
        description={work.description}
      />
      <Section className="border-b-0 pt-28 md:pt-36">
        <SectionHeader as="h1" eyebrow={work.label} title={landing.works.title} />
        <Projects />
      </Section>
    </Shell>
  );
}
