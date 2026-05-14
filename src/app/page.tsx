import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Icon,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column
        id="hero"
        fillWidth
        horizontal="center"
        vertical="between"
        align="center"
        paddingY="xl"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div style={{ flex: 1 }} />

        <Column
          maxWidth="s"
          horizontal="center"
          align="center"
          gap="20"
          paddingX="m"
        >
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center">
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
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-xl">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center" paddingTop="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
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
          </RevealFx>
        </Column>

        <Column
          fillWidth
          horizontal="center"
          style={{ flex: 1, justifyContent: "flex-end" }}
          paddingTop="xl"
        >
          <RevealFx delay={1} fillWidth horizontal="center">
            <SmartLink href="#projects" unstyled>
              <Column
                className="scroll-indicator"
                horizontal="center"
                align="center"
                gap="4"
              >
                <Text
                  variant="label-default-xs"
                  onBackground="neutral-weak"
                  align="center"
                >
                  Role para ver mais
                </Text>
                <Icon
                  name="chevronDown"
                  onBackground="neutral-weak"
                  size="s"
                />
              </Column>
            </SmartLink>
          </RevealFx>
        </Column>
      </Column>

      <Column
        id="projects"
        fillWidth
        horizontal="center"
        maxWidth="s"
        gap="xl"
      >
        <RevealFx translateY="16">
          <Projects range={[1, 1]} />
        </RevealFx>

        {routes["/blog"] && (
          <RevealFx translateY="12" delay={0.1} fillWidth>
            <Column fillWidth gap="24" marginBottom="l">
              <Row fillWidth paddingRight="64">
                <Line maxWidth={48} />
              </Row>
              <Row
                fillWidth
                gap="24"
                marginTop="40"
                s={{ direction: "column" }}
              >
                <Row flex={1} paddingLeft="l" paddingTop="24">
                  <Heading as="h2" variant="display-strong-xs" wrap="balance">
                    Últimas do meu blog...
                  </Heading>
                </Row>
                <Row flex={3} paddingX="20">
                  <Posts range={[1, 2]} columns="2" />
                </Row>
              </Row>
              <Row fillWidth paddingLeft="64" horizontal="end">
                <Line maxWidth={48} />
              </Row>
            </Column>
          </RevealFx>
        )}

        <RevealFx translateY="12" delay={0.1}>
          <Projects range={[2]} />
        </RevealFx>

        <RevealFx translateY="8" delay={0.1} fillWidth>
          <Mailchimp />
        </RevealFx>
      </Column>
    </Column>
  );
}
