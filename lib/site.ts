/** Production site origin (GitHub Pages + CNAME) */
export const SITE_URL = "https://gg-pass.com";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function guidePath(slug: string): string {
  return `/guide/${slug}/`;
}

export function guideAbsoluteUrl(slug: string): string {
  return absoluteUrl(guidePath(slug));
}
