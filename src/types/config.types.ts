/**
 * Display configuration for UI elements.
 */
export type DisplayConfig = {
  themeSwitcher: boolean;
};

/**
 * Route configuration for enabled/disabled routes.
 */
export type RoutesConfig = Record<`/${string}`, boolean>;

/**
 * Protected route configuration.
 */
export type ProtectedRoutesConfig = Record<`/${string}`, boolean>;

/**
 * Schema data for SEO/meta tags.
 */
export type SchemaConfig = {
  logo: string;
  type: string;
  name: string;
  email: string;
};

/**
 * Social links for organization.
 */
export type SameAsConfig = {
  linkedin: string;
  github: string;
  instagram: string;
};

/**
 * Social sharing configuration for blog posts.
 */
export type SocialSharingConfig = {
  display: boolean;
  platforms: {
    x: boolean;
    linkedin: boolean;
    facebook: boolean;
    pinterest: boolean;
    whatsapp: boolean;
    reddit: boolean;
    telegram: boolean;
    email: boolean;
    copyLink: boolean;
  };
};
