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
  name: `Lucas Godoy`,
  role: "Desenvolvedor Senior · CEO & Fundador",
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
    link: `mailto:lucas.moraes.godoy@gmail.com?subject=Portfolio%20-%20DevLucasGodoy`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `Portfólio - Desenvolvedor Senior & Empreendedor`,
  description: `Portfólio pessoal de ${person.name}, ${person.role}.`,
  headline: <>Transformando ideias em produtos digitais reais</>,
  featured: {
    display: true,
    title: <>First Class Dev — Software House</>,
    href: "/pt/first-class-dev",
  },
  subline: (
    <>
      Sou Lucas, Desenvolvedor Senior, CEO & Fundador da <strong>First Class Dev</strong> e Sócio &
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
        Desenvolvedor senior e empreendedor, atuando na interseção entre tecnologia e negócio.
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
          "Sócio responsável pela área de tecnologia e inovação, liderando a transformação digital do negócio.",
          "Desenvolvimento de sistemas internos e dashboards estratégicos para otimização de processos e tomada de decisão baseada em dados.",
          "Integração com ERP e automação de processos críticos, conectando operação a uma camada única de dados.",
          "Estruturação de produtos digitais escaláveis com potencial de comercialização (SaaS) como novas fontes de receita.",
          "Definição de arquitetura, escolha de stack e atuação hands-on como desenvolvedor senior.",
        ],
        images: [],
      },
      {
        company: "First Class Dev",
        timeframe: "Jan 2021 - Presente",
        role: "CEO & Fundador",
        achievements: [
          "Fundador de software house especializada em desenvolvimento de soluções web e produtos digitais (SaaS).",
          "Liderança estratégica e técnica: criação de sistemas sob medida, validação de ideias e desenvolvimento de produtos escaláveis.",
          "Stack principal: Node.js + Express, React.js + Next.js, PostgreSQL/MySQL/MongoDB, deploy em AWS, Vercel e Railway.",
          "20+ projetos entregues em produção: sistemas de gestão, e-commerces, dashboards e SaaS — com índice de satisfação superior a 90%.",
          "Integrações com APIs e ERPs, arquitetura de software e banco de dados, apoio estratégico a clientes na digitalização de processos.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jun 2025 - Fev 2026",
        role: "Analista de Implantação",
        achievements: [
          "Coordenei 16+ projetos de implantação de ERP ponta a ponta (planejamento → go-live), incluindo instalação, configuração e migrações entre ambientes locais e cloud.",
          "Customizações em Pascal/Delphi e administração de banco Firebird, com ganho de 50% em performance via otimização de queries.",
          "Integrações bancárias (CNAB) e fiscais completas (NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED).",
          "100+ relatórios criados em Fast Report (KPIs, fiscal, gerencial) e treinamentos técnicos para equipes de até 10 usuários.",
          "Estratégias de backup, recuperação e gestão de infraestrutura de servidores garantindo integridade e continuidade operacional.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2025 - Jun 2025",
        role: "Analista de Suporte N2",
        achievements: [
          "Diagnóstico e resolução de incidentes complexos em ERP com tempo médio de resolução inferior a 4 horas.",
          "Documentação estruturada de 200+ atendimentos no CRM Salesforce, criando base de conhecimento que acelerou resoluções futuras.",
          "Suporte avançado em processos fiscais (NF-e, NFC-e, NFS-e, MDF-e), criação de layouts/relatórios customizados e gestão de permissões.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2023 - Dez 2024",
        role: "Analista de Suporte N1",
        achievements: [
          "30+ chamados diários (telefone, e-mail, chat) com SLA de resposta inferior a 30 minutos e CSAT de 92%.",
          "Suporte humanizado em emissão de documentos fiscais (NF-e, NFC-e, NFS-e, MDF-e) e parametrizações tributárias (CST, NCM, CFOP).",
          "Elaboração de manuais e materiais de treinamento, gestão de perfis de acesso e permissões.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Set 2022 - Dez 2022",
        role: "Estágio · Analista de Suporte",
        achievements: [
          "Estágio inicial em suporte técnico de ERP — base para a trajetória de N1 → N2 → Implantação na empresa.",
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
            APIs RESTful robustas com Node.js, Express.js e autenticação JWT. Também atuo com
            customizações Pascal/Delphi em sistemas legados.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
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
    "Estúdio de tecnologia fundado em 2021 por Lucas Godoy. Sites desenhados para converter, 11 produtos SaaS e sistemas sob medida para PMEs no Brasil e no exterior.",
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
        quando o desafio vai além do site, nossos SaaS e sistemas sob medida resolvem.
      </>
    ),
  },
  cta: {
    site: "https://www.firstclassdev.com.br",
    whatsapp: "https://wa.me/5519996168818",
    email: "mailto:contato@firstclassdev.com.br",
  },
  stats: [
    { value: "2021", label: "Fundada" },
    { value: "20+", label: "Projetos entregues" },
    { value: "11", label: "Produtos SaaS" },
    { value: "3", label: "Países atendidos" },
  ],
  story: {
    title: "Nossa história",
    paragraphs: [
      <Fragment key="story-1">
        Todo bom produto nasce de um problema real. A First Class Dev nasceu em 2021, da
        inquietação de um desenvolvedor que via, todos os dias, pequenas e médias empresas travadas
        por processos manuais, planilhas infinitas e softwares de prateleira que nunca se
        encaixavam de verdade.
      </Fragment>,
      <Fragment key="story-2">
        A pergunta era simples: <em>e se a tecnologia se adaptasse ao negócio — e não o
        contrário?</em> Foi com essa ideia que <strong>Lucas Godoy</strong>, fundador e CEO, abriu a
        empresa: entregar tecnologia de alto nível com proximidade, agilidade e foco em resultado.
      </Fragment>,
      <Fragment key="story-3">
        Desde o primeiro projeto, a forma de trabalhar é a mesma: entender o problema antes de
        escrever a primeira linha de código. Mergulhamos no negócio do cliente, mapeamos processos e
        só então propomos a solução. Isso rendeu mais de 20 projetos entregues e clientes que
        caminham conosco desde 2021.
      </Fragment>,
      <Fragment key="story-4">
        Com o tempo, uma especialidade ficou clara: <strong>transformar sites em máquinas de
        conversão</strong>. Os nossos são construídos sobre quatro pilares — rápido e encontrável
        (performance e SEO), desenhado para converter (hierarquia visual, prova social e CTAs
        estratégicos), direto para a venda (o visitante vira conversa no WhatsApp em poucos
        cliques) e feito para crescer (métricas e otimização contínua de conversão).
      </Fragment>,
    ],
  },
  fronts: {
    title: "O que fazemos",
    items: [
      {
        icon: "figma",
        title: "Brand",
        description:
          "Identidade visual, sites, landing pages e lojas onde cada pixel guia o visitante até o contato. Nossa especialidade: sites que viram máquina de conversão de novos clientes.",
      },
      {
        icon: "rocket",
        title: "SaaS",
        description:
          "Produtos prontos para usar, com assinatura mensal, sem instalação e 7 dias de teste grátis. Resolvem problemas reais de mercados diferentes.",
      },
      {
        icon: "grid",
        title: "Dev",
        description:
          "Sistemas, portais e aplicações web sob medida, que se encaixam no processo do cliente e escalam com ele.",
      },
    ],
  },
  products: {
    title: "Nossos produtos",
    description:
      "11 SaaS criados a partir de problemas reais — todos com 7 dias de teste grátis, sem cartão de crédito.",
    items: [
      {
        name: "Radar B3",
        tagline: "Onde estratégia encontra tecnologia",
        description: "Análise do mercado financeiro com sinais, dashboards e alertas.",
        image: "/images/projects/radar-b3.png",
        slug: "radar-b3",
      },
      {
        name: "Servix",
        tagline: "Menos papel. Mais serviço.",
        description: "Gestão de ordens de serviço para equipes técnicas.",
        image: "/images/projects/servix.png",
        slug: "servix",
      },
      {
        name: "Syncro",
        tagline: "Seus sistemas e sua equipe em sincronia",
        description: "Integração e automação de sistemas sem código.",
        image: "/images/projects/syncro.png",
        slug: "syncro",
      },
      {
        name: "Velaris",
        tagline: "Gestão que impulsiona",
        description: "ERP/CRM completo para PMEs.",
        image: "/images/projects/velaris.png",
        slug: "velaris",
      },
      {
        name: "First Care",
        tagline: "Atendimento inteligente, simples e humano",
        description: "Atendimento ao cliente multicanal com IA.",
        image: "/images/projects/first-care.png",
        slug: "first-care",
      },
      {
        name: "FC Converter",
        tagline: "Conversor de arquivos ilimitado",
        description: "Conversão de arquivos 100% no navegador, grátis e sem limites.",
        image: "/images/projects/fc-converter.png",
        slug: "fc-converter",
      },
      {
        name: "First Class Insight",
        tagline: "Conteúdo executivo que acelera decisão",
        description: "Resumos, cursos e estudos de caso para líderes.",
        image: "/images/projects/first-class-insight.png",
        slug: "first-class-insight",
      },
      {
        name: "FC Academy",
        tagline: "Escola de tecnologia com projetos reais",
        description: "Formação em tecnologia com prática de mercado.",
        image: "/images/projects/fc-academy.png",
        slug: "fc-academy",
      },
      {
        name: "FC Noivos",
        tagline: "O seu grande dia planejado com amor",
        description: "Site para os convidados e painel completo para os noivos, com Pix integrado.",
        image: "/images/projects/fc-noivos.png",
        slug: "fc-noivos",
      },
      {
        name: "FC Chef",
        tagline: "Master Chef",
        description: "Receitas, lista de compras e cardápio semanal.",
        image: "/images/projects/fc-chef.png",
        slug: "fc-chef",
      },
      {
        name: "FC Moments",
        tagline: "Cada momento, no lugar certo",
        description: "Gestão de eventos e momentos especiais.",
        image: "/images/projects/fc-moments.png",
        slug: "fc-moments",
      },
    ],
  },
  values: {
    title: "No que acreditamos",
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
        description: "Construímos relações, não transações. Clientes que caminham conosco desde 2021.",
      },
    ],
  },
  closing: {
    title: <>Vamos conversar?</>,
    description: (
      <>
        Se a sua empresa quer um site que transforma visitantes em clientes, o próximo capítulo da
        First Class Dev pode incluir o seu negócio. A conversa começa aqui.
      </>
    ),
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
