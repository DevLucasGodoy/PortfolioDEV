import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { Card, StatusBadge } from "@/components/ui/primitives";
import { getContent } from "@/resources";
import Image from "next/image";
import { LuBadgeCheck, LuCheck, LuMapPin } from "react-icons/lu";

/** "How it works": profile card + availability + monthly plan. */
export function Hire({ locale }: { locale: string }) {
  const { landing, person } = getContent(locale);
  const { hire } = landing;

  return (
    <Reveal className="grid gap-5 md:grid-cols-2">
      <Card className="flex flex-col gap-6 p-6">
        <div className="-rotate-2 rounded-3xl border border-border bg-background p-5 shadow-lg transition-transform duration-300 hover:rotate-0">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-2">
              <span className="relative size-24 overflow-hidden rounded-full border-4 border-card shadow">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </span>
              <p className="text-center text-lg font-semibold leading-tight text-foreground">
                {person.name}
              </p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <LuMapPin className="size-3" /> {hire.location}
              </p>
            </div>
            <dl className="flex flex-1 flex-col divide-y divide-border text-center">
              {hire.stats.map((stat) => (
                <div key={stat.label} className="py-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <dd className="text-xs text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-primary">
            <LuBadgeCheck className="size-4" /> {hire.verified}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{hire.motto}</p>
        </div>
        <div className="mt-auto">
          <StatusBadge>{hire.available}</StatusBadge>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">{hire.heading}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{hire.text}</p>
        </div>
      </Card>

      <Card className="flex flex-col gap-4 p-6">
        <h3 className="text-2xl font-semibold text-foreground">{hire.plan.name}</h3>
        <p className="text-sm text-muted-foreground">
          {hire.plan.tagline} {hire.plan.description}
        </p>
        <hr className="border-border" />
        <span className="w-fit rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
          {hire.plan.note}
        </span>
        <p className="text-4xl font-semibold tracking-tight text-foreground">
          {hire.plan.price}
          <span className="text-lg font-normal text-muted-foreground">{hire.plan.period}</span>
        </p>
        {hire.plan.others && (
          <p className="-mt-2 text-xs text-muted-foreground">
            {hire.plan.href ? (
              <a
                href={hire.plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {hire.plan.others}
              </a>
            ) : (
              hire.plan.others
            )}
          </p>
        )}
        <ul className="grid gap-2 text-sm text-foreground sm:grid-cols-2">
          {hire.plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <LuCheck className="size-4 shrink-0 text-primary" /> {feature}
            </li>
          ))}
        </ul>
        <ButtonLink href="#contact" variant="outline" className="mt-auto w-fit">
          <span className="size-2 rounded-full bg-primary" />
          {landing.cta.connect}
        </ButtonLink>
      </Card>
    </Reveal>
  );
}
