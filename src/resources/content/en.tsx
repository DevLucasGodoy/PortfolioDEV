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
  role: "Senior Developer · CEO & Founder",
  avatar: "/images/avatar.jpeg",
  email: "lucas.moraes.godoy@gmail.com",
  location: "America/Campo_Grande", // IANA — Dourados, Brazil
  languages: ["Portuguese", "English", "Spanish"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Get in Touch</>,
  description: (
    <>
      Have a project in mind, a partnership opportunity, or just want to talk tech? Fill out the
      form — I'll reply as soon as possible.
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
  image: `/api/og/generate?title=${encodeURIComponent("Lucas Godoy - Senior Developer & Entrepreneur")}&locale=en`,
  label: "Home",
  title: "Lucas Godoy - Senior Developer & Entrepreneur",
  description: `Personal portfolio of ${person.name}, ${person.role}.`,
  headline: <>Turning ideas into real digital products</>,
  featured: {
    display: true,
    title: <>First Class Dev — Software House</>,
    href: "/en/first-class-dev",
  },
  subline: (
    <>
      I'm Lucas, a Senior Developer, CEO & Founder of <strong>First Class Dev</strong> and Partner &
      Head of Technology at <strong>TG Distribuidora</strong>. I build web systems and{" "}
      <strong>SaaS</strong> products with Node.js, React and Next.js — with ERP integrations and a
      focus on scalability.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} in Dourados, Brazil`,
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
    title: "Professional Summary",
    description: (
      <>
        Senior developer and entrepreneur working at the intersection of technology and business.
        I'm currently CEO and founder of First Class Dev, where I deliver web solutions and digital
        products focused on efficiency, scalability and value creation. In parallel, I serve as
        Partner and Head of Technology at TG Distribuidora, leading the company's digital
        transformation through internal systems, strategic dashboards and new SaaS products. I have
        solid experience with modern applications, ERP integrations and scalable architectures —
        always connecting technology to strategy to generate direct impact on results.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "TG Distribuidora",
        timeframe: "Mar 2026 - Present",
        role: "Partner & Head of Technology",
        achievements: [
          "Partner in charge of technology, leading the digital transformation of a distributor with 4 branches in Mato Grosso do Sul.",
          "Led and built Syncro OS: a web suite on top of the Oracle WinThor ERP with sales force, purchasing, order release, finance and HR.",
          "SyncroAgent: a .NET 8 ETL mirroring Oracle and SQL Server to Neon incrementally, with an outbox writing back to the ERP while preserving operator identity and audit.",
          "Platform security: WinThor password login, MFA/TOTP, branch scope and per-module and per-screen permissions, with an audit log.",
          "Python/FastAPI tools for card settlement and reconciliation, plus migrating the corporate website from PHP to Next.js.",
        ],
        images: [],
      },
      {
        company: "First Class Dev",
        timeframe: "Jan 2021 - Present",
        role: "CEO & Founder",
        achievements: [
          "Founder of a software house specialized in websites, custom systems and in-house platforms.",
          "Strategic and technical leadership: idea validation, architecture, development and product operations.",
          "Platforms in production: FC Noivos, Velaris, First Care, Syncro OS and FC Converter, with others in development.",
          "20+ projects delivered: websites, management systems and a native Expo app, for clients in Brazil, the United States and Argentina.",
          "Main stack: Next.js, React, TypeScript, Node.js, PostgreSQL (Neon, Supabase), Cloudflare R2 and Vercel.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Sep 2022 - Feb 2026",
        role: "Implementation Analyst (Intern → N1 → N2 → Implementation)",
        achievements: [
          "Led 16+ end-to-end ERP implementation projects, including installation, configuration and migrations between on-premise and cloud environments.",
          "Pascal/Delphi customizations and Firebird database administration, with a 50% performance gain through query optimization.",
          "Complete banking (CNAB) and tax integrations (NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED) and 100+ Fast Report reports.",
          "N2 support for complex incidents with average resolution under 4 hours and 200+ tickets documented in Salesforce.",
          "N1 support with 30+ daily tickets, a response SLA under 30 minutes and a 92% CSAT.",
        ],
        images: [],
      },
      {
        company: "Federal Institute of Mato Grosso do Sul (IFMS)",
        timeframe: "Mar 2021 - Dec 2023",
        role: "IT Technician",
        achievements: [
          "Managed the institution's IT infrastructure: workstations, servers and network printers.",
          "Hardware and software installation and configuration, internal network administration and data security policies.",
          "Technical support for teachers, students and administrative staff.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "UNIASSELVI",
        description: <>Technologist in Systems Analysis and Development (Sep 2023 - Dec 2025).</>,
      },
      {
        name: "Federal Institute of Mato Grosso do Sul (IFMS)",
        description: (
          <>
            Integrated Technical High School in Systems Analysis and Development (Jul 2019 - Dec
            2023). FECINOVA 2022: 1st place in the multidisciplinary area, best overall high school
            project and qualification for MOSTRATEC.
          </>
        ),
      },
      {
        name: "Bento Quirino State Technical School",
        description: <>Technical Course in Information Technology (Jan 2019 - Jun 2019).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend",
        description: (
          <>
            RESTful APIs with Node.js, Express.js and Next.js, NestJS services, a .NET 8 ETL and
            Python/FastAPI tools. I also work on Pascal/Delphi customizations in legacy systems.
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
        description: <>Modern, responsive interfaces with React, Next.js and Tailwind CSS.</>,
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
        title: "Databases",
        description: (
          <>
            Modeling and optimization of relational and non-relational databases: PostgreSQL, MySQL,
            MongoDB and Firebird (with performance tuning expertise).
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
            Production deployments on AWS, Vercel and Railway. Containerization with Docker,
            Git/GitHub versioning and backup/recovery strategies.
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
        title: "Integrations & Tax",
        description: (
          <>
            Integrations with ERPs and external APIs, process automation and command of Brazilian
            tax obligations: NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED and CNAB banking.
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
  title: "Writing about technology and development...",
  description: `Read what ${person.name} has published recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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

const firstClassDev: FirstClassDev = {
  path: "/first-class-dev",
  label: "First Class Dev",
  title: "First Class Dev — Websites that turn visitors into clients",
  description:
    "Technology studio founded in 2021 by Lucas Godoy. Websites designed to sell, in-house platforms and custom systems for SMBs in Brazil and abroad.",
  logo: "/images/projects/first-class-dev.png",
  hero: {
    badge: "Since 2021 · 100% online",
    headline: (
      <>
        The technology studio that turns your website into a{" "}
        <strong>new-client conversion machine</strong>
      </>
    ),
    subline: (
      <>
        Since 2021, <strong>First Class Dev</strong> has built websites, stores and landing pages
        designed to sell — fast, findable, with every pixel guiding the visitor to contact. And when
        the challenge goes beyond the website, our platforms and custom systems take over.
      </>
    ),
    note: "Reply within 4 business hours · Free, no-strings quote",
  },
  cta: {
    site: "https://www.firstclassdev.com.br",
    whatsapp: "https://wa.me/5511941683003",
    email: "mailto:equipe@firstclassdev.com.br",
  },
  stats: [
    { value: "2021", label: "Founded" },
    { value: "20+", label: "Projects delivered" },
    { value: "5", label: "Live platforms" },
    { value: "3", label: "Countries served" },
  ],
  story: {
    title: "Our story",
    headline: (
      <>
        It started with a nuisance: what if technology adapted to the business —{" "}
        <em>and not the other way around?</em>
      </>
    ),
    paragraphs: [
      <Fragment key="story-1">
        Every good product is born from a real problem. First Class Dev started in 2021, from the
        unrest of a developer who saw, every day, small and mid-sized businesses stuck with manual
        processes, endless spreadsheets and off-the-shelf software that never really fit.
      </Fragment>,
      <Fragment key="story-2">
        The question was simple:{" "}
        <em>what if technology adapted to the business — not the other way around?</em> With that
        idea, <strong>Lucas Godoy</strong>, founder and CEO, started the company: delivering
        high-level technology with proximity, agility and a focus on results.
      </Fragment>,
      <Fragment key="story-3">
        Since the first project, the way of working has been the same: understand the problem before
        writing the first line of code. We dive into the client's business, map processes and only
        then propose the solution. That has earned 20+ delivered projects and clients who have
        walked with us since 2021.
      </Fragment>,
      <Fragment key="story-4">
        Over time, one specialty became clear:{" "}
        <strong>turning websites into conversion machines</strong>. Ours are built on four pillars —
        fast and findable (performance and SEO), designed to convert (visual hierarchy, social proof
        and strategic CTAs), straight to the sale (the visitor becomes a WhatsApp conversation in a
        few clicks) and built to grow (metrics and continuous conversion optimization).
      </Fragment>,
    ],
  },
  fronts: {
    title: "What we do",
    headline: (
      <>
        Three fronts that <em>complete each other.</em>
      </>
    ),
    items: [
      {
        icon: "figma",
        title: "Brand & website",
        description:
          "Visual identity, websites, landing pages and stores that load fast, show up on Google and take the visitor to a WhatsApp conversation.",
      },
      {
        icon: "rocket",
        title: "Ready-made products",
        description:
          "In-house platforms with no installation and monthly or annual plans. They solve real problems across different markets.",
      },
      {
        icon: "grid",
        title: "Custom-built",
        description:
          "Custom systems, portals and web applications that fit the client's process and scale with it.",
      },
    ],
  },
  products: {
    title: "Our products",
    soonLabel: "soon",
    headline: (
      <>
        5 platforms live, <em>more on the way.</em>
      </>
    ),
    description:
      "Platforms born from real problems: 5 ready to use today and others in development.",
    items: [
      {
        name: "FC Noivos",
        tagline: "Your big day, planned with love.",
        description:
          "A site for the guests and a dashboard for the couple, with RSVP, seating, budget and commission-free Pix gifts.",
        image: "/images/projects/fc-noivos.jpg",
        slug: "fc-noivos",
      },
      {
        name: "First Care",
        tagline: "Complete management for your clinic.",
        description:
          "Electronic records, scheduling, finance and reports for clinics and health professionals.",
        image: "/images/projects/first-care.jpg",
        slug: "first-care",
      },
      {
        name: "Velaris",
        tagline: "From first contact to signed deal.",
        description: "CRM and management for agencies, consultancies and SMBs.",
        image: "/images/projects/velaris.jpg",
        slug: "velaris",
      },
      {
        name: "FC Converter",
        tagline: "Convert anything. Nothing leaves your device.",
        description: "File conversion 100% in the browser, free, no account and no limits.",
        image: "/images/projects/fc-converter.jpg",
        slug: "fc-converter",
      },
      {
        name: "Syncro OS",
        tagline: "Your systems and your team in sync.",
        description:
          "Web suite on top of the WinThor ERP for distributors: sales, orders, finance and HR.",
        image: "/images/projects/syncro-os.webp",
        slug: "syncro",
      },
      {
        name: "FC Moments",
        tagline: "Memories that last forever.",
        description: "Collaborative event gallery: every guest becomes a photographer.",
        image: "/images/projects/fc-moments.png",
        slug: "fc-moments",
        soon: true,
      },
      {
        name: "FC Academy",
        tagline: "Your tech school.",
        description: "Course platform with a site for each school.",
        image: "/images/projects/fc-academy.png",
        slug: "fc-academy",
        soon: true,
      },
      {
        name: "FC Chef",
        tagline: "Master chef in your pocket.",
        description: "Recipes, shopping list and weekly menu.",
        image: "/images/projects/fc-chef.png",
        soon: true,
      },
      {
        name: "Servix",
        tagline: "Less paper. More service.",
        description: "Service orders, calendar and finance for small providers.",
        image: "/images/projects/servix.png",
        slug: "servix",
        soon: true,
      },
      {
        name: "First Class Insight",
        tagline: "Knowledge that opens doors.",
        description: "Blog and digital library on technology and business.",
        image: "/images/projects/first-class-insight.png",
        slug: "first-class-insight",
        soon: true,
      },
    ],
  },
  values: {
    title: "What we believe",
    headline: (
      <>
        What moves us <em>every day.</em>
      </>
    ),
    items: [
      {
        title: "Client first",
        description:
          "We don't deliver code. We deliver results. If it doesn't solve the problem, it's not done.",
      },
      {
        title: "Simple wins",
        description:
          "We look for the simplest solution that works. Unnecessary complexity is technical debt.",
      },
      {
        title: "Long-term partners",
        description:
          "We build relationships, not transactions. Clients who have walked with us since 2021.",
      },
    ],
  },
  founder: {
    name: "Lucas Godoy",
    monogram: "LG",
    badge: "CEO & Founder",
    subtitle: "Senior developer · cloud systems",
    bio: "Senior developer and entrepreneur. Founded First Class Dev in 2021, building custom web systems and in-house platforms. Specialist in web systems, ERP integrations and cloud architectures.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/firstclassdev/" },
      { label: "Instagram", href: "https://instagram.com/firstclassdev/" },
      { label: "X", href: "https://x.com/firstclassdev_" },
      { label: "WhatsApp", href: "https://wa.me/5511941683003" },
    ],
  },
  presence: {
    eyebrow: "Global presence",
    title: "We operate 100% online, serving Brazil and abroad.",
    description:
      "Projects today in Brazil, the United States and Argentina — in Portuguese, English and Spanish.",
    countries: ["Brazil", "United States", "Argentina"],
    languages: "PT · EN · ES",
  },
  closing: {
    eyebrow: "Let's talk",
    title: (
      <>
        Your company can have a website that <em>turns visitors into clients.</em>
      </>
    ),
    description: <>In 30 minutes we understand your challenge and show how we can help.</>,
  },
};

export const enContent = {
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
