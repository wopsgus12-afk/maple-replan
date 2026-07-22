/**
 * English guide posts (GMS / English search).
 *
 * How to add a post:
 * 1. Append an object to EN_GUIDE_POSTS (same shape as Korean GuidePost).
 * 2. Use a unique English slug (do not reuse Korean slugs).
 * 3. If this is a true translation pair of a Korean guide, set `koSlug`
 *    to that Korean slug so hreflang can link them.
 * 4. Deploy — `/en/guide/{slug}/` is SSG from this list.
 */
import type { GuidePost, GuideSection } from "@/lib/seoPosts";

export type EnGuidePost = GuidePost & {
  /** Matching Korean guide slug when a real KO↔EN pair exists. */
  koSlug?: string;
};

/**
 * Pilot / draft slot — replace title, description, and sections with real copy.
 * Remove this entry or keep editing it when you publish your first English guide.
 */
export const EN_GUIDE_POSTS: EnGuidePost[] = [
  {
    slug: "gms-meso-farming-efficiency-starter",
    title: "[Draft] GMS Meso Farming Efficiency Starter Guide",
    description:
      "Placeholder English guide for the /en/ route skeleton. Replace this draft with a full GMS-focused article before promoting it in search.",
    // koSlug: "main-server-hunting-meso-settlement", // uncomment when this is a real pair
    sections: [
      {
        heading: "Draft — replace with real content",
        paragraphs: [
          "This page exists so the English guide pipeline (list, detail, sitemap, SSG) is ready. Write your full English article here: clear H2/H3 sections, GMS terminology, and search intent that overseas players actually use.",
          "When the real guide is ready, update title, description, and sections in lib/enSeoPosts.ts, then deploy.",
        ],
      } satisfies GuideSection,
    ],
  },
];

export function getEnGuideBySlug(slug: string): EnGuidePost | undefined {
  return EN_GUIDE_POSTS.find((post) => post.slug === slug);
}

export function getAllEnGuideSlugs(): string[] {
  return EN_GUIDE_POSTS.map((post) => post.slug);
}

/** EN slug → KO slug for posts that declare a translation pair. */
export function getKoSlugForEn(enSlug: string): string | undefined {
  return getEnGuideBySlug(enSlug)?.koSlug;
}

/** KO slug → EN slug when an English post points at that Korean guide. */
export function getEnSlugForKo(koSlug: string): string | undefined {
  return EN_GUIDE_POSTS.find((post) => post.koSlug === koSlug)?.slug;
}
