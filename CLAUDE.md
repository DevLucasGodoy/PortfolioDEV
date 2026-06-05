# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for **Lucas Godoy** — Desenvolvedor Senior · CEO & Fundador da [First Class Dev](https://www.firstclassdev.com.br), Sócio & Head de Tecnologia na TG Distribuidora (Dourados, MS). Built on the Magic Portfolio template (Once UI) and customized into a PT-BR single-person portfolio with Home, About/CV, Work (projetos), Blog, Gallery and a contact form.

## Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — Next.js ESLint
- `npm run biome-write` — format whole repo with Biome (2-space indent, double quotes, 100-col line width)

No test runner configured. Node.js v18.17+.

## Stack

- Next.js 16 App Router + React 19 + TypeScript (strict, `@/*` → `src/*`)
- [@once-ui-system/core](https://once-ui.com) design system (all UI primitives: `Flex`, `Column`, `Heading`, `Button`, `Input`, etc.)
- MDX via `@next/mdx` + `next-mdx-remote`, `gray-matter` for frontmatter
- SCSS modules
- Biome for format/lint (NOT Prettier/ESLint for style)

## Architecture

Content/config-driven — most edits happen in `src/resources/`, not in pages.

### Content pipeline (MDX)

Blog posts live in [src/app/blog/posts/](src/app/blog/posts/), projects in [src/app/work/projects/](src/app/work/projects/). Each `.mdx` file = one route slug via `[slug]/page.tsx`. `getPosts()` in [src/utils/utils.ts](src/utils/utils.ts) walks a directory, parses frontmatter (`title`, `publishedAt`, `summary`, `image`, `images`, `tag`, `team`, `link`) and exposes `{ metadata, slug, content }`. Adding a new post = drop a new `.mdx` file. No registry to update.

`pageExtensions` in [next.config.mjs](next.config.mjs) includes `md`/`mdx` so MDX files can be pages directly.

### Config-driven rendering

- [src/resources/once-ui.config.ts](src/resources/once-ui.config.ts) — design tokens (`style`, `effects`, `dataStyle`), `routes` toggle (per-path on/off), `protectedRoutes` (password-gated paths, currently empty), `baseURL` for SEO/schema, `mailchimp` effects, social `sameAs`, `socialSharing` platforms, `fonts` (Geist + Geist_Mono).
- [src/resources/content.tsx](src/resources/content.tsx) — `person`, `social`, `newsletter`, `home`, `about`, `blog`, `work`, `gallery`. JSX allowed in copy. `about` holds the full CV: `work.experiences`, `studies.institutions`, `technical.skills`.
- [src/resources/index.ts](src/resources/index.ts) re-exports both. Always import from `@/resources`, not the individual files.

`brand: "custom"` in `style` is cast `as any` — the brand color is set via CSS in [src/resources/custom.css](src/resources/custom.css) (`#00bf63`). Don't add it back to the union.

### Contact form

The Magic Portfolio newsletter block is repurposed as a contact form in [src/components/Mailchimp.tsx](src/components/Mailchimp.tsx). It validates name/email/message client-side and POSTs to `https://formsubmit.co/ajax/${NEXT_PUBLIC_FORMSUBMIT_EMAIL}` (honeypot `_honey`, `_captcha` off). The `mailchimp.action` URL in config is NOT used for submission — only `mailchimp.effects` for the background. `newsletter.display` toggles the whole block; `newsletter.title`/`description` are the form heading copy.

### Route gating

[src/components/RouteGuard.tsx](src/components/RouteGuard.tsx) wraps the app via `Providers`. It checks `routes` (404s disabled paths via `app/not-found.tsx`) and `protectedRoutes` (renders a password form, hits `/api/check-auth` + `/api/authenticate`). Dynamic paths like `/blog/[slug]` are allowed if their base (`/blog`) is enabled.

Password value lives in env (see `.env.example`); auth flow uses HTTP-only cookie set by [src/app/api/authenticate/route.ts](src/app/api/authenticate/route.ts).

### API routes

- `/api/authenticate`, `/api/check-auth` — RouteGuard password flow
- `/api/og/generate` — dynamic OG images via `next/og`
- `/api/og/fetch`, `/api/og/proxy` — link-preview helpers
- `/api/rss` — feed for blog posts

### Content language

Site copy is **Portuguese (PT-BR)**. The original Magic Portfolio template has an `i18n` branch using `next-intl`; this fork does NOT use it — strings are hardcoded PT in [content.tsx](src/resources/content.tsx). Keep new copy in Portuguese unless instructed otherwise.

### Environment

- `NEXT_PUBLIC_FORMSUBMIT_EMAIL` — destination email for the contact form (required for submissions to work).
- Optional route password vars — see `.env.example`.

### Customization notes (still demo defaults — fix before deploy)

- `baseURL` in [once-ui.config.ts](src/resources/once-ui.config.ts) still points to the demo (`https://demo.magic-portfolio.com`).
- `schema.name` (`"Once UI"`) / `schema.email` (`lorant@once-ui.com`) are still demo values.
- `sameAs` social links still point to Once UI accounts, not Lucas's (real links live in `social` in content.tsx).
