// Locale-aware content is resolved via getContent(locale).
// Components read it through getContent (server) or useContent (client).
export { getContent } from "./content";
export type { Content } from "./content";

export {
  display,
  routes,
  protectedRoutes,
  baseURL,
  fontVariables,
  schema,
  sameAs,
  socialSharing,
} from "./site.config";
