"use client";

import { socialSharing } from "@/resources";
import { iconLibrary } from "@/resources/icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LuCheck, LuLink } from "react-icons/lu";

const shareUrls: Record<
  string,
  { icon: string; label: string; url: (title: string, url: string) => string }
> = {
  x: {
    icon: "twitter",
    label: "X",
    url: (title, url) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  linkedin: {
    icon: "linkedin",
    label: "LinkedIn",
    url: (_, url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    icon: "facebook",
    label: "Facebook",
    url: (_, url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  pinterest: {
    icon: "pinterest",
    label: "Pinterest",
    url: (title, url) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  },
  whatsapp: {
    icon: "whatsapp",
    label: "WhatsApp",
    url: (title, url) => `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  reddit: {
    icon: "reddit",
    label: "Reddit",
    url: (title, url) =>
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  telegram: {
    icon: "telegram",
    label: "Telegram",
    url: (title, url) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
};

const iconButton =
  "flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted";

export function ShareSection({ title, url }: { title: string; url: string }) {
  const t = useTranslations("Share");
  const tBlog = useTranslations("Blog");
  const [copied, setCopied] = useState(false);

  if (!socialSharing.display) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const platforms = Object.entries(socialSharing.platforms).filter(
    ([key, enabled]) => enabled && (key === "email" || shareUrls[key]),
  );

  return (
    <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center gap-3">
      <span className="text-sm text-muted-foreground">{tBlog("share")}</span>
      {platforms.map(([key]) => {
        if (key === "email") {
          const Icon = iconLibrary.email;
          return (
            <a
              key={key}
              aria-label="Email"
              className={iconButton}
              href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(t("emailBody", { url }))}`}
            >
              <Icon className="size-4" />
            </a>
          );
        }
        const p = shareUrls[key];
        const Icon = iconLibrary[p.icon];
        return (
          <a
            key={key}
            href={p.url(title, url)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.label}
            className={iconButton}
          >
            <Icon className="size-4" />
          </a>
        );
      })}
      {socialSharing.platforms.copyLink && (
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? t("copySuccess") : tBlog("copyLink")}
          title={copied ? t("copySuccess") : tBlog("copyLink")}
          className={iconButton}
        >
          {copied ? <LuCheck className="size-4 text-primary" /> : <LuLink className="size-4" />}
        </button>
      )}
    </div>
  );
}
