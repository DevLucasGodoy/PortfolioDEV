"use client";

import { Carousel, Column, Flex, Heading, Media, SmartLink, Text } from "@once-ui-system/core";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  images = [],
  title,
  content,
  description,
  link,
}) => {
  const t = useTranslations("Work");

  return (
    <div className="group/card h-full transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="h-full rounded-2xl border border-[#00bf63]/15 shadow-lg shadow-black/30 transition-shadow duration-300 group-hover/card:shadow-xl group-hover/card:shadow-[#00bf63]/15">
        <Column fillWidth gap="m" padding="12">
          {images.length > 1 ? (
            <Carousel
              sizes="(max-width: 960px) 100vw, 560px"
              aspectRatio="16 / 9"
              items={images.map((image) => ({
                slide: image,
                alt: title,
              }))}
            />
          ) : images.length === 1 ? (
            <Media
              priority={priority}
              sizes="(max-width: 960px) 100vw, 560px"
              aspectRatio="16 / 9"
              radius="l"
              border="neutral-alpha-weak"
              objectFit="cover"
              src={images[0]}
              alt={title}
            />
          ) : null}

          <Column fillWidth paddingX="m" paddingTop="12" paddingBottom="12" gap="m">
            {title && (
              <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                {title}
              </Heading>
            )}
            {(description?.trim() || content?.trim()) && (
              <Column gap="16">
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
          </Column>
        </Column>
      </div>
    </div>
  );
};
