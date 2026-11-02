import type {
  About,
  Blog,
  FirstClassDev,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Fragment } from "react";

const person: Person = {
  firstName: "Lucas",
  lastName: "Godoy",
  name: "Lucas Godoy",
  role: "Desenvolvedor Sênior · CEO & Fundador",
  avatar: "/images/avatar.jpeg",
  email: "lucas.moraes.godoy@gmail.com",
  location: "America/Campo_Grande", // IANA — Dourados, MS
  languages: ["Português", "Inglês", "Espanhol"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Entre em Contato</>,
  description: (
    <>
      Tem um projeto em mente, oportunidade de parceria ou só quer trocar uma ideia sobre
      tecnologia? Preencha o formulário abaixo — respondo o mais breve possível.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DevLucasGodoy",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/devlucasgodoy/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/devlucasgodoy/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lucas.moraes.godoy@gmail.com?subject=Portfolio%20-%20DevLucasGodoy",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent("Lucas Godoy - Desenvolvedor Sênior & Empreendedor")}&locale=pt`,
  label: "Início",
  title: "Lucas Godoy - Desenvolvedor Sênior & Empreendedor",
  description: `Portfólio pessoal de ${person.name}, ${person.role}.`,
  headline: <>Transformando ideias em produtos digitais reais</>,
  featured: {
    display: true,
    title: <>First Class Dev — Software House</>,
    href: "/pt/first-class-dev",
  },
  subline: (
    <>
      Sou Lucas, Desenvolvedor Sênior, CEO & Fundador da <strong>First Class Dev</strong> e Sócio &
      Head de Tecnologia na <strong>TG Distribuidora</strong>. Construo sistemas web e produtos{" "}
      <strong>SaaS</strong> com Node.js, React e Next.js — com integrações a ERPs e foco em
      escalabilidade.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} em Dourados, MS`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Resumo Profissional",
    description: (
      <>
        Desenvolvedor sênior e empreendedor, atuando na interseção entre tecnologia e negócio.
        Atualmente sou CEO e fundador da First Class Dev, onde entrego soluções web e produtos
        digitais focados em eficiência, escalabilidade e geração de valor. Em paralelo, atuo como
        Sócio e Head de Tecnologia na TG Distribuidora, liderando a transformação digital do negócio
        através da criação de sistemas internos, dashboards estratégicos e novos produtos SaaS.
        Tenho experiência sólida em aplicações modernas, integrações com ERPs e arquiteturas
        escaláveis — sempre conectando tecnologia à estratégia para gerar impacto direto nos
        resultados.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "TG Distribuidora",
        timeframe: "Mar 2026 - Presente",
        role: "Sócio & Head de Tecnologia",
        achievements: [
          "Sócio responsável pela tecnologia, liderando a transformação digital da distribuidora com 4 unidades em Mato Grosso do Sul.",
          "Liderei e construí o Syncro OS: suíte web sobre o ERP Oracle WinThor com força de vendas, compras, liberação de pedidos, financeiro e RH.",
          "SyncroAgent: ETL em .NET 8 que espelha Oracle e SQL Server no Neon de forma incremental, com outbox que grava de volta no ERP preservando operador e auditoria.",
          "Segurança da plataforma: login com a senha do WinThor, MFA/TOTP, escopo por filial e permissões por módulo e tela, com log de auditoria.",
          "Ferramentas em Python/FastAPI para baixa de cartões e conciliação, além da migração do site institucional de PHP para Next.js.",
        ],
        images: [],
      },
      {
        company: "First Class Dev",
        timeframe: "Jan 2021 - Presente",
        role: "CEO & Fundador",
        achievements: [
          "Fundador de software house especializada em sites, sistemas sob medida e plataformas próprias.",
          "Liderança estratégica e técnica: validação de ideias, arquitetura, desenvolvimento e operação dos produtos.",
          "Plataformas em produção: FC Noivos, Velaris, First Care, Syncro OS e FC Converter, além de outras em desenvolvimento.",
          "20+ projetos entregues: sites, sistemas de gestão e app nativo com Expo, para clientes no Brasil, Estados Unidos e Argentina.",
          "Stack principal: Next.js, React, TypeScript, Node.js, PostgreSQL (Neon, Supabase), Cloudflare R2 e Vercel.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Set 2022 - Fev 2026",
        role: "Analista de Implantação (Estágio → N1 → N2 → Implantação)",
        achievements: [
          "Coordenei 16+ projetos de implantação de ERP ponta a ponta, incluindo instalação, configuração e migrações entre ambientes locais e cloud.",
          "Customizações em Pascal/Delphi e administração de banco Firebird, com ganho de 50% em performance via otimização de queries.",
          "Integrações bancárias (CNAB) e fiscais completas (NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED) e 100+ relatórios em Fast Report.",
          "Suporte N2 a incidentes complexos com tempo médio de resolução inferior a 4 horas e 200+ atendimentos documentados no Salesforce.",
          "Suporte N1 com 30+ chamados diários, SLA de resposta inferior a 30 minutos e CSAT de 92%.",
        ],
        images: [],
      },
      {
        company: "Instituto Federal de Mato Grosso do Sul (IFMS)",
        timeframe: "Mar 2021 - Dez 2023",
        role: "Técnico em Informática",
        achievements: [
          "Gestão da infraestrutura de TI da instituição: estações de trabalho, servidores e impressoras de rede.",
          "Instalação e configuração de hardware e software, administração da rede interna e políticas de segurança de dados.",
          "Suporte técnico a professores, alunos e equipe administrativa.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "UNIASSELVI",
        description: <>Tecnólogo em Análise e Desenvolvimento de Sistemas (Set 2023 - Dez 2025).</>,
      },
      {
        name: "Instituto Federal de Mato Grosso do Sul (IFMS)",
        description: (
          <>
            Ensino Médio Técnico Integrado em Análise e Desenvolvimento de Sistemas (Jul 2019 - Dez
            2023).
          </>
        ),
      },
      {
        name: "Escola Técnica Estadual Bento Quirino",
        description: <>Curso Técnico em Tecnologia da Informação (Jan 2019 - Jun 2019).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Backend",
        description: (
          <>
            APIs RESTful com Node.js, Express.js e Next.js, serviços em NestJS, ETL em .NET 8 e
            ferramentas em Python/FastAPI. Também atuo com customizações Pascal/Delphi em sistemas
            legados.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: ".NET 8" },
          { name: "Python" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: <>Interfaces modernas e responsivas com React, Next.js e Tailwind CSS.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Expo" },
        ],
        images: [],
      },
      {
        title: "Banco de Dados",
        description: (
          <>
            Modelagem e otimização de bancos relacionais e não-relacionais: PostgreSQL, MySQL,
            MongoDB e Firebird (com expertise em performance tuning).
          </>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Supabase", icon: "supabase" },
          { name: "Oracle" },
        ],
        images: [],
      },
      {
        title: "DevOps & Deploy",
        description: (
          <>
            Deploy em produção com AWS, Vercel e Railway. Conteinerização com Docker, versionamento
            Git/GitHub e estratégias de backup/recovery.
          </>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
      {
        title: "Integrações & Fiscal",
        description: (
          <>
            Integrações com ERPs e APIs externas, automação de processos e domínio em obrigações
            fiscais brasileiras: NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED e CNAB bancário.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre tecnologia e desenvolvimento...",
  description: `Leia o que ${person.name} tem publicado recentemente`,
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de desenvolvimento por ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de Fotos – ${person.name}`,
  description: `Uma coleção de fotos por ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "imagem",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "imagem",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "imagem",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "imagem",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "imagem",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "imagem",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "imagem",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "imagem",
      orientation: "vertical",
    },
  ],
};

const firstClassDev: FirstClassDev = {
  path: "/first-class-dev",
  label: "First Class Dev",
  title: "First Class Dev — Sites que transformam visitantes em clientes",
  description:
    "Estúdio de tecnologia fundado em 2021 por Lucas Godoy. Sites desenhados para vender, plataformas próprias e sistemas sob medida para PMEs no Brasil e no exterior.",
  logo: "/images/projects/first-class-dev.png",
  hero: {
    badge: "Desde 2021 · 100% online",
    headline: (
      <>
        O estúdio de tecnologia que transforma o seu site em uma{" "}
        <strong>máquina de conversão de novos clientes</strong>
      </>
    ),
    subline: (
      <>
        Desde 2021, a <strong>First Class Dev</strong> cria sites, lojas e landing pages desenhados
        para vender — rápidos, encontráveis e com cada pixel guiando o visitante até o contato. E
        quando o desafio vai além do site, nossas plataformas e sistemas sob medida resolvem.
      </>
    ),
    note: "Resposta em até 4 horas úteis · Orçamento sem compromisso",
  },
  cta: {
    site: "https://www.firstclassdev.com.br",
    whatsapp: "https://wa.me/5511941683003",
    email: "mailto:equipe@firstclassdev.com.br",
  },
  stats: [
    { value: "2021", label: "Fundada" },
    { value: "20+", label: "Projetos entregues" },
    { value: "5", label: "Plataformas no ar" },
    { value: "3", label: "Países atendidos" },
  ],
  story: {
    title: "Nossa história",
    headline: (
      <>
        Começou com um incômodo: e se a tecnologia se adaptasse ao negócio —{" "}
        <em>e não o contrário?</em>
      </>
    ),
    paragraphs: [
      <Fragment key="story-1">
        Todo bom produto nasce de um problema real. A First Class Dev nasceu em 2021, da inquietação
        de um desenvolvedor que via, todos os dias, pequenas e médias empresas travadas por
        processos manuais, planilhas infinitas e softwares de prateleira que nunca se encaixavam de
        verdade.
      </Fragment>,
      <Fragment key="story-2">
        A pergunta era simples:{" "}
        <em>e se a tecnologia se adaptasse ao negócio — e não o contrário?</em> Foi com essa ideia
        que <strong>Lucas Godoy</strong>, fundador e CEO, abriu a empresa: entregar tecnologia de
        alto nível com proximidade, agilidade e foco em resultado.
      </Fragment>,
      <Fragment key="story-3">
        Desde o primeiro projeto, a forma de trabalhar é a mesma: entender o problema antes de
        escrever a primeira linha de código. Mergulhamos no negócio do cliente, mapeamos processos e
        só então propomos a solução. Isso rendeu mais de 20 projetos entregues e clientes que
        caminham conosco desde 2021.
      </Fragment>,
      <Fragment key="story-4">
        Com o tempo, uma especialidade ficou clara:{" "}
        <strong>transformar sites em máquinas de conversão</strong>. Os nossos são construídos sobre
        quatro pilares — rápido e encontrável (performance e SEO), desenhado para converter
        (hierarquia visual, prova social e CTAs estratégicos), direto para a venda (o visitante vira
        conversa no WhatsApp em poucos cliques) e feito para crescer (métricas e otimização contínua
        de conversão).
      </Fragment>,
    ],
  },
  fronts: {
    title: "O que fazemos",
    headline: (
      <>
        Três frentes que <em>se completam.</em>
      </>
    ),
    items: [
      {
        icon: "figma",
        title: "Marca & site",
        description:
          "Identidade visual, sites, landing pages e lojas que abrem rápido, aparecem no Google e levam o visitante até a conversa no WhatsApp.",
      },
      {
        icon: "rocket",
        title: "Produtos prontos",
        description:
          "Plataformas próprias, sem instalação, com planos mensais ou anuais. Resolvem problemas reais de mercados diferentes.",
      },
      {
        icon: "grid",
        title: "Sob medida",
        description:
          "Sistemas, portais e aplicações web sob medida, que se encaixam no processo do cliente e escalam com ele.",
      },
    ],
  },
  products: {
    title: "Nossos produtos",
    soonLabel: "em breve",
    headline: (
      <>
        5 plataformas no ar, <em>outras a caminho.</em>
      </>
    ),
    description:
      "Plataformas criadas a partir de problemas reais: 5 prontas para usar hoje e outras em desenvolvimento.",
    items: [
      {
        name: "FC Noivos",
        tagline: "O seu grande dia, planejado com amor.",
        description:
          "Site para os convidados e painel para os noivos, com RSVP, mesas, orçamento e presentes com Pix sem comissão.",
        image: "/images/projects/fc-noivos.jpg",
        slug: "fc-noivos",
      },
      {
        name: "First Care",
        tagline: "Gestão completa para a sua clínica.",
        description:
          "Prontuário eletrônico, agenda, financeiro e relatórios para clínicas e profissionais de saúde.",
        image: "/images/projects/first-care.jpg",
        slug: "first-care",
      },
      {
        name: "Velaris",
        tagline: "Do primeiro contato ao contrato fechado.",
        description: "CRM e gestão para agências, consultorias e PMEs.",
        image: "/images/projects/velaris.jpg",
        slug: "velaris",
      },
      {
        name: "FC Converter",
        tagline: "Converta tudo. Nada sai do seu dispositivo.",
        description: "Conversão de arquivos 100% no navegador, grátis, sem conta e sem limites.",
        image: "/images/projects/fc-converter.jpg",
        slug: "fc-converter",
      },
      {
        name: "Syncro OS",
        tagline: "Seus sistemas e sua equipe em sincronia.",
        description:
          "Suíte web sobre o ERP WinThor para distribuidoras: vendas, pedidos, financeiro e RH.",
        image: "/images/projects/syncro-os.webp",
        slug: "syncro",
      },
      {
        name: "FC Moments",
        tagline: "Memórias que duram para sempre.",
        description: "Galeria colaborativa de eventos: cada convidado vira fotógrafo.",
        image: "/images/projects/fc-moments.png",
        slug: "fc-moments",
        soon: true,
      },
      {
        name: "FC Academy",
        tagline: "Sua escola de tecnologia.",
        description: "Plataforma de cursos com um site para cada escola.",
        image: "/images/projects/fc-academy.png",
        slug: "fc-academy",
        soon: true,
      },
      {
        name: "FC Chef",
        tagline: "Master chef na palma da mão.",
        description: "Receitas, lista de compras e cardápio semanal.",
        image: "/images/projects/fc-chef.png",
        soon: true,
      },
      {
        name: "Servix",
        tagline: "Menos papel. Mais serviço.",
        description: "Ordens de serviço, agenda e financeiro para pequenos prestadores.",
        image: "/images/projects/servix.png",
        slug: "servix",
        soon: true,
      },
      {
        name: "First Class Insight",
        tagline: "Conhecimento que abre portas.",
        description: "Blog e biblioteca digital sobre tecnologia e negócios.",
        image: "/images/projects/first-class-insight.png",
        slug: "first-class-insight",
        soon: true,
      },
    ],
  },
  values: {
    title: "No que acreditamos",
    headline: (
      <>
        O que nos move <em>todo dia.</em>
      </>
    ),
    items: [
      {
        title: "Cliente em primeiro lugar",
        description:
          "Não entregamos código. Entregamos resultado. Se não resolve o problema, não está pronto.",
      },
      {
        title: "Simples vence",
        description:
          "Buscamos a solução mais simples que resolve. Complexidade desnecessária é dívida técnica.",
      },
      {
        title: "Parceiros de longo prazo",
        description:
          "Construímos relações, não transações. Clientes que caminham conosco desde 2021.",
      },
    ],
  },
  founder: {
    name: "Lucas Godoy",
    monogram: "LG",
    badge: "CEO & Fundador",
    subtitle: "Desenvolvedor sênior · sistemas na nuvem",
    bio: "Desenvolvedor sênior e empreendedor. Fundou a First Class Dev em 2021, criando sistemas web sob medida e plataformas próprias. Especialista em sistemas web, integrações com ERPs e arquiteturas na nuvem.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/firstclassdev/" },
      { label: "Instagram", href: "https://instagram.com/firstclassdev/" },
      { label: "X", href: "https://x.com/firstclassdev_" },
      { label: "WhatsApp", href: "https://wa.me/5511941683003" },
    ],
  },
  presence: {
    eyebrow: "Presença global",
    title: "Operamos 100% online, atendendo no Brasil e no exterior.",
    description:
      "Projetos hoje no Brasil, Estados Unidos e Argentina — em português, inglês e espanhol.",
    countries: ["Brasil", "Estados Unidos", "Argentina"],
    languages: "PT · EN · ES",
  },
  closing: {
    eyebrow: "Vamos conversar",
    title: (
      <>
        Sua empresa pode ter um site que <em>transforma visitantes em clientes.</em>
      </>
    ),
    description: <>Em 30 minutos entendemos o seu desafio e mostramos como podemos ajudar.</>,
  },
};

export const ptContent = {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  firstClassDev,
};
