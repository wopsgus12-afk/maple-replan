"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { GUIDE_POSTS } from "@/lib/seoPosts";
import { guidePath } from "@/lib/site";
import {
  fetchGuideStats,
  formatCount,
  type GuideCountMap,
} from "@/lib/guideViews";

const PAGE_SIZE = 10;

type ListItem = {
  slug: string;
  title: string;
  views: number;
  recommends: number;
};

function StatsCell({ recommends, views }: { recommends: number; views: number }) {
  return (
    <span className="shrink-0 text-[11px] tabular-nums text-maple-muted">
      추천 {formatCount(recommends)} · 조회 {formatCount(views)}
    </span>
  );
}

export function GuideListPaginated() {
  const [views, setViews] = useState<GuideCountMap>({});
  const [recommends, setRecommends] = useState<GuideCountMap>({});
  const [page, setPage] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const stats = await fetchGuideStats();
      if (!cancelled) {
        setViews(stats.views);
        setRecommends(stats.recommends);
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const items: ListItem[] = useMemo(
    () =>
      GUIDE_POSTS.map((post) => ({
        slug: post.slug,
        title: post.title,
        views: views[post.slug] ?? 0,
        recommends: recommends[post.slug] ?? 0,
      })),
    [views, recommends]
  );

  const viewBest = useMemo(() => {
    const sorted = [...items].sort(
      (a, b) => b.views - a.views || a.title.localeCompare(b.title)
    );
    if (sorted.every((p) => p.views <= 0)) return [];
    return sorted.slice(0, 3);
  }, [items]);

  const recommendBest = useMemo(() => {
    const sorted = [...items].sort(
      (a, b) => b.recommends - a.recommends || a.title.localeCompare(b.title)
    );
    if (sorted.every((p) => p.recommends <= 0)) return [];
    return sorted.slice(0, 3);
  }, [items]);

  const pinnedSlugs = useMemo(() => {
    const s = new Set<string>();
    for (const p of viewBest) s.add(p.slug);
    for (const p of recommendBest) s.add(p.slug);
    return s;
  }, [viewBest, recommendBest]);

  const rest = useMemo(() => {
    return [...items].reverse().filter((p) => !pinnedSlugs.has(p.slug));
  }, [items, pinnedSlugs]);

  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = rest.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div className="mt-4 space-y-8">
      {viewBest.length > 0 && (
        <section aria-label="조회수 BEST 가이드">
          <h2 className="mb-3 text-sm font-semibold text-maple-accent">조회수 BEST</h2>
          <ol className="divide-y divide-maple-border/40 rounded-lg border border-maple-border/70 bg-maple-panel/40">
            {viewBest.map((item, idx) => (
              <li key={`v-${item.slug}`}>
                <Link
                  href={guidePath(item.slug)}
                  className="flex items-center gap-2 px-3 py-3 transition hover:bg-maple-panel/80"
                >
                  <span className="w-14 shrink-0 text-xs font-semibold text-maple-gold">
                    {idx + 1}. <span className="text-maple-accent">(best)</span>
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-100">
                    {item.title}
                  </span>
                  <StatsCell recommends={item.recommends} views={item.views} />
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      {recommendBest.length > 0 && (
        <section aria-label="추천 BEST 가이드">
          <h2 className="mb-3 text-sm font-semibold text-maple-accent">추천 BEST</h2>
          <ol className="divide-y divide-maple-border/40 rounded-lg border border-maple-border/70 bg-maple-panel/40">
            {recommendBest.map((item, idx) => (
              <li key={`r-${item.slug}`}>
                <Link
                  href={guidePath(item.slug)}
                  className="flex items-center gap-2 px-3 py-3 transition hover:bg-maple-panel/80"
                >
                  <span className="w-14 shrink-0 text-xs font-semibold text-maple-gold">
                    {idx + 1}. <span className="text-maple-accent">(best)</span>
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-100">
                    {item.title}
                  </span>
                  <StatsCell recommends={item.recommends} views={item.views} />
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section aria-label="가이드 목록">
        <h2 className="mb-3 text-sm font-semibold text-maple-accent">전체 가이드</h2>
        {!ready && (
          <p className="mb-2 text-xs text-maple-muted">추천·조회수 불러오는 중…</p>
        )}
        <ol
          start={(safePage - 1) * PAGE_SIZE + 1}
          className="divide-y divide-maple-border/40 rounded-lg border border-maple-border/70 bg-maple-panel/40"
        >
          {pageItems.map((item, idx) => {
            const num = (safePage - 1) * PAGE_SIZE + idx + 1;
            return (
              <li key={item.slug}>
                <Link
                  href={guidePath(item.slug)}
                  className="flex items-center gap-2 px-3 py-3 transition hover:bg-maple-panel/80"
                >
                  <span className="w-8 shrink-0 text-xs tabular-nums text-maple-muted">
                    {num}.
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-100">
                    {item.title}
                  </span>
                  <StatsCell recommends={item.recommends} views={item.views} />
                </Link>
              </li>
            );
          })}
        </ol>

        {totalPages > 1 && (
          <nav
            aria-label="가이드 목록 페이지"
            className="mt-4 flex items-center justify-center gap-2"
          >
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded border border-maple-border px-3 py-1.5 text-xs text-maple-muted disabled:opacity-40 hover:border-maple-gold/50 hover:text-maple-gold"
            >
              이전
            </button>
            <span className="text-xs tabular-nums text-maple-muted">
              {safePage} / {totalPages}
            </span>
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded border border-maple-border px-3 py-1.5 text-xs text-maple-muted disabled:opacity-40 hover:border-maple-gold/50 hover:text-maple-gold"
            >
              다음
            </button>
          </nav>
        )}
      </section>
    </div>
  );
}
