import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { baseURL, getContent, routes } from "@/resources";
import { localeMeta } from "@/utils/seo";
import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Line,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { home } = getContent(locale);
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    ...localeMeta(locale, home.path),
    image: home.image,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { home, about, blog, person } = getContent(locale);
  const t = await getTranslations("Home");
  const chapters = [
    { id: "projects", label: t("chapterProjects") },
    ...(routes["/blog"] ? [{ id: "blog", label: blog.label }] : []),
    { id: "contact", label: t("chapterContact") },
  ].map((chapter, index) => ({ ...chapter, index: `0${index + 1}` }));

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${locale}${home.path}`}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/${locale}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column
        id="hero"
        fillWidth
        horizontal="center"
        vertical="between"
        align="center"
        paddingY="m"
        style={{ minHeight: "calc(100dvh - 160px)" }}
      >
        <div style={{ flex: 1 }} />

        <Column maxWidth="s" horizontal="center" align="center" gap="20" paddingX="m">
          {home.featured.display && (
            <Row fillWidth horizontal="center">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </Row>
          )}
          <Row fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-xl">
              {home.headline}
            </Heading>
          </Row>
          <Row fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </Row>
          <Row horizontal="center" paddingTop="12">
            <Row gap="12" wrap horizontal="center">
              <Button
                id="contact-cta"
                data-border="rounded"
                href="#contact"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                {t("contactCta")}
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={`/${locale}${about.path}`}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Row>
              </Button>
            </Row>
          </Row>
        </Column>

        <Row
          as="nav"
          fillWidth
          horizontal="center"
          gap="8"
          wrap
          paddingTop="l"
          style={{ flex: 1, alignItems: "flex-end" }}
        >
          {chapters.map((chapter) => (
            <SmartLink key={chapter.id} href={`#${chapter.id}`} unstyled>
              <span className="chapter-tab">
                <span className="chapter-tab-index">{chapter.index}</span>
                {chapter.label}
              </span>
            </SmartLink>
          ))}
        </Row>
      </Column>

      <Column id="projects" fillWidth horizontal="center" gap="xl">
        <Column fillWidth gap="24" paddingX="m">
          <Row fillWidth vertical="center" gap="16">
            <Text variant="label-strong-m" onBackground="brand-weak">
              01
            </Text>
            <Heading
              as="h2"
              variant="display-strong-xs"
              style={{ flexShrink: 0, wordBreak: "normal" }}
            >
              {t("chapterProjects")}
            </Heading>
            <Line />
          </Row>
          <Projects />
        </Column>

        {routes["/blog"] && (
          <Column id="blog" fillWidth maxWidth="s" gap="24" marginBottom="l">
            <Row fillWidth vertical="center" gap="16" paddingX="m">
              <Text variant="label-strong-m" onBackground="brand-weak">
                02
              </Text>
              <Heading
                as="h2"
                variant="display-strong-xs"
                style={{ flexShrink: 0, wordBreak: "normal" }}
              >
                {t("latestBlog")}
              </Heading>
              <Line />
            </Row>
            <Posts range={[1, 2]} columns="1" thumbnail direction="row" />
          </Column>
        )}

        <Mailchimp id="contact" eyebrow={chapters[chapters.length - 1].index} />
      </Column>
    </Column>
  );
}
