"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const t = useTranslations("Work");
  return (
    <Column fillWidth gap="m">
      {images.length > 1 ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 720px"
          aspectRatio="16 / 9"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      ) : images.length === 1 ? (
        <Media
          priority={priority}
          sizes="(max-width: 960px) 100vw, 720px"
          aspectRatio="16 / 9"
          radius="l"
          border="neutral-alpha-weak"
          objectFit="cover"
          src={images[0]}
          alt={title}
        />
      ) : null}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="m"
        paddingTop="12"
        paddingBottom="24"
        gap="m"
      >
        {title && (
          <Flex flex={4}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={8} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-l" onBackground="neutral-medium">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="label-strong-m">{t("readMore")}</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="label-strong-m">{t("viewProject")}</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
