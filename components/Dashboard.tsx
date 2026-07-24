"use client";

import { useRef } from "react";
import {
  formatMesos,
  formatPercent,
} from "@/lib/format";
import { computeTodayTotals } from "./SessionLists";
import { ExportDashboardImage } from "./ExportDashboardImage";
import type { SessionRecord } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import type { ServerMode } from "@/lib/userPreset";
import { formatPriceShort } from "@/lib/userPreset";
import { usesFragmentDrop } from "@/lib/huntingGrounds";
import { ui } from "@/lib/uiCopy";

type Props = {
  sessions: SessionRecord[];
  /** Effective prices used for today’s totals (Heroic → 0). */
  gemPrice: number;
  fragmentPrice: number;
  /** Stored prices for badge display (KMS values kept even on Heroic). */
  storedGemPrice: number;
  storedFragmentPrice: number;
  serverMode: ServerMode;
  /** Current map — drives which drop stat is shown. */
  groundId: string;
  locale?: Locale;
  onOpenPreset: () => void;
};

export function Dashboard({
  sessions,
  gemPrice,
  fragmentPrice,
  storedGemPrice,
  storedFragmentPrice,
  serverMode,
  groundId,
  locale = "ko",
  onOpenPreset,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const copy = ui(locale);
  const t = computeTodayTotals(sessions, gemPrice, fragmentPrice);
  const showFragment = usesFragmentDrop(groundId);

  const badgeLabel =
    serverMode === "gms_heroic"
      ? copy.presetBadgeHeroic
      : copy.presetBadgeKms(
          formatPriceShort(storedFragmentPrice, locale),
          formatPriceShort(storedGemPrice, locale)
        );

  return (
    <div className="space-y-2">
      <section
        ref={sectionRef}
        className="rounded-lg border border-maple-gold/40 bg-gradient-to-b from-maple-panel to-maple-bg p-4 shadow-maple"
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-maple-gold">{copy.dashboardToday}</h2>
          <button
            type="button"
            onClick={onOpenPreset}
            className="rounded-full border border-maple-gold/50 bg-maple-gold/10 px-2.5 py-1 text-[11px] font-medium text-maple-gold hover:bg-maple-gold/20"
            title={copy.presetOpen}
          >
            {badgeLabel}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">
          <Stat
            label={locale === "en" ? "Net Mesos" : "총 순수 메소"}
            value={formatMesos(t.netMesos)}
          />
          <Stat
            label={locale === "en" ? "Net EXP" : "총 순수 EXP"}
            value={formatPercent(t.netExp)}
          />
          {showFragment ? (
            <Stat
              label={locale === "en" ? "Erda Fragments" : "솔 에르다 조각"}
              value={String(t.fragmentItems)}
            />
          ) : (
            <Stat
              label={locale === "en" ? "Nodestones" : "코어 젬스톤"}
              value={String(t.gemstoneItems)}
            />
          )}
          <Stat
            label={locale === "en" ? "Sessions" : "세션 수"}
            value={
              locale === "en" ? `${t.sessionCount}` : `${t.sessionCount}회`
            }
          />
        </div>
        <div className="mt-5 rounded border border-maple-accent/40 bg-maple-accent/5 p-4 text-center">
          <p className="text-lg font-semibold text-maple-muted sm:text-xl">
            {locale === "en"
              ? "Total revenue · avg hourly (2h per session)"
              : "총수익 · 평균 시급 (회차당 2시간)"}
          </p>
          <p className="mt-2 text-3xl font-bold text-maple-accent drop-shadow-[0_0_14px_rgba(62,207,110,0.7)] sm:text-4xl">
            {formatMesos(t.totalRevenue)}
          </p>
          <p className="mt-3 text-2xl font-bold text-maple-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.45)] sm:text-3xl">
            {formatMesos(t.hourly)}{" "}
            <span className="text-lg font-semibold text-maple-muted sm:text-xl">
              {locale === "en" ? "/ hour" : "/ 시간"}
            </span>
          </p>
          {t.sessionCount > 0 && (
            <p className="mt-1 text-xs text-maple-muted">
              {locale === "en"
                ? `${t.sessionCount} × 2h = ${t.sessionCount * 2}h`
                : `${t.sessionCount}회 × 2시간 = ${t.sessionCount * 2}시간 기준`}
            </p>
          )}
        </div>
      </section>
      <ExportDashboardImage targetRef={sectionRef} variant="block" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <span className="text-lg font-semibold text-maple-muted sm:text-xl">{label}</span>
      <p className="mt-1 truncate whitespace-nowrap text-2xl font-bold text-white sm:text-3xl">
        {value}
      </p>
    </div>
  );
}
