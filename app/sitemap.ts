import type { MetadataRoute } from "next";
import { getAllGuideSlugs } from "@/lib/seoPosts";
import { getAllEnGuideSlugs } from "@/lib/enSeoPosts";
import { SITE_URL, absoluteUrl, guideAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/guide"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/community"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/tips"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/feedback"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/en"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/en/guide"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/en/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/en/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const koGuides: MetadataRoute.Sitemap = getAllGuideSlugs().map((slug) => ({
    url: guideAbsoluteUrl("ko", slug),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const enGuides: MetadataRoute.Sitemap = getAllEnGuideSlugs().map((slug) => ({
    url: guideAbsoluteUrl("en", slug),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...koGuides, ...enGuides];
}
