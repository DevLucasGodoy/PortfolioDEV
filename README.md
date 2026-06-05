# Portfólio · Lucas Godoy

Portfólio pessoal de **Lucas Godoy** — Desenvolvedor Senior, CEO & Fundador da [First Class Dev](https://www.firstclassdev.com.br) e Sócio & Head de Tecnologia na TG Distribuidora (Dourados, MS).

Construo sistemas web e produtos **SaaS** com Node.js, React e Next.js — com integrações a ERPs e foco em escalabilidade.

Site **bilíngue (PT padrão, EN)** com Home, Sobre/CV, Projetos, Blog, Galeria e formulário de contato. Construído sobre o template [Magic Portfolio](https://demo.magic-portfolio.com) com [Once UI](https://once-ui.com).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- [@once-ui-system/core](https://once-ui.com) — design system / componentes
- **next-intl** — i18n (rotas por locale + catálogos de mensagens)
- **MDX** (`@next/mdx` + `next-mdx-remote`, `gray-matter`) para projetos e posts
- **SCSS modules** + **Biome** (format/lint)
- Node.js v18.17+

## Começando

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar ambiente

Copie `.env.example` para `.env` e preencha:

```bash
NEXT_PUBLIC_FORMSUBMIT_EMAIL=seu-email@exemplo.com   # destino do formulário de contato
AUTH_SECRET=                                          # assina o cookie do gate de senha (se usar protectedRoutes)
PAGE_ACCESS_PASSWORD=                                 # senha das rotas protegidas
```

### 3. Rodar dev server

```bash
npm run dev
```

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Build de produção |
| `npm start` | Serve o build de produção |
| `npm run lint` | ESLint do Next.js |
| `npm run biome-write` | Formata o repo com Biome (2 espaços, aspas duplas, 100 colunas) |

## Internacionalização (i18n)

Rotas com prefixo de locale via **next-intl**: `/pt/...` (padrão) e `/en/...`; `/` redireciona pra `/pt`.

- **`src/i18n/`** — `routing.ts` (locales, default, prefixo), `request.ts`, `navigation.ts` (`Link`/`usePathname` cientes de locale).
- **`src/middleware.ts`** — middleware do next-intl. Fica em `src/` (não na raiz) porque o projeto usa diretório `src/`; na raiz o Next ignora e `/` não redireciona.
- **`messages/{pt,en}.json`** — microcopy de UI (botões, formulário, 404), lido com `useTranslations`/`getTranslations`.
- Rotas ficam em **`src/app/[locale]/`**.

## Estrutura de conteúdo

Tudo dirigido por config/conteúdo — a maioria das edições acontece em `src/resources/`, não nas páginas.

- **`src/resources/content/{pt,en}.tsx`** — `person`, `social`, `home`, `about` (CV: experiências, formação, skills), `blog`, `work`, `gallery` e copy do contato, por idioma. Resolver com `getContent(locale)` (server) ou `useContent()` (client). Mantenha PT e EN no mesmo formato.
- **`src/resources/once-ui.config.ts`** — tokens de design (`style`, `effects`), `routes` (liga/desliga páginas), `baseURL` (SEO/schema), `socialSharing`, fontes (Geist).
- **`src/resources/custom.css`** — cor de marca `#00bf63`.

### Adicionar projeto ou post

Solte o mesmo arquivo `.mdx` (mesmo slug) em **ambos** os locales: `src/posts/work/{pt,en}/` (projetos) ou `src/posts/blog/{pt,en}/` (blog). Cada arquivo vira uma rota automaticamente — sem registro a atualizar. Frontmatter aceito: `title`, `subtitle`, `publishedAt`, `summary`, `image`, `images`, `tag`, `team`, `link`.

## Contato

O formulário ([src/components/Mailchimp.tsx](src/components/Mailchimp.tsx)) valida nome/e-mail/mensagem e envia via [formsubmit.co](https://formsubmit.co) usando `NEXT_PUBLIC_FORMSUBMIT_EMAIL`. Sem essa variável, o envio é bloqueado.

## Funcionalidades

- Bilíngue PT/EN com rotas por locale (next-intl)
- Geração automática de imagens Open Graph / X com `next/og`
- Schema e metadata gerados a partir do conteúdo
- Layout responsivo, troca de tema (claro/escuro/sistema) e de idioma
- Páginas ligáveis/desligáveis via `routes`
- Proteção por senha opcional em rotas (`protectedRoutes`), com cookie HMAC assinado e rate limit
- Endpoints de OG com proteção SSRF; headers de segurança HTTP
- Feed RSS do blog (`/api/rss`)
- Links sociais gerados automaticamente

## Antes de publicar

Ainda com valores demo do template — ajustar:

- `baseURL` em `once-ui.config.ts` (aponta para `demo.magic-portfolio.com`)
- `schema.name` / `schema.email` (valores Once UI)
- `sameAs` (redes sociais do Once UI; os links reais estão em `social` no `content/pt.tsx`)

## Deploy

Otimizado para [Vercel](https://vercel.com). `npm run build` gera o build de produção.

## Licença

Baseado no Magic Portfolio (Once UI), distribuído sob CC BY-NC 4.0 — atribuição obrigatória, sem uso comercial. Ver `LICENSE.txt`.

## Créditos

Template: [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) por Once UI.
