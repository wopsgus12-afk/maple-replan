import { EN_GUIDE_POSTS, getEnGuideBySlug } from "@/lib/enSeoPosts";
import { withoutTrailingSlash } from "@/lib/locale";
import { GUIDE_POSTS, getGuideBySlug } from "@/lib/seoPosts";
import { absoluteUrl, guideAbsoluteUrl } from "@/lib/site";

/** Public marketing/content routes that return 200 and should be indexed. */
export const INDEXABLE_STATIC_PATHS = [
  "/",
  "/guide",
  "/community",
  "/tips",
  "/feedback",
  "/privacy",
  "/terms",
  "/en",
  "/en/guide",
  "/en/privacy",
  "/en/terms",
] as const;

/** Utility / redirect / download surfaces — never sitemap, never canonical targets. */
export const NON_INDEXABLE_PATH_PREFIXES = [
  "/overlay",
  "/maple",
  "/download",
  "/404",
] as const;

export function isIndexablePath(path: string): boolean {
  const normalized = withoutTrailingSlash(path);
  if (normalized === "/") return true;
  return !NON_INDEXABLE_PATH_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );
}

export function sitemapPriority(path: string): number {
  const normalized = withoutTrailingSlash(path);
  if (normalized === "/") return 1;
  if (normalized === "/en") return 0.95;
  if (normalized === "/guide" || normalized === "/en/guide") return 0.9;
  if (normalized.startsWith("/guide/") || normalized.startsWith("/en/guide/")) {
    return 0.8;
  }
  if (normalized === "/community") return 0.7;
  if (normalized === "/tips") return 0.6;
  if (normalized === "/feedback") return 0.4;
  return 0.3;
}

export function sitemapChangeFrequency(
  path: string
): "weekly" | "daily" | "monthly" | "yearly" {
  const normalized = withoutTrailingSlash(path);
  if (normalized === "/guide" || normalized === "/en/guide") return "daily";
  if (normalized === "/community") return "daily";
  if (normalized === "/feedback") return "monthly";
  if (
    normalized === "/privacy" ||
    normalized === "/terms" ||
    normalized === "/en/privacy" ||
    normalized === "/en/terms"
  ) {
    return "yearly";
  }
  return "weekly";
}

function uniqueSlugs(slugs: string[], label: string): void {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (!slug || slug.includes("/") || slug.endsWith("/")) {
      throw new Error(`[seo] Invalid ${label} slug: ${JSON.stringify(slug)}`);
    }
    if (seen.has(slug)) {
      throw new Error(`[seo] Duplicate ${label} slug: ${slug}`);
    }
    seen.add(slug);
  }
}

/** Fail the build if hreflang pairs or slugs would emit 404 / duplicate URLs. */
export function assertSeoIntegrity(): void {
  uniqueSlugs(
    GUIDE_POSTS.map((post) => post.slug),
    "KO"
  );
  uniqueSlugs(
    EN_GUIDE_POSTS.map((post) => post.slug),
    "EN"
  );

  const enByKo = new Map<string, string>();
  for (const post of EN_GUIDE_POSTS) {
    if (!post.koSlug) continue;
    if (!getGuideBySlug(post.koSlug)) {
      throw new Error(
        `[seo] EN slug "${post.slug}" points at missing KO slug "${post.koSlug}"`
      );
    }
    const existing = enByKo.get(post.koSlug);
    if (existing && existing !== post.slug) {
      throw new Error(
        `[seo] KO slug "${post.koSlug}" is paired with both "${existing}" and "${post.slug}"`
      );
    }
    enByKo.set(post.koSlug, post.slug);
    if (!getEnGuideBySlug(post.slug)) {
      throw new Error(`[seo] EN slug missing at lookup: ${post.slug}`);
    }
  }
}

export function getIndexableCanonicalUrls(): string[] {
  assertSeoIntegrity();

  const urls = [
    ...INDEXABLE_STATIC_PATHS.map((path) => absoluteUrl(path)),
    ...GUIDE_POSTS.map((post) => guideAbsoluteUrl("ko", post.slug)),
    ...EN_GUIDE_POSTS.map((post) => guideAbsoluteUrl("en", post.slug)),
  ];

  const unique = [...new Set(urls)];
  for (const url of unique) {
    if (url !== "https://gg-pass.com" && url.endsWith("/")) {
      throw new Error(`[seo] Trailing-slash canonical leaked into sitemap: ${url}`);
    }
  }
  return unique;
}
