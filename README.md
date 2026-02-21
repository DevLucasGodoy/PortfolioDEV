# 🚀 Portfolio — Lucas Godoy

> Portfólio pessoal desenvolvido com Next.js, apresentando experiências, projetos, habilidades e um blog integrado.

🔗 **Deploy:** [devlucasgodoy.vercel.app](https://devlucasgodoy.vercel.app/)

---

## 📋 Sobre o Projeto

Portfólio profissional de **Lucas Godoy**, Desenvolvedor Full-Stack com stack centrada em Node.js + Express no backend e React.js no frontend. O site apresenta:

- **Hero** com apresentação e CTAs diretos
- **Sobre** com resumo profissional em Markdown
- **Experiência de Trabalho** com timeline interativa
- **Formação** acadêmica e técnica
- **Projetos em Destaque** em grid responsivo
- **Contribuições** com trabalhos freelance e acadêmicos
- **Contato** com link direto para e-mail e download de currículo
- **Blog externo** integrado via link

---

## 🛠️ Tecnologias

| Categoria           | Tecnologias                                                     |
| ------------------- | --------------------------------------------------------------- |
| **Framework**       | Next.js 16 (App Router)                                         |
| **Linguagem**       | TypeScript                                                      |
| **Estilização**     | Tailwind CSS, tailwindcss-animate                               |
| **UI Components**   | shadcn/ui, Radix UI                                             |
| **Animações**       | Framer Motion, Magic UI (BlurFade)                              |
| **Tipografia**      | Sora, JetBrains Mono (Google Fonts)                             |
| **Blog / Markdown** | gray-matter, react-markdown, unified, rehype-pretty-code, Shiki |
| **Temas**           | next-themes (dark/light mode)                                   |
| **Ícones**          | Lucide React, Radix Icons                                       |
| **Deploy**          | Vercel                                                          |

---

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal (Home)
│   │   ├── layout.tsx        # Layout global com Navbar e Providers
│   │   └── globals.css       # Estilos globais e variáveis CSS
│   ├── components/
│   │   ├── ui/               # Componentes shadcn/ui (Badge, Button, Avatar…)
│   │   ├── magicui/          # BlurFade, BlurFadeText
│   │   ├── navbar.tsx
│   │   ├── resume-card.tsx
│   │   ├── project-card.tsx
│   │   ├── hackathon-card.tsx
│   │   ├── scroll-to-top.tsx
│   │   ├── theme-provider.tsx
│   │   └── icons.tsx
│   ├── data/
│   │   └── resume.tsx        # Fonte de dados central (DATA)
│   └── lib/
│       ├── utils.ts
│       └── blog.ts           # Utilitários para leitura de posts MDX
├── content/                  # Posts do blog em formato .mdx
├── public/                   # Imagens, logos e currículo PDF
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## ⚙️ Como Rodar Localmente

**Pré-requisitos:** Node.js 18+ e npm

```bash
# 1. Clone o repositório
git clone https://github.com/DevLucasGodoy/portfolio.git
cd portfolio

# 2. Instale as dependências
npm install --legacy-peer-deps

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia em modo desenvolvimento (Turbopack)
npm run build    # Gera build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

---

## 🎨 Personalização

Todos os dados pessoais (nome, experiências, projetos, habilidades, etc.) estão centralizados em um único arquivo:

```
src/data/resume.tsx → objeto DATA
```

Basta editar esse arquivo para atualizar qualquer informação exibida no site.

As variáveis de tema (cores, bordas, raio) estão em `src/app/globals.css` usando CSS custom properties compatíveis com o sistema de temas do Tailwind.

---

## 📄 Blog

Os posts do blog são arquivos `.mdx` localizados na pasta `/content`. O utilitário `src/lib/blog.ts` faz a leitura, parseia o frontmatter com `gray-matter` e converte o Markdown para HTML com syntax highlighting via `rehype-pretty-code` + Shiki.

Estrutura de um post:

```mdx
---
title: "Título do Post"
publishedAt: "2024-01-01"
summary: "Descrição breve"
image: "/imagem-opcional.png"
---

Conteúdo em **Markdown**...
```

---

## 🚀 Deploy

O projeto está configurado para deploy na **Vercel**. O arquivo `vercel.json` define:

```json
{ "installCommand": "npm install --legacy-peer-deps" }
```

Isso garante compatibilidade de dependências no ambiente de build da Vercel.

---

## 📬 Contato

| Canal     | Link                                                                        |
| --------- | --------------------------------------------------------------------------- |
| E-mail    | [devlucasgodoy@proton.me](mailto:devlucasgodoy@proton.me)                   |
| GitHub    | [github.com/DevLucasGodoy](https://github.com/DevLucasGodoy)                |
| LinkedIn  | [linkedin.com/in/devlucasgodoy](https://www.linkedin.com/in/devlucasgodoy/) |
| Instagram | [@devlucasgodoy](https://www.instagram.com/devlucasgodoy/)                  |

---

## 📜 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência ou inspiração para o seu próprio portfólio.
