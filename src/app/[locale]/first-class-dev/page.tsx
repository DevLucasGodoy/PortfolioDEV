import { baseURL, getContent } from "@/resources";
import {
  Badge,
  Button,
  Column,
  Heading,
  Icon,
  Line,
  Media,
  Meta,
  RevealFx,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
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
      ? {
          visit: "I want a site like this",
          whatsapp: "Talk on WhatsApp",
          email: "Send an email",
          seeProject: "See project",
          scroll: "Scroll to see more",
        }
      : {
          visit: "Quero um site assim",
          whatsapp: "Falar no WhatsApp",
          email: "Enviar e-mail",
          seeProject: "Ver projeto",
          scroll: "Role para ver mais",
        };

  return (
    <Column maxWidth="m" gap="xl" paddingY="24" horizontal="center">
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

      {/* Hero */}
      <Column
        id="fcd-hero"
        fillWidth
        horizontal="center"
        vertical="between"
        align="center"
        paddingY="xl"
        style={{ minHeight: "calc(100dvh - 80px)" }}
      >
        <div style={{ flex: 1 }} />

        <Column maxWidth="m" horizontal="center" align="center" gap="20" paddingX="m">
          <RevealFx fillWidth horizontal="center">
            <Media
              src={fcd.logo}
              alt="First Class Dev"
              radius="l"
              sizes="120px"
              aspectRatio="1 / 1"
              style={{ width: 120, height: 120 }}
            />
          </RevealFx>
          <RevealFx fillWidth horizontal="center">
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
            >
              {fcd.hero.badge}
            </Badge>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading
              wrap="balance"
              variant="display-strong-l"
              align="center"
              style={{ maxWidth: 760 }}
            >
              {fcd.hero.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-l"
              align="center"
              style={{ maxWidth: 640 }}
            >
              {fcd.hero.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.15} horizontal="center" paddingTop="12">
            <Row gap="12" s={{ direction: "column" }} horizontal="center">
              <Button href={fcd.cta.site} variant="primary" size="m" arrowIcon data-border="rounded">
                {labels.visit}
              </Button>
              <Button
                href={fcd.cta.whatsapp}
                variant="secondary"
                size="m"
                prefixIcon="whatsapp"
                data-border="rounded"
              >
                {labels.whatsapp}
              </Button>
            </Row>
          </RevealFx>
        </Column>

        <Column
          fillWidth
          horizontal="center"
          style={{ flex: 1, justifyContent: "flex-end" }}
          paddingTop="xl"
        >
          <RevealFx delay={0.3} fillWidth horizontal="center">
            <SmartLink href="#fcd-content" unstyled>
              <Column className="scroll-indicator" horizontal="center" align="center" gap="4">
                <Text variant="label-default-xs" onBackground="neutral-weak" align="center">
                  {labels.scroll}
                </Text>
                <Icon name="chevronDown" onBackground="neutral-weak" size="s" />
              </Column>
            </SmartLink>
          </RevealFx>
        </Column>
      </Column>

      {/* Stats */}
      <div id="fcd-content" style={{ scrollMarginTop: "80px" }} />
      <RevealFx fillWidth>
        <Row fillWidth gap="16" wrap horizontal="center" paddingX="m">
          {fcd.stats.map((stat) => (
            <Column
              key={stat.label}
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
              padding="24"
              gap="4"
              horizontal="center"
              align="center"
              flex={1}
              style={{ minWidth: 140 }}
            >
              <Heading variant="display-strong-s" onBackground="brand-strong">
                {stat.value}
              </Heading>
              <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                {stat.label}
              </Text>
            </Column>
          ))}
        </Row>
      </RevealFx>

      {/* Story */}
      <Column fillWidth maxWidth="s" gap="16" paddingX="m" marginTop="xl">
        <Line maxWidth="40" />
        <Heading as="h2" variant="display-strong-xs">
          {fcd.story.title}
        </Heading>
        {fcd.story.paragraphs.map((p, idx) => (
          <Text key={idx} variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {p}
          </Text>
        ))}
      </Column>

      {/* Fronts */}
      <Column fillWidth gap="24" paddingX="m" marginTop="xl">
        <Heading as="h2" variant="display-strong-xs" align="center">
          {fcd.fronts.title}
        </Heading>
        <Row fillWidth gap="16" wrap horizontal="center">
          {fcd.fronts.items.map((front) => (
            <Column
              key={front.title}
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
              padding="32"
              gap="12"
              flex={1}
              style={{ minWidth: 240 }}
            >
              <Icon name={front.icon} size="l" onBackground="brand-strong" />
              <Heading as="h3" variant="heading-strong-l">
                {front.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {front.description}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Products */}
      <Column fillWidth gap="8" paddingX="m" marginTop="xl" horizontal="center" align="center">
        <Heading as="h2" variant="display-strong-xs" align="center">
          {fcd.products.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          {fcd.products.description}
        </Text>
      </Column>
      <Row fillWidth gap="16" wrap horizontal="center" paddingX="m">
        {fcd.products.items.map((product) => {
          const card = (
            <Column
              fillWidth
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
              overflow="hidden"
              gap="12"
              paddingBottom="20"
            >
              <Media
                src={product.image}
                alt={product.name}
                aspectRatio="16 / 10"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <Column gap="4" paddingX="20">
                <Row fillWidth horizontal="between" vertical="center" gap="8">
                  <Heading as="h3" variant="heading-strong-m">
                    {product.name}
                  </Heading>
                  {product.slug && (
                    <Icon name="arrowUpRight" size="s" onBackground="neutral-weak" />
                  )}
                </Row>
                <Text variant="label-default-s" onBackground="brand-weak">
                  {product.tagline}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak" marginTop="4">
                  {product.description}
                </Text>
              </Column>
            </Column>
          );

          return (
            <Column key={product.name} flex={1} style={{ minWidth: 240, maxWidth: 360 }}>
              {product.slug ? (
                <SmartLink unstyled href={`/${locale}/work/${product.slug}`} style={{ height: "100%" }}>
                  {card}
                </SmartLink>
              ) : (
                card
              )}
            </Column>
          );
        })}
      </Row>

      {/* Values */}
      <Column fillWidth gap="24" paddingX="m" marginTop="xl">
        <Heading as="h2" variant="display-strong-xs" align="center">
          {fcd.values.title}
        </Heading>
        <Row fillWidth gap="16" wrap horizontal="center">
          {fcd.values.items.map((value) => (
            <Column
              key={value.title}
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
              padding="24"
              gap="8"
              flex={1}
              style={{ minWidth: 240 }}
            >
              <Heading as="h3" variant="heading-strong-m">
                {value.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {value.description}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Closing CTA */}
      <Column
        fillWidth
        maxWidth="s"
        horizontal="center"
        align="center"
        gap="20"
        padding="40"
        s={{ padding: "24" }}
        marginTop="xl"
        background="brand-alpha-weak"
        border="brand-alpha-medium"
        radius="l"
      >
        <Heading variant="display-strong-s" align="center">
          {fcd.closing.title}
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" align="center" wrap="balance">
          {fcd.closing.description}
        </Text>
        <Row gap="12" wrap horizontal="center" s={{ direction: "column" }}>
          <Button href={fcd.cta.site} variant="primary" size="m" arrowIcon data-border="rounded">
            {labels.visit}
          </Button>
          <Button
            href={fcd.cta.whatsapp}
            variant="secondary"
            size="m"
            prefixIcon="whatsapp"
            data-border="rounded"
          >
            {labels.whatsapp}
          </Button>
          <Button
            href={fcd.cta.email}
            variant="tertiary"
            size="m"
            prefixIcon="email"
            data-border="rounded"
          >
            {labels.email}
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
