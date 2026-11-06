import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/primitives";
import { getContent } from "@/resources";
import { LuPlus } from "react-icons/lu";

export function Services({ locale }: { locale: string }) {
  const { services } = getContent(locale).landing;

  return (
    <Section id="services">
      <Reveal>
        <SectionHeader eyebrow={services.eyebrow} title={services.title} />
      </Reveal>
      <Reveal className="divide-y divide-border border-y border-border">
        {services.items.map((item, index) => (
          <details key={item.title} className="group py-5" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-medium text-foreground sm:text-2xl [&::-webkit-details-marker]:hidden">
              <span>
                <span className="text-muted-foreground">{index + 1}.</span> {item.title}
              </span>
              <LuPlus className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.description}
            </p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
