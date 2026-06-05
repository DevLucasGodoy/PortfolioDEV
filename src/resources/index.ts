// Locale-aware content is resolved via getContent(locale).
// Components read it through getContent (server) or useContent (client).
export { getContent } from "./content";
export type { Content } from "./content";

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";
