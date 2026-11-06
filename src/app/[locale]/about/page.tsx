import { Shell } from "@/components";
import { Experience } from "@/components/home/Experience";
import { Reveal } from "@/components/ui/Reveal";
import { Card, Chip, Section, SectionHeader, StatusBadge } from "@/components/ui/primitives";
import { getContent } from "@/resources";
import { iconLibrary } from "@/resources/icons";
import { buildMeta, JsonLd } from "@/utils/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { LuAward, LuGlobe, LuGraduationCap } from "react-icons/lu";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { about } = getContent(locale);
  return buildMeta({
    title: about.title,
    description: about.description,
    locale,
    path: about.path,
  });
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { about, person, social, landing } = getContent(locale);
  const t = await getTranslations("About");
  const tn = await getTranslations("Nav");

  return (
    <Shell>
      <JsonLd
        type="WebPage"
        locale={locale}
        path={about.path}
        title={about.title}
        description={about.description}
      />

      <section className="border-b border-border px-5 pt-28 pb-16 sm:px-10 md:pt-36">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          <span className="relative size-32 shrink-0 overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src={person.avatar}
              alt={person.name}
              fill
              priority
              sizes="128px"
              className="object-cover"
            />
          </span>
          <div>
            <StatusBadge>{tn("available")}</StatusBadge>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {person.name}
            </h1>
            <p className="mt-1 text-xl text-muted-foreground">{person.role}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <LuGlobe className="size-4" /> {t("location")}
              </span>
              {person.languages?.map((language) => (
                <Chip key={language}>{language}</Chip>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {social
                .filter((item) => item.essential)
                .map((item) => {
                  const Icon = iconLibrary[item.icon];
                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs text-foreground transition-colors hover:bg-muted"
                    >
                      <Icon className="size-3.5" /> {item.name}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {about.intro.display && (
        <Section id="intro">
          <Reveal>
            <SectionHeader eyebrow={about.intro.title} title={landing.about.title} />
            <div className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {about.intro.description}
            </div>
          </Reveal>
        </Section>
      )}

      {about.work.display && <Experience locale={locale} />}

      {about.studies.display && (
        <Section id="studies">
          <Reveal>
            <SectionHeader eyebrow={about.studies.title} title={about.studies.title} />
          </Reveal>
          <div className="grid gap-4">
            {about.studies.institutions.map((institution) => (
              <Reveal key={institution.name}>
                <Card className="flex gap-4 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <LuGraduationCap className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{institution.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{institution.description}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {about.certifications.display && about.certifications.items.length > 0 && (
        <Section id="certifications">
          <Reveal>
            <SectionHeader
              eyebrow={about.certifications.title}
              title={about.certifications.title}
            />
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {about.certifications.items.map((cert) => (
              <li key={cert.name}>
                <Card className="flex h-full gap-3 p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <LuAward className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{cert.name}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                      {cert.issuer} <Chip>{cert.date}</Chip>
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {about.technical.display && (
        <Section id="skills" className="border-b-0">
          <Reveal>
            <SectionHeader eyebrow={about.technical.title} title={about.technical.title} />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {about.technical.skills.map((skill) => (
              <Reveal key={skill.title}>
                <Card className="flex h-full flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                  {skill.tags && skill.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                      {skill.tags.map((tag) => {
                        const Icon = tag.icon ? iconLibrary[tag.icon] : undefined;
                        return (
                          <Chip key={tag.name}>
                            {Icon && <Icon className="size-3" />}
                            {tag.name}
                          </Chip>
                        );
                      })}
                    </div>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </Shell>
  );
}
