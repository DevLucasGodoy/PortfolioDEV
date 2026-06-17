"use client";

import {
  Avatar,
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
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";

interface TeamMember {
  name?: string;
  role?: string;
  avatar?: string;
}

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  team?: TeamMember[];
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
  team = [],
  link,
}) => {
  const t = useTranslations("Work");
  const lead = team[0];

  return (
    <div className="group/card h-full transition-transform duration-300 ease-out hover:-translate-y-1">
      <MagicCard
        className="h-full rounded-2xl border border-[#00bf63]/15 shadow-lg shadow-black/30 transition-shadow duration-300 group-hover/card:shadow-xl group-hover/card:shadow-[#00bf63]/15"
        gradientColor="#00bf63"
      >
        <ShineBorder borderWidth={1} duration={14} shineColor={["#00bf63", "#00e676"]} />
        <BorderBeam size={70} duration={7} colorFrom="#00bf63" colorTo="#00e676" />

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
            {(team.length > 0 || description?.trim() || content?.trim()) && (
              <Column gap="16">
                {lead?.avatar && (lead.name || lead.role) ? (
                  <Flex gap="12" vertical="center">
                    <Avatar src={lead.avatar} size="l" />
                    <Column gap="2">
                      {lead.name && <Text variant="label-strong-m">{lead.name}</Text>}
                      {lead.role && (
                        <Text variant="label-default-s" onBackground="neutral-weak">
                          {lead.role}
                        </Text>
                      )}
                    </Column>
                  </Flex>
                ) : (
                  avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />
                )}
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
      </MagicCard>
    </div>
  );
};
