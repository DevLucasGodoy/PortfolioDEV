import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lucas Godoy",
  initials: "LG",
  url: "https://devlucasgodoy.vercel.app/",
  location: "Nova Andradina, MS",
  locationLink: "https://www.google.com/maps/place/novaandradina",
  description:
    "Desenvolvedor Full-Stack e Analista de Sistemas.",
  summary: "Desde do meu primeiro contato com o desenvolvimento de novas aplicações eu me senti fascinado com esse novo mundo que me foi apresentado. A partir daí eu me empenhei muito, e ainda continuo, em estudar muito para entender tudo sobre o desenvolvimento de aplicações web. Cursar o ensino médio junto com o técnico me ajudou muito a me desenvolver. Desde então todo o meu foco tem sido me aprimorar cada vez mais. Tenho como objetivo sempre me aprimorar e desenvolver novas aplicações e recursos.",
  avatarUrl: "/lucas_v2.jpeg",
  skills: [
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Framer Motion",
    "Vercel",
    "Vite",
    "Webpack",
    "Babel",
    "ESLint",
    "Prettier",
    "Angular",
    "APIs",
    "Tailwind CSS",
    "Bootstrap",
    "JSON",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "HTML",
    "CSS",
    "SCSS",
    "LaTeX",
    "Figma",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devlucasgodoy@proton.me",
    tel: "+55 19 99616-8818",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DevLucasGodoy",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devlucasgodoy/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/devlucasgodoy/",
        icon: Icons.instagram,
        navbar: true,
      },
      Email: {
        name: "E-mail",
        url: "malito:devlucasgodoy@proton.me",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ganso Sistemas",
      href: "https://ganso.com.br",
      badges: [],
      location: "Presencial",
      title: "Analista de Suporte ERP",
      logoUrl: "/ganso.jpeg",
      start: "Set 2022",
      end: "Hoje",
      description:
        "Como Analista de Suporte ERP, sou responsável por fornecer suporte técnico e funcional aos usuários, monitorar e otimizar o desempenho do sistema, realizar treinamentos, documentar soluções, e colaborar para a melhoria contínua do ERP. Minhas principais virtudes incluem atenção aos detalhes, habilidades comunicativas, proatividade, capacidade analítica, colaboração em equipe, e adaptabilidade às mudanças e novas tecnologias.",
    },
    {
      company: "Freelancer",
      badges: [],
      href: "",
      location: "Remoto",
      title: "Freelancer de Projetos de Desenvolvimento WEB",
      logoUrl: "/freelancer.png",
      start: "Jun 2021",
      end: "Hoje",
      description:
        "Como freelancer em Desenvolvimento Web com mais de dois anos de experiência, desenvolvo websites responsivos e funcionais utilizando tecnologias como React, Typescript, Next,js, entre outras. Minhas responsabilidades incluem garantir a compatibilidade cross-browser, otimizar para dispositivos móveis, realizar manutenção contínua, e colaborar estreitamente com clientes para compreender suas necessidades e transformar requisitos técnicos em soluções digitais. Minha abordagem focada no cliente e minha habilidade em gerenciar prazos e comunicação constante garantem a satisfação e o sucesso dos projetos.\n\nEntre minhas principais virtudes estão a autonomia, a criatividade e a comunicação eficaz. Possuo a capacidade de trabalhar de forma independente, gerenciar meu tempo eficientemente e desenvolver soluções inovadoras que excedem as expectativas dos clientes. Sou detalhista, assegurando a qualidade do código e a funcionalidade perfeita dos projetos, além de ser flexível e capaz de me adaptar rapidamente a novas tecnologias e mudanças nos requisitos dos projetos. Minha experiência em colaborar com equipes complementa minha habilidade em integrar diversas áreas do desenvolvimento web, alcançando resultados excepcionais.",
    },
    {
      company: "Instituto Federal de Mato Grosso do Sul",
      badges: [],
      href: "",
      location: "Presencial",
      title: "Profissional de Tecnologia da Informação (TI)",
      logoUrl: "/IF.png",
      start: "Mar 2021",
      end: "Dez 2024",
      description:
        "Neste minha função no IFMS fui responsável pela gestão e manutenção de todos os recursos de hardware e software da instituição. Isso inclui desde a instalação e configuração de computadores, servidores e impressoras, até o gerenciamento da rede interna, garantindo a conectividade e segurança dos dados.",
    },
  ],
  education: [
    {
      school: "UNIASSELVI",
      href: "https://portal.uniasselvi.com.br",
      degree: "Graduação em Análise e Desenvolvimento de Sistemas",
      logoUrl: "/uniasselvi.png",
      start: "Jul 2023",
      end: "Hoje",
    },
    {
      school: "Instituto Federal de Mato Grosso do Sul",
      href: "https://www.ifms.edu.br",
      degree: "Ensino Médio e Técnico em Análise e Desenvolvimento de Sistemas",
      logoUrl: "/IF.png",
      start: "Jul 2019",
      end: "Dez 2022",
    },
    {
      school: "Colégio Técnico Bento Quirino",
      href: "https://www.bentoquirino.com.br/novo/",
      degree: "Ensino Médio e Técnico em Análise e Desenvolvimento de Sistemas",
      logoUrl: "/bentoquirino.jpeg",
      start: "Fev 2019",
      end: "Jun 2019",
    },
  ],

  projects: [
    {
      title: "First Class Dev",
      href: "https://www.firstclassdev.com.br",
      dates: "Abr 2024 - Out 2024",
      active: true,
      description: "Projeto desenvolvido para uma empresa de software house local com o foco em desenvolvimento de aplicações inovadoras.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.firstclassdev.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/firstclassdev.png",
    },
    {
      title: "Best Choice",
      href: "https://www.bestchoiceoficial.com.br/",
      dates: "Dez 2024 - Jan 2025",
      active: true,
      description: "A Best Choice nasceu com um propósito claro: ajudar você a encontrar as melhores ofertas do mercado de forma simples e eficiente.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Verrcel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bestchoiceoficial.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bestchoice.png",
    },
    {
      title: "FC News",
      href: "https://fcnews.vercel.app/",
      dates: "Abr 2024 - Out 2024",
      active: true,
      description: "Sua fonte confiável para as últimas notícias, insights e análises de tecnologia. Trazemos a você uma cobertura detalhada dos desenvolvimentos mais importantes no mundo da tecnologia.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://fcnews.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fcnews.png",
    },
    {
      title: "FC Converter",
      href: "https://fcconverter.vercel.app",
      dates: "Dez 2024",
      active: true,
      description: "Liberte a sua criatividade com FC Converter – a melhor ferramenta online para multimídia ilimitada e gratuita conversão. Transforme imagens, áudio e vídeos sem esforço e sem restrições.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://fcconverter.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fcconverter.png",
    },
    {
      title: "Welcome Vistos",
      href: "https://welcomevistos.com.br",
      dates: "Jan 2023 - Fev 2024",
      active: true,
      description: "Aplicação web desenvolvidade para uma empresa de assessoria especializada em vistos de turismo, negócios e estudos para 5 países.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "SCSS",
        "PHP",
      ],
      links: [
        {
          type: "Website",
          href: "https://welcomevistos.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/welcome.png",
    },
    {
      title: "Portifólio de Desenvolvedor",
      href: "portifoliodesenvolvedor.vercel.app",
      dates: "Jav 2023 - Set 2023",
      active: true,
      description:
        "Desenvolvimento de aplicação web para um portfólio de desenvolvedor baseada na nossa IDE de código tão amada, o Visual Studio Code.",
      technologies: [
        "Next.js",
        "Typescript",
        "JavaScript",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "portifoliodesenvolvedor.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Código",
          href: "https://github.com/DevLucasGodoy/PortfolioFullDev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vscode.png",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "First Class NFT",
      dates: "Jameiro de 2025",
      funcao: "Desenvolvedor",
      location: "Nova Andradina, Mato Grosso do Sul.",
      description: "Criar uma coleção de NFTs exclusiva e inovadora, explorando o universo da tecnologia e suas diversas manifestações. A coleção será composta por obras de arte digital únicas, geradas por algoritmos e inteligência artificial, representando conceitos como inteligência artificial, realidade virtual, internet das coisas, exploração espacial e outros temas futuristas.",
      image: "/nft.png",
      links: [],
    },
    {
      title: "First Class Dev",
      dates: "Fevereiro de 2023",
      funcao: "Fundador e CEO",
      location: "Nova Andradina, Mato Grosso do Sul.",
      description:"Software house com o foco em desenvolvimento de aplicações inovadoras.",
      image: "/fcd-oficial.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.firstclassdev.com.br",
        },
      ],
    },
    {
      title: "FECINOVA | 1º Lugar na Área Multidisciplinar no Nível Médio",
      dates: "Outubro de 2022",
      location: "Nova Andradina, Mato Grosso do Sul.",
      funcao: "",
      description: "Campeões da FECINOVA! Nossa equipe arrasou na categoria Multidisciplinar do Nível Médio, com um projeto inovador que promove a inclusão social e a acessibilidade para diversas pessoas em um sistema EAD.",
      image: "/IF.png",
      links: [],
    },
    {
      title: "FECINOVA | Credencial para MOSTRATEC",
      dates: "Outubro de 2022",
      location: "Nova Andradina, Mato Grosso do Sul.",
      funcao: "",
      description: "Direto para a MOSTRATEC! Nosso projeto, vencedor da FECINOVA, representou nosso instituto na maior feira de ciências da América Latina. ",
      image: "/IF.png",
      links: [],
    },
    {
      title: "FECINOVA | Melhor Trabalho Geral do Nível Médio",
      dates: "Outubro de 2022",
      location: "Nova Andradina, Mato Grosso do Sul.",
      funcao: "",
      description: "Campeões absolutos da FECINOVA! Nosso projeto foi eleito o melhor do nível médio. Que orgulho!",
      icon: "public",
      image: "/IF.png",
      links: [],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
  ],
} as const;
