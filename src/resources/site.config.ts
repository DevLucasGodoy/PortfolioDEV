import type {
  DisplayConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
} from "@/types";
import { Delicious_Handrawn, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";

// Used for SEO in meta tags and schema
const baseURL: string = "https://devlucasgodoy.vercel.app";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
  "/first-class-dev": true,
};

const display: DisplayConfig = {
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {};

// Satoshi (the Zolt template font) isn't on Google Fonts; Plus Jakarta Sans is the closest match.
const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

// Sticky-note handwriting on the home "about" bento
const hand = Delicious_Handrawn({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const fontVariables = `${body.variable} ${code.variable} ${hand.variable}`;

// default schema data
const schema: SchemaConfig = {
  logo: "/images/avatar.jpeg",
  type: "Person",
  name: "Lucas Godoy",
  email: "lucas.moraes.godoy@gmail.com",
};

// social links
const sameAs: SameAsConfig = {
  linkedin: "https://www.linkedin.com/in/devlucasgodoy/",
  github: "https://github.com/DevLucasGodoy",
  instagram: "https://www.instagram.com/devlucasgodoy/",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export { display, routes, protectedRoutes, baseURL, fontVariables, schema, sameAs, socialSharing };
