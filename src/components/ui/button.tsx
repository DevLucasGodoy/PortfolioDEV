import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";

const variants = {
  primary: "bg-foreground text-background hover:opacity-90 shadow-sm",
  outline: "border border-border bg-card text-foreground hover:bg-muted shadow-xs",
  ghost: "text-foreground hover:bg-muted",
  brand: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",
} as const;

const sizes = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
  icon: "size-9 justify-center",
} as const;

type Common = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children?: React.ReactNode;
};

export function buttonClass({ variant = "outline", size = "md", className }: Common = {}) {
  return cn(
    "inline-flex shrink-0 items-center rounded-full font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

/** Link styled as a button. External URLs open in a new tab. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: Common & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = buttonClass({ variant, size, className });
  if (/^(https?:|mailto:)/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
