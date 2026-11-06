import { Mailchimp, Shell } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { getContent } from "@/resources";
import { buildMeta, JsonLd } from "@/utils/seo";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { blog } = getContent(locale);
  return buildMeta({ title: blog.title, description: blog.description, locale, path: blog.path });
}

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { blog } = getContent(locale);

  return (
    <Shell>
      <JsonLd
        type="WebPage"
        locale={locale}
        path={blog.path}
        title={blog.title}
        description={blog.description}
      />
      <Section className="pt-28 md:pt-36">
        <SectionHeader as="h1" eyebrow={blog.label} title={blog.title} />
        <Posts />
      </Section>
      <Section className="border-b-0">
        <Mailchimp id="contact" />
      </Section>
    </Shell>
  );
}
