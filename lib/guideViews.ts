import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

const LOCAL_VIEWS_KEY = "maple-guide-views-v1";
const LOCAL_RECS_KEY = "maple-guide-recommends-v1";
const LOCAL_RECOMMENDED_SLUGS = "maple-guide-recommended-slugs-v1";

export type GuideCountMap = Record<string, number>;

export type GuideStats = {
  views: GuideCountMap;
  recommends: GuideCountMap;
};

function readLocalMap(key: string): GuideCountMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as GuideCountMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeLocalMap(key: string, map: GuideCountMap) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

function mergeCounts(local: GuideCountMap, remote: GuideCountMap): GuideCountMap {
  const merged: GuideCountMap = { ...local };
  for (const [slug, count] of Object.entries(remote)) {
    merged[slug] = Math.max(merged[slug] ?? 0, count);
  }
  return merged;
}

/** Fetch view + recommend counts. */
export async function fetchGuideStats(): Promise<GuideStats> {
  const localViews = readLocalMap(LOCAL_VIEWS_KEY);
  const localRecs = readLocalMap(LOCAL_RECS_KEY);

  if (!isSupabaseConfigured()) {
    return { views: localViews, recommends: localRecs };
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("guide_page_views")
      .select("slug, view_count, recommend_count");
    if (error || !data) {
      return { views: localViews, recommends: localRecs };
    }

    const remoteViews: GuideCountMap = {};
    const remoteRecs: GuideCountMap = {};
    for (const row of data) {
      const slug = String(row.slug ?? "");
      if (!slug) continue;
      remoteViews[slug] = Number(row.view_count) || 0;
      remoteRecs[slug] = Number(row.recommend_count) || 0;
    }
    return {
      views: mergeCounts(localViews, remoteViews),
      recommends: mergeCounts(localRecs, remoteRecs),
    };
  } catch {
    return { views: localViews, recommends: localRecs };
  }
}

/** @deprecated use fetchGuideStats */
export async function fetchGuideViewCounts(): Promise<GuideCountMap> {
  const stats = await fetchGuideStats();
  return stats.views;
}

export async function incrementGuideView(slug: string): Promise<number> {
  const local = readLocalMap(LOCAL_VIEWS_KEY);
  const nextLocal = (local[slug] ?? 0) + 1;
  local[slug] = nextLocal;
  writeLocalMap(LOCAL_VIEWS_KEY, local);

  if (!isSupabaseConfigured()) return nextLocal;

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc("increment_guide_view", {
      p_slug: slug,
    });
    if (error) return nextLocal;
    const remote = typeof data === "number" ? data : Number(data) || nextLocal;
    local[slug] = Math.max(nextLocal, remote);
    writeLocalMap(LOCAL_VIEWS_KEY, local);
    return local[slug];
  } catch {
    return nextLocal;
  }
}

export function hasRecommendedLocally(slug: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(LOCAL_RECOMMENDED_SLUGS);
    if (!raw) return false;
    const list = JSON.parse(raw) as string[];
    return Array.isArray(list) && list.includes(slug);
  } catch {
    return false;
  }
}

function markRecommendedLocally(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(LOCAL_RECOMMENDED_SLUGS);
    const list: string[] = raw ? (JSON.parse(raw) as string[]) : [];
    const next = Array.isArray(list) ? list : [];
    if (!next.includes(slug)) next.push(slug);
    localStorage.setItem(LOCAL_RECOMMENDED_SLUGS, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

/** One recommend per browser. Returns new count, or null if already recommended. */
export async function incrementGuideRecommend(
  slug: string
): Promise<{ count: number; already: boolean }> {
  if (hasRecommendedLocally(slug)) {
    const local = readLocalMap(LOCAL_RECS_KEY);
    return { count: local[slug] ?? 0, already: true };
  }

  const local = readLocalMap(LOCAL_RECS_KEY);
  const nextLocal = (local[slug] ?? 0) + 1;
  local[slug] = nextLocal;
  writeLocalMap(LOCAL_RECS_KEY, local);
  markRecommendedLocally(slug);

  if (!isSupabaseConfigured()) {
    return { count: nextLocal, already: false };
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc("increment_guide_recommend", {
      p_slug: slug,
    });
    if (error) return { count: nextLocal, already: false };
    const remote = typeof data === "number" ? data : Number(data) || nextLocal;
    local[slug] = Math.max(nextLocal, remote);
    writeLocalMap(LOCAL_RECS_KEY, local);
    return { count: local[slug], already: false };
  } catch {
    return { count: nextLocal, already: false };
  }
}

export function formatCount(n: number, locale: "ko" | "en" = "ko"): string {
  if (locale === "en") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return String(n);
  }
  if (n >= 10000) return `${(n / 10000).toFixed(1)}만`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}천`;
  return String(n);
}

export const formatViewCount = formatCount;
