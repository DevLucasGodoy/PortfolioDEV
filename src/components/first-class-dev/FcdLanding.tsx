"use client";

/* ============================================================================
 * First Class Dev — página "Sobre" (port do mockup FcdStandardPage).
 * Sem Nav/Footer próprios: integra ao Header + Footer globais do site.
 * Content-driven e bilíngue via `fcd` (getContent(locale).firstClassDev).
 * Tipografia: vars --font-fcd-* injetadas pelo wrapper em page.tsx.
 * ========================================================================== */

import type { FirstClassDev } from "@/types";
import { useEffect, useRef, useState } from "react";
import styles from "./fcd.module.scss";

/* -- Paleta da plataforma --------------------------------------------------- */
const C = {
  page: "#FBFBF9",
  dark: "#0E1512",
  brand: "#00BF63",
  bright: "#1FDB80",
  mint: "#5FE0A8",
  light: "#9DF0CC",
  body: "#6A716E",
  sub: "#8A938E",
  line: "#EAECE9",
  line2: "#CFE8DA",
  soft: "#E4F7EE",
  btnInk: "#06241A",
};

const FONT = {
  display: "var(--font-fcd-display), 'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
  body: "var(--font-fcd-body), 'Instrument Sans', ui-sans-serif, system-ui, sans-serif",
  mono: "var(--font-fcd-mono), 'Space Mono', ui-monospace, monospace",
  serif: "var(--font-fcd-serif), 'Instrument Serif', Georgia, serif",
};

const SHELL = "mx-auto w-full max-w-[1200px] px-5 md:px-10";
const GRID_BG =
  "linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)";

/* -- Reveal on scroll (IntersectionObserver, zero deps) -------------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* -- Primitivos ------------------------------------------------------------- */
function Eyebrow({
  children,
  color = C.brand,
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        fontFamily: FONT.mono,
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </div>
  );
}

const isExt = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

