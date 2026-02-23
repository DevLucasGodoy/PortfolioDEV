import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Download, Mail, ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-24 px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section - Redesenhado */}
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-8 flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start">
            <div className="flex-col flex flex-1 space-y-6 text-center sm:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none text-gradient bg-clip-text"
                yOffset={8}
                text={`Olá! Sou o ${DATA.name.split(" ")[0]}.`}
              />
              <BlurFadeText
                className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex gap-3 flex-wrap pt-4 justify-center sm:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Link href="#contact">
                      Entre em Contato
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="font-semibold border-2 hover:bg-secondary transition-all duration-300 hover:scale-105"
                  >
                    <Link href="#projects">Ver Projetos</Link>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300 animate-glow"></div>
                <Avatar className="relative size-32 sm:size-36 border-4 border-background shadow-2xl ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="text-2xl font-bold">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section - Melhorado */}
      <section id="about" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-4xl">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-emerald-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">Sobre</h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
              <Markdown className="prose prose-lg max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Work Experience Section - Design Premium */}
      <section id="work" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-emerald-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold">
                    Experiência de Trabalho
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Minha trajetória profissional construindo soluções inovadoras
                </p>
              </div>
            </BlurFade>

            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-emerald-500 to-transparent hidden md:block"></div>

              <div className="space-y-6">
                {DATA.work.map((work, id) => (
                  <BlurFade
                    key={`${work.company}-${id}`}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <div className="relative md:pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 hidden md:block"></div>

                      {/* Card com efeito hover aprimorado */}
                      <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                        <div className="relative p-6">
                          <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
                            href={work.href}
                            badges={work.badges}
                            period={`${work.start} - ${work.end ?? "Present"}`}
                            description={work.description}
                          />
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Design Premium */}
      <section id="education" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-emerald-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold">Formação</h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Minha jornada acadêmica e desenvolvimento de conhecimento
                </p>
              </div>
            </BlurFade>

            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-primary to-transparent hidden md:block"></div>

              <div className="space-y-6">
                {DATA.education.map((education, id) => (
                  <BlurFade
                    key={education.school}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                  >
                    <div className="relative md:pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-emerald-500 border-4 border-background shadow-lg shadow-emerald-500/50 hidden md:block"></div>

                      {/* Card com efeito hover aprimorado */}
                      <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                        <div className="relative p-6">
                          <ResumeCard
                            key={education.school}
                            href={education.href}
                            logoUrl={education.logoUrl}
                            altText={education.school}
                            title={education.school}
                            subtitle={education.degree}
                            period={`${education.start} - ${education.end}`}
                          />
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Redesenhado */}
      <section id="skills" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-emerald-500 rounded-full"></div>
                <h2 className="text-3xl font-bold">Competências</h2>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.map((skill, id) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.02}
                    >
                      <Badge
                        className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Projects Section - Redesenhado */}
      <section id="projects" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-6xl space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold ring-1 ring-primary/20">
                  Projetos em Destaque
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  Confira meus{" "}
                  <span className="text-gradient">últimos trabalhos</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Trabalhei em diversos projetos, desde sites simples até
                  aplicações web complexas. Aqui estão alguns dos meus
                  favoritos.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <div className="transition-all duration-300 hover:scale-[1.02]">
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons/Contributions Section - Melhorado */}
      <section id="hackathons" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-4xl space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold ring-1 ring-primary/20">
                  Contribuições e Trabalhos
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  Minhas <span className="text-gradient">Contribuições</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Durante meu tempo na faculdade e trabalhando como freelancer,
                  participei de trabalhos e projetos. Foi uma experiência única
                  ver as infinitas possibilidades trazidas para a vida por um
                  grupo de pessoas motivadas e apaixonadas por novas
                  tecnologias.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section - Redesenhado */}
      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-4xl">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-emerald-500/5 to-background border border-border/50 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

              <div className="relative px-8 py-16 text-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold ring-1 ring-primary/20">
                    Contato
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    Entre em <span className="text-gradient">Contato</span>
                  </h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Quer bater um papo? Basta me enviar uma mensagem{" "}
                    <Link
                      href="mailto:devlucasgodoy@proton.me?subject=Portfolio%20-%20DevLucasGodoy"
                      target="_blank"
                      className="text-primary hover:underline font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      com uma pergunta pelo meu e-mail
                      <Mail className="h-4 w-4" />
                    </Link>
                    . Responderei sempre que puder.
                  </p>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY * 17}>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <Link
                        href="mailto:lucas.moraes.godoy@gmail.com?subject=Portfolio%20-%20DevLucasGodoy"
                        target="_blank"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Enviar E-mail
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="font-semibold border-2 hover:bg-secondary transition-all duration-300 hover:scale-105 group"
                    >
                      <Link
                        href="/LucasGodoy(Curriculo_DEV).pdf"
                        download="Lucas_Godoy_Curriculo.pdf"
                      >
                        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                        Baixar Currículo
                      </Link>
                    </Button>
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
