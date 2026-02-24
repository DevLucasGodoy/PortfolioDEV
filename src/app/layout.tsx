import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const fontSans = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    ...DATA.skills,
    "portfolio",
    "desenvolvedor",
    "programador",
    "fullstack",
    "web developer",
    "react",
    "next.js",
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name} - Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name}`,
    description: DATA.description,
    images: [DATA.avatarUrl],
    creator: "@" + DATA.name.replace(/\s+/g, ""),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "relative overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={100}>
            {/* Background decorativo global - Nova versão otimizada */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              {/* Gradiente de fundo principal com transição suave */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-50/20 dark:to-green-950/30" />

              {/* Grid pattern moderno */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />

              {/* Elementos decorativos flutuantes - Sistema redesenhado */}
              <div
                className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] bg-gradient-to-br from-green-500/15 to-emerald-500/10 dark:from-green-500/10 dark:to-emerald-500/5 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "0s", animationDuration: "25s" }}
              />

              <div
                className="absolute top-[15%] -right-[15%] h-[900px] w-[900px] bg-gradient-to-bl from-teal-500/12 to-cyan-500/8 dark:from-teal-500/8 dark:to-cyan-500/5 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "2s", animationDuration: "30s" }}
              />

              <div
                className="absolute bottom-[5%] left-[15%] h-[1100px] w-[1100px] bg-gradient-to-tr from-green-400/10 to-lime-400/6 dark:from-green-400/7 dark:to-lime-400/4 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "4s", animationDuration: "28s" }}
              />

              <div
                className="absolute top-[45%] right-[25%] h-[700px] w-[700px] bg-gradient-to-tl from-emerald-500/10 to-green-600/8 dark:from-emerald-500/6 dark:to-green-600/4 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "1s", animationDuration: "27s" }}
              />

              <div
                className="absolute -bottom-[20%] -right-[15%] h-[950px] w-[950px] bg-gradient-to-tr from-green-600/12 to-teal-600/8 dark:from-green-600/8 dark:to-teal-600/5 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "3s", animationDuration: "32s" }}
              />

              {/* Efeito de vinheta nas bordas - suavizado */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_60%,hsl(var(--background))_100%)]" />

              {/* Glow accent - ponto focal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl animate-glow" />
            </div>

            {/* Container principal */}
            <div className="relative">
              {/* Navbar fixa no bottom */}
              <Navbar />

              {/* Conteúdo principal com animação de entrada */}
              <div className="max-w-7xl mx-auto animate-fade-in">
                {children}
              </div>
            </div>

            {/* Scroll to top button */}
            <ScrollToTop />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
