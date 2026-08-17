/** Site locale helpers (KO default URLs, EN under /en). No trailing slashes. */

export type Locale = "ko" | "en";

export const LOCALES: Locale[] = ["ko", "en"];

export function isLocale(value: string): value is Locale {
  return value === "ko" || value === "en";
}

/** Prefix for locale routes. Korean stays at site root. */
export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

/** Strip trailing slashes except for the site root `/`. */
export function withoutTrailingSlash(path: string): string {
  if (path === "/" || path === "") return "/";
  return path.replace(/\/+$/, "") || "/";
}

export function localizedPath(locale: Locale, path: string): string {
  const raw = path.startsWith("/") ? path : `/${path}`;
  const normalized = withoutTrailingSlash(raw);
  if (locale === "ko") return normalized;
  if (normalized === "/") return "/en";
  return `/en${normalized}`;
}

export function guidePath(locale: Locale, slug: string): string {
  return localizedPath(locale, `/guide/${slug}`);
}

export function guideIndexPath(locale: Locale): string {
  return localizedPath(locale, "/guide");
}

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en" : "/";
}
