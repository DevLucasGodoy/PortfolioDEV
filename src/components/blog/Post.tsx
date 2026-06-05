"use client";

import { useContent } from "@/components/ContentProvider";
import { formatDate } from "@/utils/formatDate";
import { Avatar, Card, Column, Media, Row, Text } from "@once-ui-system/core";
import { useTranslations } from "next-intl";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
  locale: string;
}

export default function Post({ post, thumbnail, direction, locale }: PostProps) {
  const { person } = useContent();
  const t = useTranslations("Blog");
  const dateLocale = locale === "en" ? "en" : "pt";

  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/${locale}/blog/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={post.metadata.image}
          alt={t("thumbnailAlt", { title: post.metadata.title })}
          aspectRatio="16 / 9"
          objectFit="cover"
        />
      )}
      <Row fillWidth>
        <Column
          fillWidth
          maxWidth={28}
          paddingY={direction === "column" ? "16" : "24"}
          paddingX={direction === "column" ? "8" : "l"}
          gap="16"
          vertical="center"
        >
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
            <Text variant="body-default-s" onBackground="neutral-medium">
              {formatDate(post.metadata.publishedAt, dateLocale, false)}
            </Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="brand-medium">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}
