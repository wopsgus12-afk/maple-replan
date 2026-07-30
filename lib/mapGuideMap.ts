import { getEnGuideBySlug } from "@/lib/enSeoPosts";
import type { Locale } from "@/lib/locale";
import { guideIndexPath, guidePath } from "@/lib/locale";
import { getGuideBySlug } from "@/lib/seoPosts";

/**
 * Maps calculator groundId → locale-specific guide slugs.
 * KO and EN use separate slugs (EN may fall back when no dedicated EN region guide exists).
 */
export type MapGuideEntry = {
  regionLabelKo: string;
  regionLabelEn: string;
  /** Korean guide slug under /guide/[slug]/ */
  koSlug: string;
  /** English guide slug under /en/guide/[slug]/ */
  enSlug: string;
};

export const MAP_GUIDE_BY_GROUND: Record<string, MapGuideEntry> = {
  // Arcane River — no dedicated region SEO posts; fall back to general guides
  "vanishing-cave-bottom": {
    regionLabelKo: "소멸의 여로",
    regionLabelEn: "Vanishing Journey",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },
  "chuchu-rapids-3": {
    regionLabelKo: "츄츄 아일랜드",
    regionLabelEn: "Chu Chu Island",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },
  "lachelein-chickens-2": {
    regionLabelKo: "레헬른",
    regionLabelEn: "Lachelein",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },
  "arcana-cave-lower": {
    regionLabelKo: "아르카나",
    regionLabelEn: "Arcana",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },
  "morass-troupe-3": {
    regionLabelKo: "모라스",
    regionLabelEn: "Morass",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },
  "esfera-mirror-sea-2": {
    regionLabelKo: "에스페라",
    regionLabelEn: "Esfera",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },
  "limen-world-end": {
    regionLabelKo: "리멘",
    regionLabelEn: "Limen",
    koSlug: "hunting-routes-by-level",
    enSlug: "gms-meso-farming-efficiency-starter",
  },

  // Grandis
  "serenium-library-1": {
    regionLabelKo: "세르니움",
    regionLabelEn: "Cernium",
    koSlug: "cernium-east-wall-2-meso-efficiency-job-synergy-fact-check-guide",
    enSlug: "lazy-grinding-part1",
  },
  "burning-serenium-west-wall": {
    regionLabelKo: "불타는 세르니움",
    regionLabelEn: "Burning Cernium",
    koSlug: "burning-cernium-west-wall-meso-efficiency-aoe-job-guide",
    enSlug: "lazy-grinding-part1",
  },
  "arcus-train-1": {
    regionLabelKo: "호텔 아르쿠스",
    regionLabelEn: "Hotel Arcus",
    koSlug: "hotel-arcs-endless-train-meso-efficiency-summon-job-guide",
    enSlug: "lazy-grinding-part1",
  },
  "odium-gate-1": {
    regionLabelKo: "오디움",
    regionLabelEn: "Odium",
    koSlug: "odium-detail-maps-1replan-revenue-fatigue-fact-check-guide",
    enSlug:
      "gms-heroic-odium-castle-gate-3-vs-occupied-alley-2-wap-meso-erda-guide",
  },
  "dowongyeong-four-seasons": {
    regionLabelKo: "도원경",
    regionLabelEn: "Shangri-La",
    koSlug: "dowongyeong-detail-maps-1replan-revenue-fatigue-fact-check-guide",
    enSlug: "lazy-grinding-part1",
  },
  "arteria-lower-teleport": {
    regionLabelKo: "아르테리아",
    regionLabelEn: "Arteria",
    koSlug: "arteria-hunting-ground-guide",
    enSlug: "arteria-hunting-ground-guide",
  },
  "carcion-turtle-1": {
    regionLabelKo: "카르시온",
    regionLabelEn: "Carcion",
    koSlug: "carcion-hunting-ground-guide",
    enSlug: "carcion-hunting-ground-guide",
  },
};

export type ResolvedMapGuide = {
  href: string;
  indexHref: string;
  regionLabel: string;
  guideTitle: string;
  slug: string;
};

export function getMapGuideEntry(
  groundId: string
): MapGuideEntry | undefined {
  return MAP_GUIDE_BY_GROUND[groundId];
}

/** Resolve a live guide link for the active locale. Returns null if slug missing. */
export function resolveMapGuideLink(
  groundId: string,
  locale: Locale
): ResolvedMapGuide | null {
  const entry = getMapGuideEntry(groundId);
  if (!entry) return null;

  const slug = locale === "en" ? entry.enSlug : entry.koSlug;
  const post =
    locale === "en" ? getEnGuideBySlug(slug) : getGuideBySlug(slug);
  if (!post) return null;

  return {
    href: guidePath(locale, slug),
    indexHref: guideIndexPath(locale),
    regionLabel:
      locale === "en" ? entry.regionLabelEn : entry.regionLabelKo,
    guideTitle: post.title,
    slug,
  };
}
