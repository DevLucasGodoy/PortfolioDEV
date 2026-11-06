# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for **Lucas Godoy** — Desenvolvedor Sênior · CEO & Fundador da [First Class Dev](https://www.firstclassdev.com.br), Sócio & Head de Tecnologia na TG Distribuidora (Dourados, MS). Started from Magic Portfolio (Once UI) and redesigned after the [Zolt](https://21st.dev/@clevision/templates/zolt-shadcn-ui-portfolio-template) shadcn template in plain Tailwind v4 (Once UI removed): one-page Home (hero, about bento, featured work, stack + experience timeline, services, testimonials, hire/plan, booking-style contact), plus About/CV, Work, Blog and First Class Dev. `/gallery` is disabled in `routes`.

## Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — Biome lint on `src`
- `npm run biome-write` — format whole repo with Biome (2-space indent, double quotes, 100-col line width)

No test runner configured. Node.js 24 (same as Vercel).

## Stack

- Next.js 16 App Router + React 19 + TypeScript (strict, `@/*` → `src/*`)
- Tailwind v4 (full, with preflight) + shadcn-style hand-written primitives in `src/components/ui/` (`Button`/`ButtonLink`, `Chip`, `StatusBadge`, `Section`, `SectionHeader`, `Card`, `Shell`, `Reveal`). Tokens (`--background`, `--primary` = #00bf63, …) and `.dark` overrides live in [src/app/globals.css](src/app/globals.css); `.prose` styles MDX articles
- `motion` for reveal/hero animations, `react-icons` (`lu` set for UI, `si`/`fa6` for brands)
- **next-intl** for i18n (locale routing + message catalogs)
- MDX via `@next/mdx` + `next-mdx-remote`, `gray-matter` for frontmatter
- SCSS module only for the First Class Dev page (`fcd.module.scss`)
- Biome for format/lint (NOT Prettier/ESLint for style)

## Architecture

Content/config-driven — most edits happen in `src/resources/`, not in pages.

### Content pipeline (MDX)

Blog posts live in `src/posts/blog/{pt,en}/`, projects in `src/posts/work/{pt,en}/` (per-locale, same slug filenames). Each `.mdx` file = one route slug rendered by `app/[locale]/blog/[slug]/page.tsx` (and the work equivalent). `getPosts(segments, locale)` in [src/utils/utils.ts](src/utils/utils.ts) appends the locale to the path, walks that directory, parses frontmatter (`title`, `publishedAt`, `summary`, `image`, `images`, `tag`, `team`, `link`) and exposes `{ metadata, slug, content }`. Adding a new post = drop the same slug `.mdx` in both `pt/` and `en/`. No registry to update.

`pageExtensions` in [next.config.mjs](next.config.mjs) includes `md`/`mdx` so MDX files can be pages directly.

### Config-driven rendering

- [src/resources/site.config.ts](src/resources/site.config.ts) — `routes` toggle (per-path on/off), `protectedRoutes` (password-gated paths, currently empty), `baseURL` for SEO/schema, social `sameAs`, `socialSharing` platforms, fonts (Plus Jakarta Sans as Satoshi stand-in, Geist Mono, Delicious Handrawn) exposed as `fontVariables`.
- [src/resources/content/pt.tsx](src/resources/content/pt.tsx) + [en.tsx](src/resources/content/en.tsx) — `person`, `social`, `newsletter`, `home`, `landing` (one-page home sections; services/prices mirror firstclassdev.com.br/pt/solucoesdigitais; an empty `testimonials.items` hides that section), `about`, `blog`, `work`, `gallery`, `firstClassDev` per locale. JSX allowed in copy. `about` holds the full CV: `work.experiences`, `studies.institutions`, `technical.skills`. Resolve with `getContent(locale)` (server) / `useContent()` (client) — see the i18n section.
- [src/resources/index.ts](src/resources/index.ts) re-exports config + `getContent`. Always import from `@/resources`, not the individual files.

Theme: an inline script in `[locale]/layout.tsx` sets `.dark` on `<html>` from `localStorage.theme` or the system preference; `ThemeToggle` flips it. SEO: `buildMeta()` + `<JsonLd>` in [src/utils/seo.tsx](src/utils/seo.tsx).

### Contact form

The contact form in [src/components/Mailchimp.tsx](src/components/Mailchimp.tsx) is a 3-step booking widget (pick a service from `landing.booking.services` → name/email/message → confirmation); the chosen service is prefixed to the message. It validates name/email/message client-side, keeps a `_honey` honeypot and POSTs JSON to `/api/contact` ([src/app/api/contact/route.ts](src/app/api/contact/route.ts)), which validates again, rate-limits and sends through Resend. The `mailchimp.action` URL in config is NOT used for submission. `newsletter.display` toggles the whole block; `newsletter.title`/`description` are the form heading copy.

### Route gating

[src/components/RouteGuard.tsx](src/components/RouteGuard.tsx) wraps the app via `Providers`. It checks `routes` (404s disabled paths via `app/[locale]/not-found.tsx`) and `protectedRoutes` (renders a password form, hits `/api/check-auth` + `/api/authenticate`). Dynamic paths like `/blog/[slug]` are allowed if their base (`/blog`) is enabled.

Auth uses a **signed, expiring HMAC cookie** (`AUTH_SECRET`) set by [src/app/api/authenticate/route.ts](src/app/api/authenticate/route.ts) and verified via [src/utils/auth.ts](src/utils/auth.ts); login is rate-limited ([src/utils/rateLimit.ts](src/utils/rateLimit.ts)). Password lives in env (see `.env.example`).

### API routes

- `/api/contact` — contact form delivery through Resend (validated, rate-limited)
- `/api/authenticate`, `/api/check-auth` — RouteGuard password flow (signed cookie)
- `/api/og/generate` — dynamic OG images via `next/og` (title length clamped)
- `/api/og/fetch`, `/api/og/proxy` — link-preview helpers, **SSRF-guarded** ([src/utils/ssrf.ts](src/utils/ssrf.ts))
- `/api/rss` — feed for blog posts (XML-escaped output)

Security headers are set for all routes in [next.config.mjs](next.config.mjs).

### Content language / i18n (PT + EN)

The site is bilingual via **next-intl** with locale-prefixed routing: `/pt/...` (default) and `/en/...`. `/` redirects to `/pt`.

- **Routing core:** [src/i18n/routing.ts](src/i18n/routing.ts) (`locales: ["pt","en"]`, `defaultLocale: "pt"`, `localePrefix: "always"`), [src/i18n/navigation.ts](src/i18n/navigation.ts) (locale-aware `Link`/`usePathname`/`useRouter`), [src/i18n/request.ts](src/i18n/request.ts), [src/proxy.ts](src/proxy.ts). Plugin wired in [next.config.mjs](next.config.mjs). Next 16 renamed the `middleware` file convention to **`proxy`** (file is `src/proxy.ts`, default export still `createMiddleware` from `next-intl/middleware`). It **must live in `src/`** (not the project root) — because the project uses a `src/` directory, a root `proxy.ts` is ignored and `/` won't redirect.
- **UI microcopy** (buttons, form, toasts, breadcrumbs, 404) lives in [messages/pt.json](messages/pt.json) / [messages/en.json](messages/en.json), read via `useTranslations`/`getTranslations`.
- **Rich content** (`person`, `home`, `about`/CV, `blog`, `work`, `gallery`, `newsletter` — contain JSX) lives in [src/resources/content/pt.tsx](src/resources/content/pt.tsx) + [en.tsx](src/resources/content/en.tsx). Server components call `getContent(locale)` from [src/resources/content/index.ts](src/resources/content/index.ts); client components read it via `useContent()` from [src/components/ContentProvider.tsx](src/components/ContentProvider.tsx). Keep PT and EN files in sync (same shape).
- **MDX posts** are per-locale: `src/posts/blog/{pt,en}/` and `src/posts/work/{pt,en}/` (same slug filenames). `getPosts(["src","posts","blog"], locale)` resolves the locale subfolder. Adding a post = drop the same slug in both `pt/` and `en/`.
- **Routes** live under `src/app/[locale]/` (`[locale]/layout.tsx` is the root layout: sets `<html lang>` + providers). `app/api/*`, `sitemap.ts`, `robots.ts` stay outside `[locale]`.
- Internal links must be locale-prefixed (`/${locale}/...`). `formatDate(date, locale)` handles pt-BR/en-US.

Add any new copy in **both** languages.

### Environment

- `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` — server-side contact form delivery through Resend (sender on a verified domain).
- `AUTH_SECRET` — required whenever the password gate is used (signs the auth cookie).
- `PAGE_ACCESS_PASSWORD` — password for protected routes.

See [.env.example](.env.example).

