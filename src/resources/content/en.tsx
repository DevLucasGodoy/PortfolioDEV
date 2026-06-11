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
      form below — I'll reply as soon as possible.
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
  title: `Portfolio - Senior Developer & Entrepreneur`,
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
          "Partner responsible for technology and innovation, leading the company's digital transformation.",
          "Built internal systems and strategic dashboards to optimize processes and enable data-driven decision making.",
          "ERP integration and automation of critical processes, connecting operations to a single data layer.",
          "Structured scalable digital products with commercialization potential (SaaS) as new revenue streams.",
          "Defined architecture, chose the stack and worked hands-on as a senior developer.",
        ],
        images: [],
      },
      {
        company: "First Class Dev",
        timeframe: "Jan 2021 - Present",
        role: "CEO & Founder",
        achievements: [
          "Founder of a software house specialized in building web solutions and digital products (SaaS).",
          "Strategic and technical leadership: custom systems, idea validation and development of scalable products.",
          "Main stack: Node.js + Express, React.js + Next.js, PostgreSQL/MySQL/MongoDB, deployed on AWS, Vercel and Railway.",
          "20+ projects delivered to production: management systems, e-commerce, dashboards and SaaS — with a satisfaction rate above 90%.",
          "API and ERP integrations, software and database architecture, and strategic support helping clients digitize their processes.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jun 2025 - Feb 2026",
        role: "Implementation Analyst",
        achievements: [
          "Led 16+ end-to-end ERP implementation projects (planning → go-live), including installation, configuration and migrations between on-premise and cloud environments.",
          "Pascal/Delphi customizations and Firebird database administration, with a 50% performance gain through query optimization.",
          "Complete banking (CNAB) and tax integrations (NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED).",
          "100+ reports built in Fast Report (KPIs, tax, management) and technical training for teams of up to 10 users.",
          "Backup, recovery and server infrastructure management strategies ensuring integrity and operational continuity.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2025 - Jun 2025",
        role: "N2 Support Analyst",
        achievements: [
          "Diagnosed and resolved complex ERP incidents with an average resolution time under 4 hours.",
          "Structured documentation of 200+ tickets in Salesforce CRM, building a knowledge base that sped up future resolutions.",
          "Advanced support for tax processes (NF-e, NFC-e, NFS-e, MDF-e), custom layouts/reports and permission management.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2023 - Dec 2024",
        role: "N1 Support Analyst",
        achievements: [
          "30+ daily tickets (phone, email, chat) with a response SLA under 30 minutes and a 92% CSAT.",
          "Friendly support for issuing tax documents (NF-e, NFC-e, NFS-e, MDF-e) and tax configuration (CST, NCM, CFOP).",
          "Authored manuals and training materials, managed access profiles and permissions.",
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Sep 2022 - Dec 2022",
        role: "Intern · Support Analyst",
        achievements: [
          "Initial internship in ERP technical support — the foundation for the N1 → N2 → Implementation path at the company.",
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
            2023).
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
            Robust RESTful APIs with Node.js, Express.js and JWT authentication. I also work on
            Pascal/Delphi customizations in legacy systems.
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
        description: <>Modern, responsive interfaces with React, Next.js and Tailwind CSS.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
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
  title: "First Class Dev — Custom technology that grows your business",
  description:
    "Software house founded in 2021 by Lucas Godoy. SaaS, custom web systems and digital brand for small and mid-sized businesses in Brazil and abroad.",
  logo: "/images/projects/first-class-dev.png",
  hero: {
    badge: "Since 2021 · 100% online",
    headline: (
      <>
        Custom technology that makes your business <strong>sell more and grow</strong>
      </>
    ),
    subline: (
      <>
        <strong>First Class Dev</strong> is the technology studio behind my products. We turn
        processes into technology that sells: SaaS, websites, stores and custom systems for SMBs in
        Brazil and abroad.
      </>
    ),
  },
  cta: {
    site: "https://www.firstclassdev.com.br",
    whatsapp: "https://wa.me/5519996168818",
    email: "mailto:contato@firstclassdev.com.br",
  },
  stats: [
    { value: "2021", label: "Founded" },
    { value: "20+", label: "Projects delivered" },
    { value: "11", label: "SaaS products" },
    { value: "3", label: "Countries served" },
  ],
  story: {
    title: "Our story",
    paragraphs: [
      <Fragment key="story-1">
        Every good product is born from a real problem. First Class Dev started in 2021, from the
        unrest of a developer who saw, every day, small and mid-sized businesses stuck with manual
        processes, endless spreadsheets and off-the-shelf software that never really fit.
      </Fragment>,
      <Fragment key="story-2">
        The question was simple: <em>what if technology adapted to the business — not the other way
        around?</em> With that idea, <strong>Lucas Godoy</strong>, founder and CEO, started the
        company: delivering high-level technology with proximity, agility and a focus on results.
      </Fragment>,
      <Fragment key="story-3">
        Since the first project, the way of working has been the same: understand the problem before
        writing the first line of code. We dive into the client's business, map processes and only
        then propose the solution. That has earned 20+ delivered projects and clients who have
        walked with us since 2021.
      </Fragment>,
    ],
  },
  fronts: {
    title: "What we do",
    items: [
      {
        icon: "rocket",
        title: "SaaS",
        description:
          "Ready-to-use products with monthly subscription and no installation. They solve real problems across different markets.",
      },
      {
        icon: "grid",
        title: "Dev",
        description:
          "Custom systems, portals and web applications that fit the client's process and scale with it.",
      },
      {
        icon: "figma",
        title: "Brand",
        description:
          "Visual identity, websites, landing pages and stores that turn the brand into pixels that sell.",
      },
    ],
  },
  products: {
    title: "Our products",
    description: "11 SaaS born from real problems — living proof of our engineering.",
    items: [
      {
        name: "Radar B3",
        tagline: "Where strategy meets technology",
        description: "Stock market analysis with signals, dashboards and alerts.",
        image: "/images/projects/radar-b3.png",
        slug: "radar-b3",
      },
      {
        name: "Servix",
        tagline: "Less paper. More service.",
        description: "Work-order management for technical teams.",
        image: "/images/projects/servix.png",
        slug: "servix",
      },
      {
        name: "Syncro",
        tagline: "Your systems and your team in sync",
        description: "No-code systems integration and automation.",
        image: "/images/projects/syncro.png",
        slug: "syncro",
      },
      {
        name: "Velaris",
        tagline: "Management that drives growth",
        description: "Complete ERP/CRM for SMBs.",
        image: "/images/projects/velaris.png",
        slug: "velaris",
      },
      {
        name: "First Care",
        tagline: "Smart, simple and human care",
        description: "Clinical management and customer-service platform.",
        image: "/images/projects/first-care.png",
        slug: "first-care",
      },
      {
        name: "FC Converter",
        tagline: "Unlimited file converter",
        description: "File conversion 100% in the browser, free and unlimited.",
        image: "/images/projects/fc-converter.png",
        slug: "fc-converter",
      },
      {
        name: "First Class Insight",
        tagline: "Executive content that speeds up decisions",
        description: "Summaries, courses and case studies for leaders.",
        image: "/images/projects/first-class-insight.png",
        slug: "first-class-insight",
      },
      {
        name: "FC Academy",
        tagline: "A tech school with real projects",
        description: "Technology training with market-grade practice.",
        image: "/images/projects/fc-academy.png",
        slug: "fc-academy",
      },
      {
        name: "FC Noivos",
        tagline: "Your big day, planned with love",
        description: "A site for the guests and a complete dashboard for the couple, with built-in Pix.",
        image: "/images/projects/fc-noivos.png",
        slug: "fc-noivos",
      },
      {
        name: "FC Chef",
        tagline: "Master Chef",
        description: "Recipes, shopping list and weekly menu.",
        image: "/images/projects/fc-chef.png",
        slug: "fc-chef",
      },
      {
        name: "FC Moments",
        tagline: "Every moment, in the right place",
        description: "Event and special-moment management.",
        image: "/images/projects/fc-moments.png",
        slug: "fc-moments",
      },
    ],
  },
  values: {
    title: "What we believe",
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
        description: "We build relationships, not transactions. Clients who have walked with us since 2021.",
      },
    ],
  },
  closing: {
    title: <>Let's talk?</>,
    description: (
      <>
        If your company wants to turn a challenge into results, the next chapter of First Class Dev
        can include your business. The conversation starts here.
      </>
    ),
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
