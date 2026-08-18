import type { MetadataRoute } from "next";
import {
  assertSeoIntegrity,
  getIndexableCanonicalUrls,
  sitemapChangeFrequency,
  sitemapPriority,
} from "@/lib/seoIndex";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  assertSeoIntegrity();
  const now = new Date();

  return getIndexableCanonicalUrls().map((url) => {
    const path = url === SITE_URL ? "/" : url.slice(SITE_URL.length) || "/";
    return {
      url,
      lastModified: now,
      changeFrequency: sitemapChangeFrequency(path),
      priority: sitemapPriority(path),
    };
  });
}
