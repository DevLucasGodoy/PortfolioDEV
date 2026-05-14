# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — Next.js ESLint
- `npm run biome-write` — format whole repo with Biome (2-space indent, double quotes, 100-col line width)

No test runner configured.

## Stack

- Next.js 16 App Router + React 19 + TypeScript (strict, `@/*` → `src/*`)
- [@once-ui-system/core](https://once-ui.com) design system (all UI primitives: `Flex`, `Column`, `Heading`, `Button`, etc.)
- MDX via `@next/mdx` + `next-mdx-remote`, `gray-matter` for frontmatter
- SCSS modules
- Biome for format/lint (NOT Prettier/ESLint for style)

## Architecture

Magic Portfolio template, customized for Lucas Godoy's PT-BR portfolio. Content/config-driven — most edits happen in `src/resources/`, not in pages.

### Content pipeline (MDX)

Blog posts live in [src/app/blog/posts/](src/app/blog/posts/), projects in [src/app/work/projects/](src/app/work/projects/). Each `.mdx` file = one route slug via `[slug]/page.tsx`. `getPosts()` in [src/utils/utils.ts](src/utils/utils.ts) walks a directory, parses frontmatter (`title`, `publishedAt`, `summary`, `image`, `images`, `tag`, `team`, `link`) and exposes `{ metadata, slug, content }`. Adding a new post = drop a new `.mdx` file. No registry to update.

`pageExtensions` in [next.config.mjs](next.config.mjs) includes `md`/`mdx` so MDX files can be pages directly.

### Config-driven rendering

- [src/resources/once-ui.config.ts](src/resources/once-ui.config.ts) — design tokens (`style`, `effects`, `dataStyle`), `routes` toggle (per-path on/off), `protectedRoutes` (password-gated paths), `baseURL` for SEO/schema, `mailchimp` action URL, social `sameAs`, `socialSharing` platforms, `fonts` (Geist + Geist_Mono).
- [src/resources/content.tsx](src/resources/content.tsx) — `person`, `social`, `newsletter`, `home`, `about`, `blog`, `work`, `gallery`. JSX allowed in copy (newsletter description is JSX).
- [src/resources/index.ts](src/resources/index.ts) re-exports both. Always import from `@/resources`, not the individual files.

`brand: "custom"` in `style` is cast `as any` — the brand color is set via CSS in [src/resources/custom.css](src/resources/custom.css) (`#00bf63`). Don't add it back to the union.

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

### Customization notes

- `baseURL` in [once-ui.config.ts](src/resources/once-ui.config.ts) still points to the demo (`https://demo.magic-portfolio.com`) — update before deploying.
- `schema.name` / `schema.email` also still demo values.
