import { Reveal } from "@/components/ui/Reveal";
import { Chip, Section, SectionHeader } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { getContent } from "@/resources";
import { iconLibrary } from "@/resources/icons";
import { LuCalendar, LuSparkles } from "react-icons/lu";

const STACK = [
  "react",
  "nextjs",
  "typescript",
  "nodejs",
  "postgresql",
  "neon",
  "supabase",
  "tailwind",
  "dotnet",
  "python",
  "prisma",
  "drizzle",
  "nestjs",
  "expo",
  "vercel",
  "cloudflare",
  "express",
  "docker",
  "aws",
  "mongodb",
  "mysql",
  "git",
] as const;

// ponytail: decorative grid with a seeded pattern, not live GitHub data; swap for the GitHub API if real counts matter
function contributionLevels(weeks = 32) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: weeks * 7 }, () => {
    const r = rand();
    return r < 0.3 ? 0 : r < 0.55 ? 1 : r < 0.75 ? 2 : r < 0.9 ? 3 : 4;
  });
}

const levelClass = ["bg-muted", "bg-primary/25", "bg-primary/45", "bg-primary/70", "bg-primary"];

function Marquee({ icons, reverse }: { icons: readonly string[]; reverse?: boolean }) {
  const row = [...icons, ...icons];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div
        className={cn("flex w-max gap-3", reverse ? "animate-marquee-reverse" : "animate-marquee")}
      >
        {row.map((name, i) => {
          const Icon = iconLibrary[name];
          return (
            <span
              key={`${name}-${i}`}
              title={name}
              className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-foreground"
            >
              <Icon className="size-6" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Experience({ locale }: { locale: string }) {
  const { landing, about } = getContent(locale);
  const levels = contributionLevels();
  const total = levels.reduce<number>((sum, l) => sum + l * 3, 0);
  const half = Math.ceil(STACK.length / 2);

  return (
    <Section id="experience">
      <Reveal>
        <SectionHeader eyebrow={landing.experience.eyebrow} title={landing.experience.title} />
      </Reveal>

      <Reveal className="mb-14 overflow-hidden rounded-3xl border border-border bg-card shadow-xs">
        <div className="p-5 sm:p-6">
          <p className="text-sm font-semibold text-foreground">{landing.experience.github}</p>
          <p className="mb-4 text-xs text-muted-foreground">
            {total} {landing.experience.contributions}
          </p>
          <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-hidden">
            {levels.map((level, i) => (
              <span
                key={i}
                className={cn("aspect-square w-full min-w-2 rounded-[3px]", levelClass[level])}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-border py-5">
          <Marquee icons={STACK.slice(0, half)} />
          <Marquee icons={STACK.slice(half)} reverse />
        </div>
      </Reveal>

      <ol className="relative flex flex-col gap-12 border-l border-border pl-6 sm:pl-10">
        {about.work.experiences.map((exp, index) => {
          const [highlight, ...rest] = exp.achievements;
          const current = /present|presente/i.test(exp.timeframe);
          return (
            <Reveal key={`${exp.company}-${index}`}>
              <li className="relative">
                <span
                  className={cn(
                    "absolute top-2 -left-[29px] size-2.5 rounded-full ring-4 ring-background sm:-left-[45px]",
                    current ? "bg-primary" : "bg-border",
                  )}
                />
                <span className="font-mono text-sm text-muted-foreground italic">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{exp.company}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {exp.role}
                </h3>
                <p
                  className={cn(
                    "mt-3 flex items-center gap-2 text-sm",
                    current ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <LuCalendar className="size-4" /> {exp.timeframe}
                </p>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                )}
                {highlight && (
                  <p className="mt-4 flex gap-2 font-medium text-foreground">
                    <LuSparkles className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{highlight}</span>
                  </p>
                )}
                {rest.length > 0 && (
                  <ul className="mt-2 flex flex-col gap-1.5 pl-6 text-sm leading-relaxed text-muted-foreground">
                    {rest.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
