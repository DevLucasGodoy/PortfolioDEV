/*
 * Fontes exclusivas da página First Class Dev (mockup "Sobre").
 * Expostas como CSS vars escopadas (--font-fcd-*) para NÃO colidir com a
 * tipografia global do site (Geist em --font-body/heading/label/code).
 * Aplicar `fcdFontVars` num wrapper da página; os componentes leem as vars.
 */
import { Instrument_Sans, Instrument_Serif, Space_Grotesk, Space_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-fcd-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-fcd-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fcd-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-fcd-serif",
  display: "swap",
});

export const fcdFontVars = `${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`;
