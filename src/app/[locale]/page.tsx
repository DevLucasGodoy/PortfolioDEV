import { Mailchimp, Shell } from "@/components";
import { AboutBento } from "@/components/home/AboutBento";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { Hire } from "@/components/home/Hire";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjects } from "@/components/work/Projects";
import { getContent } from "@/resources";
import { buildMeta, JsonLd } from "@/utils/seo";
import { setRequestLocale } from "next-intl/server";
import { LuArrowRight } from "react-icons/lu";

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

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { home, landing, work } = getContent(locale);
  const featured = getProjects(locale).slice(0, 4);

  return (
    <Shell>
      <JsonLd
        type="WebPage"
        locale={locale}
        path={home.path}
        title={home.title}
        description={home.description}
      />
      <Hero />
      <AboutBento />

      <Section id="works">
        <Reveal>
          <SectionHeader eyebrow={landing.works.eyebrow} title={landing.works.title} />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, index) => {
            const wide = index === 0 || index === 3;
            return (
              <Reveal key={project.slug} className={wide ? "md:col-span-2" : undefined}>
                <ProjectCard project={project} wide={wide} label={landing.works.caseStudy} />
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href={`/${locale}${work.path}`} variant="outline">
            {landing.works.viewAll} <LuArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Section>

      <Experience locale={locale} />
      <Services locale={locale} />
      <Testimonials />

      <Section id="hire">
        <Reveal>
          <SectionHeader eyebrow={landing.hire.eyebrow} title={landing.hire.title} />
        </Reveal>
        <Hire locale={locale} />
      </Section>

      <Section className="border-b-0">
        <Mailchimp id="contact" />
      </Section>
    </Shell>
  );
}
