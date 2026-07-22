/** Site locale helpers (KO default URLs, EN under /en/). */

export type Locale = "ko" | "en";

export const LOCALES: Locale[] = ["ko", "en"];

export function isLocale(value: string): value is Locale {
  return value === "ko" || value === "en";
}

/** Prefix for locale routes. Korean stays at site root. */
export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ko") return normalized.endsWith("/") || normalized === "/"
    ? normalized
    : `${normalized}/`;
  const body = normalized === "/" ? "/" : normalized;
  if (body === "/") return "/en/";
  const withSlash = body.endsWith("/") ? body : `${body}/`;
  return `/en${withSlash}`;
}

export function guidePath(locale: Locale, slug: string): string {
  return localizedPath(locale, `/guide/${slug}`);
}

export function guideIndexPath(locale: Locale): string {
  return localizedPath(locale, "/guide");
}

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en/" : "/";
}
