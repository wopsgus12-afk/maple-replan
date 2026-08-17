import type { Locale } from "@/lib/locale";
import {
  guidePath as localeGuidePath,
  localizedPath,
  withoutTrailingSlash,
} from "@/lib/locale";

/** Production site origin (GitHub Pages + CNAME) — no trailing slash */
export const SITE_URL = "https://gg-pass.com";

/** Absolute canonical URL. Root is `https://gg-pass.com` (no trailing slash). */
export function absoluteUrl(path: string): string {
  const normalized = withoutTrailingSlash(
    path.startsWith("/") ? path : `/${path}`
  );
  if (normalized === "/") return SITE_URL;
  return `${SITE_URL}${normalized}`;
}

/** @deprecated Prefer guidePath(locale, slug) — defaults to Korean for existing callers. */
export function guidePath(slug: string): string {
  return localeGuidePath("ko", slug);
}

export function guideAbsoluteUrl(localeOrSlug: Locale | string, slug?: string): string {
  if (slug !== undefined) {
    return absoluteUrl(localeGuidePath(localeOrSlug as Locale, slug));
  }
  return absoluteUrl(localeGuidePath("ko", localeOrSlug));
}

export function sectionAbsoluteUrl(locale: Locale, path: string): string {
  return absoluteUrl(localizedPath(locale, path));
}