function PrimaryBtn({
  href,
  children,
  lg = false,
}: {
  href: string;
  children: React.ReactNode;
  lg?: boolean;
}) {
  return (
    <a
      href={href}
      target={isExt(href) ? "_blank" : undefined}
      rel={isExt(href) ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-semibold leading-none transition hover:-translate-y-0.5"
      style={{
        fontFamily: FONT.display,
        padding: lg ? "15px 30px" : "10px 19px",
        fontSize: lg ? 16 : 14,
        color: C.btnInk,
        background: C.bright,
        boxShadow: "0 6px 20px -8px rgba(43,227,142,0.75)",
      }}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function GhostBtn({
  href,
  children,
  lg = false,
}: {
  href: string;
  children: React.ReactNode;
  lg?: boolean;
}) {
  return (
    <a
      href={href}
      target={isExt(href) ? "_blank" : undefined}
      rel={isExt(href) ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-semibold leading-none transition hover:bg-white/15"
      style={{
        fontFamily: FONT.display,
        padding: lg ? "15px 30px" : "10px 19px",
        fontSize: lg ? 16 : 14,
        color: "#fff",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.22)",
        backdropFilter: "blur(4px)",
      }}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/* ========================================================================== */
export default function FcdLanding({
  fcd,
  locale,
  labels,
}: {
  fcd: FirstClassDev;
  locale: string;
  labels: { visit: string; specialist: string };
}) {
  const emailAddr = fcd.cta.email.replace(/^mailto:/, "");

  return (
    <main
      className="w-full"
      style={{
        background: C.page,
        color: C.dark,
        fontFamily: FONT.body,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      {/* ===== HERO ===== */}
      <header
        className={`relative overflow-hidden ${styles.accentGradient}`}
        style={{ background: C.dark }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ backgroundImage: GRID_BG, backgroundSize: "46px 46px" }}
        />
        <div
          className="pointer-events-none absolute left-[42%] top-[-160px] h-[540px] w-[760px] -translate-x-1/2"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(0,191,99,0.26), transparent 70%)",
          }}
        />
        <div className={`relative z-[2] ${SHELL}`} style={{ paddingTop: 96, paddingBottom: 88 }}>
          <Reveal>
            <Eyebrow color={C.mint} className="mb-6">
              {fcd.hero.badge}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="m-0 max-w-[880px] text-white"
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(38px,6vw,60px)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
              }}
            >
              {fcd.hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="mb-0 mt-[26px] max-w-[620px] text-[19px] leading-[1.6]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              {fcd.hero.subline}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <PrimaryBtn href={fcd.cta.site} lg>
                {labels.visit}
              </PrimaryBtn>
              <GhostBtn href={fcd.cta.whatsapp} lg>
                {labels.specialist}
              </GhostBtn>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div
              className="mt-[22px]"
              style={{
                fontFamily: FONT.mono,
                fontSize: 11.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {fcd.hero.note}
            </div>
          </Reveal>
        </div>
      </header>

      {/* ===== STATS ===== */}
      <section className={SHELL} style={{ paddingTop: 64, paddingBottom: 24 }}>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {fcd.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{
                    fontFamily: FONT.display,
                    fontWeight: 700,
                    fontSize: 48,
                    letterSpacing: "-0.02em",
                    color: C.brand,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div className="mt-2.5 text-[14px]" style={{ color: C.body }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== NOSSA HISTÓRIA ===== */}
      <section
        className={`${styles.accentBrand} ${SHELL}`}
        style={{ paddingTop: 72, paddingBottom: 20 }}
      >
        <Reveal>
          <Eyebrow className="mb-5">{fcd.story.title}</Eyebrow>
          <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-[56px]">
            <h2
              className="m-0 max-w-[760px]"
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(28px,4vw,40px)",
                lineHeight: 1.16,
                letterSpacing: "-0.03em",
                color: C.dark,
              }}
            >
              {fcd.story.headline}
            </h2>
            <div className="flex flex-col gap-[18px] pt-1.5">
              {fcd.story.paragraphs.map((p, i) => (
                <p
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content list
                  key={i}
                  className="m-0 text-[16px] leading-[1.65]"
                  style={{ color: C.body }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== O QUE FAZEMOS (3 frentes) ===== */}
      <section
        className={`${styles.accentBrand} ${SHELL}`}
        style={{ paddingTop: 64, paddingBottom: 20 }}
      >
        <Reveal>
          <div className="mb-10 max-w-[620px]">
            <Eyebrow className="mb-4">{fcd.fronts.title}</Eyebrow>
            <h2
              className="m-0"
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(28px,3.6vw,38px)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: C.dark,
              }}
            >
              {fcd.fronts.headline}
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-[18px] md:grid-cols-3">
          {fcd.fronts.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl border bg-white px-6 pb-[26px] pt-7 transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-28px_rgba(8,30,22,0.5)]"
                style={{ borderColor: C.line }}
              >
                <div
                  className="mb-4"
                  style={{ fontFamily: FONT.mono, fontSize: 12, color: C.brand }}
                >
                  {String(i + 1).padStart(2, "0")} · {f.title.toUpperCase()}
                </div>
                <h3
                  className="m-0 mb-2.5 text-[19px] font-semibold"
                  style={{ fontFamily: FONT.display, letterSpacing: "-0.01em", color: C.dark }}
                >
                  {f.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.6]" style={{ color: C.body }}>
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== FUNDADOR ===== */}
      <section className={SHELL} style={{ paddingTop: 64, paddingBottom: 20 }}>
        <Reveal>
          <div
            className="grid overflow-hidden rounded-[20px] border bg-white md:grid-cols-[280px_1fr]"
            style={{ borderColor: C.line }}
          >
            <div
              className="relative flex items-center justify-center overflow-hidden p-10"
              style={{ background: C.dark }}
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <div
                className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full"
                style={{
                  background: `linear-gradient(145deg, ${C.brand}, #06281C)`,
                  border: "1px solid rgba(31,219,128,0.4)",
                  boxShadow: "0 0 40px rgba(31,219,128,0.25)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT.display,
                    fontWeight: 700,
                    fontSize: 46,
                    letterSpacing: "-0.02em",
                    color: "#EAFBF2",
                  }}
                >
                  {fcd.founder.monogram}
                </span>
              </div>
            </div>
            <div className="px-10 py-9">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3
                  className="m-0 text-[25px] font-bold"
                  style={{ fontFamily: FONT.display, letterSpacing: "-0.02em", color: C.dark }}
                >
                  {fcd.founder.name}
                </h3>
                <span
                  className="inline-flex items-center whitespace-nowrap rounded-full px-[13px] py-1.5"
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 11,
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    color: C.dark,
                    background: C.soft,
                  }}
                >
                  {fcd.founder.badge}
                </span>
              </div>
              <div className="mt-2" style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.sub }}>
                {fcd.founder.subtitle}
              </div>
              <p
                className="mb-0 mt-[18px] max-w-[560px] text-[15.5px] leading-[1.65]"
                style={{ color: C.body }}
              >
                {fcd.founder.bio}
              </p>
              <div
                className="mt-6 flex flex-wrap gap-[18px]"
                style={{ fontFamily: FONT.mono, fontSize: 13 }}
              >
                {fcd.founder.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                    style={{ color: C.brand }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== NO QUE ACREDITAMOS (valores) ===== */}
      <section
        className={`${styles.accentBrand} ${SHELL}`}
        style={{ paddingTop: 64, paddingBottom: 20 }}
      >
        <Reveal>
          <div className="mb-10 max-w-[600px]">
            <Eyebrow className="mb-4">{fcd.values.title}</Eyebrow>
            <h2
              className="m-0"
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(28px,3.6vw,38px)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: C.dark,
              }}
            >
              {fcd.values.headline}
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-[18px] md:grid-cols-3">
          {fcd.values.items.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl border bg-white px-6 pb-[26px] pt-7"
                style={{ borderColor: C.line }}
              >
                <div
                  className="mb-[18px]"
                  style={{ fontFamily: FONT.mono, fontSize: 12, color: C.brand }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="m-0 mb-2.5 text-[18px] font-semibold"
                  style={{ fontFamily: FONT.display, color: C.dark }}
                >
                  {v.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.6]" style={{ color: C.body }}>
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PRESENÇA GLOBAL ===== */}
      <section className={SHELL} style={{ paddingTop: 64, paddingBottom: 20 }}>
        <Reveal>
          <div
            className="flex flex-wrap items-center justify-between gap-10 rounded-[20px] border px-12 py-11"
            style={{ borderColor: C.line, background: "#FAFBFA" }}
          >
            <div className="max-w-[480px]">
              <Eyebrow className="mb-3.5">{fcd.presence.eyebrow}</Eyebrow>
              <h2
                className="m-0"
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "clamp(24px,3vw,30px)",
                  lineHeight: 1.16,
                  letterSpacing: "-0.03em",
                  color: C.dark,
                }}
              >
                {fcd.presence.title}
              </h2>
              <p className="mb-0 mt-4 text-[15.5px] leading-[1.6]" style={{ color: C.body }}>
                {fcd.presence.description}
              </p>
            </div>
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-wrap gap-2.5">
                {fcd.presence.countries.map((p) => (
                  <span
                    key={p}
                    className="rounded-full px-3.5 py-2"
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: 12,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: C.dark,
                      background: C.soft,
                      border: `1px solid ${C.line2}`,
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  color: C.sub,
                }}
              >
                {fcd.presence.languages}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== NOSSOS PRODUTOS ===== */}
      <section
        className={`${styles.accentBrand} ${SHELL}`}
        style={{ paddingTop: 64, paddingBottom: 20 }}
      >
        <Reveal>
          <div className="mb-8 max-w-[620px]">
            <Eyebrow className="mb-4">{fcd.products.title}</Eyebrow>
            <h2
              className="m-0"
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(28px,3.6vw,38px)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: C.dark,
              }}
            >
              {fcd.products.headline}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {fcd.products.items.map((p) => {
              const pillStyle: React.CSSProperties = {
                fontFamily: FONT.display,
                color: C.dark,
                borderColor: C.line,
              };
              const cls =
                "rounded-full border bg-white px-[18px] py-[11px] text-[15px] font-semibold no-underline transition hover:-translate-y-0.5";
              return p.slug ? (
                <a
                  key={p.name}
                  href={`/${locale}/work/${p.slug}`}
                  className={cls}
                  style={pillStyle}
                >
                  {p.name}
                </a>
              ) : (
                <span key={p.name} className={cls} style={pillStyle}>
                  {p.name}
                </span>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ===== CTA ===== */}
      <section className={SHELL} style={{ paddingTop: 60, paddingBottom: 90 }}>
        <Reveal>
          <div
            className={`relative overflow-hidden rounded-3xl px-8 py-14 md:px-14 md:py-16 ${styles.accentGradient}`}
            style={{ background: C.dark }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                backgroundSize: "46px 46px",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.55]"
              style={{
                background:
                  "radial-gradient(80% 120% at 88% 0%, rgba(31,219,128,0.32), transparent 55%)",
              }}
            />
            <div className="relative z-[2] flex flex-wrap items-center justify-between gap-10">
              <div className="max-w-[560px]">
                <Eyebrow color={C.mint} className="mb-[18px]">
                  {fcd.closing.eyebrow}
                </Eyebrow>
                <h2
                  className="m-0 text-white"
                  style={{
                    fontFamily: FONT.display,
                    fontWeight: 700,
                    fontSize: "clamp(28px,3.4vw,36px)",
                    lineHeight: 1.14,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {fcd.closing.title}
                </h2>
                <p
                  className="mb-0 mt-[18px] text-[16px] leading-[1.6]"
                  style={{ color: "rgba(255,255,255,0.64)" }}
                >
                  {fcd.closing.description}
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                <PrimaryBtn href={fcd.cta.site} lg>
                  {labels.visit}
                </PrimaryBtn>
                <GhostBtn href={fcd.cta.whatsapp} lg>
                  {labels.specialist}
                </GhostBtn>
              </div>
            </div>
            <div
              className="relative z-[2] mt-[30px] flex flex-wrap gap-8 border-t pt-6"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <a
                href={fcd.cta.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
                style={{ fontFamily: FONT.mono, fontSize: 12.5, color: "rgba(255,255,255,0.8)" }}
              >
                WhatsApp
              </a>
              <a
                href={fcd.cta.email}
                className="no-underline"
                style={{ fontFamily: FONT.mono, fontSize: 12.5, color: "rgba(255,255,255,0.8)" }}
              >
                {emailAddr}
              </a>
              <a
                href={fcd.cta.site}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
                style={{ fontFamily: FONT.mono, fontSize: 12.5, color: "rgba(255,255,255,0.8)" }}
              >
                {hostOf(fcd.cta.site)}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
