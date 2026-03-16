import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "Lucas",
  lastName: "Godoy",
  name: `Lucas Godoy`,
  role: "Desenvolvedor Full-Stack",
  avatar: "/images/avatar.jpeg",
  email: "lucas.moraes.godoy@gmail.com",
  location: "America/Cuiaba", // IANA time zone identifier — Três Lagoas, MS
  languages: ["Português", "Inglês", "Espanhol"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Entre em Contato</>,
  description: (
    <>
      Quer bater um papo? Basta me enviar uma mensagem com uma pergunta pelo meu
      e-mail. Responderei sempre que puder.
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
  label: "Home",
  title: `Portfólio - Desenvolvedor Full-Stack`,
  description: `Portfólio pessoal do desenvolvedor Full-Stack ${person.role}.`,
  headline: <>Transformando ideias em produtos digitais reais</>,
  featured: {
    display: true,
    title: <>First Class Dev — Software House</>,
    href: "https://www.firstclassdev.com.br",
  },
  subline: (
    <>
      Sou Lucas, Desenvolvedor Full-Stack com stack em{" "}
      <strong>Node.js + React</strong>, mais de{" "}
      <strong>20 projetos entregues</strong> para clientes reais e experiência
      como Analista e Coordenador de Implantação de ERP na{" "}
      <strong>Ganso Sistemas</strong>.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Encontre ${person.name}, ${person.role} em Três Lagoas, MS`,
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
        Dev Full-Stack com stack definida em Node.js + Express no backend e
        React.js no frontend, banco de dados relacional (PostgreSQL/MySQL) e
        deploy em produção via AWS, Vercel e Railway. Mais de 20 projetos
        entregues para clientes reais. Paralelamente, atuo como Analista e
        Coordenador de Implantação de ERP na Ganso Sistemas, onde desenvolvo em
        Pascal/Delphi, otimizo banco de dados e gerencio projetos técnicos ponta
        a ponta.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "First Class Dev (Fundador e CEO)",
        timeframe: "Fev 2021 - Presente",
        role: "Desenvolvedor Full-Stack",
        achievements: [
          <>
            Fundei empresa própria de desenvolvimento atendendo clientes de
            varejo, serviços e indústria.
          </>,
          <>
            Stack principal: Node.js + Express (backend) · React.js + Tailwind
            (frontend) · PostgreSQL/MySQL/MongoDB.
          </>,
          <>
            Ciclo completo: requisitos → Figma → código → testes (Jest/Cypress)
            → deploy (AWS, Vercel, Railway) → manutenção.
          </>,
          <>
            20+ projetos entregues em produção — sistemas de gestão,
            e-commerces, dashboards e landing pages — com índice de satisfação
            superior a 90%.
          </>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jun 2025 - Jan 2026",
        role: "Analista e Coordenador de Implantação de ERP",
        achievements: [
          <>
            Coordenei 16+ projetos de implantação ERP ponta a ponta (kickoff →
            go-live).
          </>,
          <>
            Desenvolvi customizações em Pascal/Delphi integrando APIs externas e
            automatizando processos.
          </>,
          <>
            Otimizei banco de dados Firebird com ganho de 50% em performance.
          </>,
          <>
            Configurei integrações fiscais completas (NF-e, NFC-e, NFS-e, CT-e,
            MDF-e, SPED, CNAB).
          </>,
          <>
            Criei 100+ relatórios em Fast Report (KPIs, fiscal, gerencial) e
            ministrei treinamentos técnicos para equipes de até 10 usuários.
          </>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2025 - Jun 2025",
        role: "Analista de Suporte N2",
        achievements: [
          <>
            Resolvi incidentes críticos (produção parada, falhas fiscais) com
            tempo médio de resolução inferior a 4 horas.
          </>,
          <>
            Documentei 200+ atendimentos no CRM Salesforce, criando base de
            conhecimento que acelerou resoluções futuras.
          </>,
          <>
            Suporte especializado em NF-e, NFC-e, SPED, certificados digitais e
            conformidade tributária.
          </>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2023 - Dez 2024",
        role: "Analista de Suporte N1",
        achievements: [
          <>
            30+ chamados diários via telefone, e-mail e chat com SLA de resposta
            inferior a 30 minutos.
          </>,
          <>
            CSAT de 92% através de atendimento humanizado e resolução eficiente.
          </>,
          <>
            Auxiliei clientes em parametrizações fiscais (CSTs, NCMs, CFOP) e
            emissão de documentos eletrônicos.
          </>,
        ],
        images: [],
      },
      {
        company: "Instituto Federal de Mato Grosso do Sul",
        timeframe: "Mar 2021 - Dez 2023",
        role: "Técnico em Informática",
        achievements: [
          <>
            Gestão completa da infraestrutura de TI: 150+ estações de trabalho,
            5 servidores e 20 impressoras de rede.
          </>,
          <>
            Administração de rede LAN/WAN com configuração de switches, VLANs,
            DHCP, DNS, firewall e políticas de segurança.
          </>,
          <>Suporte técnico a professores, alunos e equipe administrativa.</>,
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
        description: (
          <>
            Graduação em Análise e Desenvolvimento de Sistemas (Jul 2023 -
            Hoje).
          </>
        ),
      },
      {
        name: "Instituto Federal de Mato Grosso do Sul",
        description: (
          <>
            Técnico em Informática — Ensino Médio Integrado (Jul 2019 - Dez
            2023).
          </>
        ),
      },
      {
        name: "Escola Técnica Estadual Bento Quirino",
        description: (
          <>Curso Técnico em Tecnologia da Informação (Jan 2019 - Jun 2019).</>
        ),
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
            Desenvolvimento de APIs RESTful robustas com Node.js, Express.js e
            autenticação JWT.
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
        description: (
          <>
            Interfaces modernas e responsivas com React, Next.js e Tailwind CSS.
          </>
        ),
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
            Modelagem e otimização de bancos relacionais e não-relacionais:
            PostgreSQL, MySQL, MongoDB e Firebird.
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
            Deploy em produção com AWS, Vercel e Railway. Conteinerização com
            Docker e versionamento com Git/GitHub.
          </>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
        ],
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
  title: `Projects – ${person.name}`,
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
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
