"use client";

import { useContent } from "@/components/ContentProvider";
import { StatusBadge } from "@/components/ui/primitives";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { display, routes } from "@/resources";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { LuBookOpen, LuHouse, LuLayoutGrid, LuRocket, LuUser } from "react-icons/lu";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const dockButton =
  "group relative flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

function Tooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-full ml-3 hidden rounded-md bg-foreground px-2 py-1 text-xs whitespace-nowrap text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
      {label}
    </span>
  );
}

/**
 * Zolt-style navigation: a floating dock (left rail on desktop, bottom bar on mobile)
 * plus a top pill with name + availability that slides in after scrolling.
 */
export const Header = () => {
  const pathname = usePathname() ?? "/";
  const locale = useLocale();
  const t = useTranslations("Nav");
  const { home, about, blog, work, firstClassDev, person } = useContent();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: Array<{ path: string; label: string; icon: IconType }> = [
    { path: "/", label: home.label, icon: LuHouse },
    { path: "/about", label: about.label, icon: LuUser },
    { path: "/work", label: work.label, icon: LuLayoutGrid },
    { path: "/first-class-dev", label: firstClassDev.label, icon: LuRocket },
    { path: "/blog", label: blog.label, icon: LuBookOpen },
  ].filter((item) => routes[item.path as keyof typeof routes]);

  const isActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <>
      {/* Top pill */}
      <div
        className={cn(
          "fixed inset-x-0 top-3 z-40 flex justify-center px-4 transition-all duration-300",
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0",
        )}
      >
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 rounded-full border border-border bg-card/90 py-1.5 pr-3 pl-1.5 shadow-lg backdrop-blur"
        >
          <Image
            src={person.avatar}
            alt={person.name}
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-foreground">{person.name}</span>
            <span className="text-[11px] text-muted-foreground">{t("role")}</span>
          </span>
          <StatusBadge className="hidden sm:inline-flex">{t("available")}</StatusBadge>
        </Link>
      </div>

      {/* Dock */}
      <nav
        aria-label={t("label")}
        className="fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/90 p-1.5 shadow-lg backdrop-blur md:top-1/2 md:bottom-auto md:left-4 md:translate-x-0 md:-translate-y-1/2 md:flex-col"
      >
        {items.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            href={`/${locale}${path === "/" ? "" : path}`}
            aria-label={label}
            aria-current={isActive(path) ? "page" : undefined}
            className={cn(
              dockButton,
              isActive(path) &&
                "bg-primary-soft text-primary hover:bg-primary-soft hover:text-primary",
            )}
          >
            <Icon className="size-4" />
            <Tooltip label={label} />
          </Link>
        ))}
        <span className="mx-1 h-5 w-px bg-border md:mx-0 md:my-1 md:h-px md:w-5" />
        <LanguageToggle className={dockButton} />
        {display.themeSwitcher && <ThemeToggle className={dockButton} />}
      </nav>
    </>
  );
};
