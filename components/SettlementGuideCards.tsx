"use client";

import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { guideIndexPath } from "@/lib/locale";
import { resolveMapGuideLink } from "@/lib/mapGuideMap";

type Props = {
  groundId: string;
  locale?: Locale;
};

/** Post-settlement cards: related map guide + full guide index (locale-aware). */
export function SettlementGuideCards({ groundId, locale = "ko" }: Props) {
  const guide = resolveMapGuideLink(groundId, locale);
  const indexHref = guide?.indexHref ?? guideIndexPath(locale);
  const isEn = locale === "en";

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {guide ? (
        <Link
          href={guide.href}
          className="rounded-lg border border-maple-border/70 bg-maple-panel/40 px-3 py-3 transition-colors hover:border-maple-gold/50 hover:bg-maple-panel/70"
          title={guide.guideTitle}
        >
          <p className="text-[10px] font-medium uppercase tracking-wide text-maple-muted">
            {isEn ? "Related guide" : "관련 가이드"}
          </p>
          <p className="mt-1 text-sm font-semibold text-maple-gold">
            {isEn
              ? `${guide.regionLabel} hunting guide`
              : `${guide.regionLabel} 사냥터 가이드`}
          </p>
          <p className="mt-1 line-clamp-2 text-[11px] text-maple-muted">
            {guide.guideTitle}
          </p>
        </Link>
      ) : (
        <div className="rounded-lg border border-maple-border/40 bg-maple-panel/20 px-3 py-3 opacity-60">
          <p className="text-[10px] font-medium uppercase tracking-wide text-maple-muted">
            {isEn ? "Related guide" : "관련 가이드"}
          </p>
          <p className="mt-1 text-sm text-maple-muted">
            {isEn ? "No map-specific guide yet" : "연동 가이드 준비 중"}
          </p>
        </div>
      )}

      <Link
        href={indexHref}
        className="rounded-lg border border-maple-gold/30 bg-maple-gold/5 px-3 py-3 transition-colors hover:border-maple-gold/60 hover:bg-maple-gold/10"
      >
        <p className="text-[10px] font-medium uppercase tracking-wide text-maple-muted">
          {isEn ? "Browse all" : "전체 목록"}
        </p>
        <p className="mt-1 text-sm font-semibold text-maple-gold">
          {isEn ? "View all hunting guides →" : "전체 사냥터 가이드 목록 →"}
        </p>
        <p className="mt-1 text-[11px] text-maple-muted">
          {isEn
            ? "Explore more meso & WAP guides"
            : "레벨·맵별 재획 가이드 더 보기"}
        </p>
      </Link>
    </div>
  );
}
