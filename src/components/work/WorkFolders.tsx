"use client";

import { Button, Heading, Media, Row, Text } from "@once-ui-system/core";
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./WorkFolders.module.scss";

export const folders = ["products", "clients", "building"] as const;
export type Folder = (typeof folders)[number];

export interface FolderProject {
  slug: string;
  href: string;
  title: string;
  summary: string;
  image?: string;
  link: string;
  folder: Folder;
}

export const WorkFolders: React.FC<{ projects: FolderProject[] }> = ({ projects }) => {
  const t = useTranslations("Work");
  const [folder, setFolder] = useState<Folder>("products");
  const [slug, setSlug] = useState("");

  const items = projects.filter((project) => project.folder === folder);
  const current = items.find((project) => project.slug === slug) ?? items[0];

  return (
    <div className={styles.folders}>
      <div className={styles.tabs}>
        {folders.map((name, index) => (
          <button
            key={name}
            type="button"
            className={styles.tab}
            aria-pressed={name === folder}
            onClick={() => setFolder(name)}
          >
            <span className={styles.tabIndex}>{String(index + 1).padStart(2, "0")}</span>
            {t(name)}
          </button>
        ))}
      </div>

      <div className={styles.sheet}>
        <ul className={styles.list}>
          {items.map((project) => (
            <li key={project.slug}>
              <button
                type="button"
                className={styles.item}
                aria-current={project.slug === current?.slug}
                onClick={() => setSlug(project.slug)}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>

        {current && (
          <div className={styles.detail}>
            {current.image && (
              <Media
                key={current.slug}
                sizes="(max-width: 768px) 100vw, 560px"
                aspectRatio="16 / 9"
                radius="m"
                objectFit="contain"
                src={current.image}
                alt={current.title}
              />
            )}
            <Heading as="h3" variant="heading-strong-xl" wrap="balance">
              {current.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" wrap="pretty">
              {current.summary}
            </Text>
            <Row gap="8" wrap>
              <Button href={current.href} size="s" arrowIcon>
                {t("readMore")}
              </Button>
              {current.link && (
                <Button
                  href={current.link}
                  size="s"
                  variant="secondary"
                  suffixIcon="arrowUpRightFromSquare"
                >
                  {t("viewProject")}
                </Button>
              )}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};
