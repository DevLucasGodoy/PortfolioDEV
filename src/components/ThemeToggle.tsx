"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

/** Flips the `.dark` class set by the theme script in layout.tsx and remembers the choice. */
export function ThemeToggle({ className }: { className?: string }) {
  const t = useTranslations("Nav");
  const [dark, setDark] = useState(false);

  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("theme")}
      title={t("theme")}
      className={className}
    >
      {dark ? <LuSun className="size-4" /> : <LuMoon className="size-4" />}
    </button>
  );
}
