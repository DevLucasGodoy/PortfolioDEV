import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

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
    href: "https://www.firstclassdev.com.br",
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
          <>
            Partner responsible for technology and innovation, leading the company's digital
            transformation.
          </>,
          <>
            Built internal systems and strategic dashboards to optimize processes and enable
            data-driven decision making.
          </>,
          <>
            ERP integration and automation of critical processes, connecting operations to a single
            data layer.
          </>,
          <>
            Structured scalable digital products with commercialization potential (SaaS) as new
            revenue streams.
          </>,
          <>Defined architecture, chose the stack and worked hands-on as a senior developer.</>,
        ],
        images: [],
      },
      {
        company: "First Class Dev",
        timeframe: "Jan 2021 - Present",
        role: "CEO & Founder",
        achievements: [
          <>
            Founder of a software house specialized in building web solutions and digital products
            (SaaS).
          </>,
          <>
            Strategic and technical leadership: custom systems, idea validation and development of
            scalable products.
          </>,
          <>
            Main stack: Node.js + Express, React.js + Next.js, PostgreSQL/MySQL/MongoDB, deployed on
            AWS, Vercel and Railway.
          </>,
          <>
            20+ projects delivered to production: management systems, e-commerce, dashboards and
            SaaS — with a satisfaction rate above 90%.
          </>,
          <>
            API and ERP integrations, software and database architecture, and strategic support
            helping clients digitize their processes.
          </>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jun 2025 - Feb 2026",
        role: "Implementation Analyst",
        achievements: [
          <>
            Led 16+ end-to-end ERP implementation projects (planning → go-live), including
            installation, configuration and migrations between on-premise and cloud environments.
          </>,
          <>
            Pascal/Delphi customizations and Firebird database administration, with a 50%
            performance gain through query optimization.
          </>,
          <>
            Complete banking (CNAB) and tax integrations (NF-e, NFC-e, NFS-e, CT-e, MDF-e, SPED).
          </>,
          <>
            100+ reports built in Fast Report (KPIs, tax, management) and technical training for
            teams of up to 10 users.
          </>,
          <>
            Backup, recovery and server infrastructure management strategies ensuring integrity and
            operational continuity.
          </>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2025 - Jun 2025",
        role: "N2 Support Analyst",
        achievements: [
          <>
            Diagnosed and resolved complex ERP incidents with an average resolution time under 4
            hours.
          </>,
          <>
            Structured documentation of 200+ tickets in Salesforce CRM, building a knowledge base
            that sped up future resolutions.
          </>,
          <>
            Advanced support for tax processes (NF-e, NFC-e, NFS-e, MDF-e), custom layouts/reports
            and permission management.
          </>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Jan 2023 - Dec 2024",
        role: "N1 Support Analyst",
        achievements: [
          <>
            30+ daily tickets (phone, email, chat) with a response SLA under 30 minutes and a 92%
            CSAT.
          </>,
          <>
            Friendly support for issuing tax documents (NF-e, NFC-e, NFS-e, MDF-e) and tax
            configuration (CST, NCM, CFOP).
          </>,
          <>Authored manuals and training materials, managed access profiles and permissions.</>,
        ],
        images: [],
      },
      {
        company: "Ganso Sistemas",
        timeframe: "Sep 2022 - Dec 2022",
        role: "Intern · Support Analyst",
        achievements: [
          <>
            Initial internship in ERP technical support — the foundation for the N1 → N2 →
            Implementation path at the company.
          </>,
        ],
        images: [],
      },
      {
        company: "Federal Institute of Mato Grosso do Sul (IFMS)",
        timeframe: "Mar 2021 - Dec 2023",
        role: "IT Technician",
        achievements: [
          <>
            Managed the institution's IT infrastructure: workstations, servers and network printers.
          </>,
          <>
            Hardware and software installation and configuration, internal network administration
            and data security policies.
          </>,
          <>Technical support for teachers, students and administrative staff.</>,
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

export const enContent = {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};
