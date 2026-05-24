"use client";

import { useRef } from "react";
import {
  formatMesos,
  formatMesosInputLive,
  formatMesosKorean,
  formatPercent,
  parseMesosInput,
} from "@/lib/format";
import { computeTodayTotals } from "./SessionLists";
import { ExportDashboardImage } from "./ExportDashboardImage";
import type { SessionRecord } from "@/lib/types";

type Props = {
  sessions: SessionRecord[];
  gemPrice: number;
  fragmentPrice: number;
  onGemPriceChange: (n: number) => void;
  onFragmentPriceChange: (n: number) => void;
};

export function Dashboard({
  sessions,
  gemPrice,
  fragmentPrice,
  onGemPriceChange,
  onFragmentPriceChange,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  const t = computeTodayTotals(sessions, gemPrice, fragmentPrice);

  return (
    <div className="space-y-2">
      <section
        ref={sectionRef}
        className="rounded-lg border border-maple-gold/40 bg-gradient-to-b from-maple-panel to-maple-bg p-4 shadow-maple"
      >
        <h2 className="mb-4 text-2xl font-bold text-maple-gold">오늘의 총합</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">
          <Stat label="총 순수 메소" value={formatMesos(t.netMesos)} />
          <Stat label="총 순수 EXP" value={formatPercent(t.netExp)} />
          <Stat label="솔 에르다 조각" value={String(t.fragmentItems)} />
          <Stat label="코어 젬스톤" value={String(t.gemstoneItems)} />
          <Stat label="세션 수" value={`${t.sessionCount}회`} />
        </div>
        <div className="mt-5 rounded border border-maple-accent/40 bg-maple-accent/5 p-4 text-center">
          <p className="text-lg font-semibold text-maple-muted sm:text-xl">
            총수익 · 평균 시급 (회차당 2시간)
          </p>
          <p className="mt-2 text-3xl font-bold text-maple-accent drop-shadow-[0_0_14px_rgba(62,207,110,0.7)] sm:text-4xl">
            {formatMesos(t.totalRevenue)}
          </p>
          <p className="mt-3 text-2xl font-bold text-maple-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.45)] sm:text-3xl">
            {formatMesos(t.hourly)}{" "}
            <span className="text-lg font-semibold text-maple-muted sm:text-xl">/ 시간</span>
          </p>
          {t.sessionCount > 0 && (
            <p className="mt-1 text-xs text-maple-muted">
              {t.sessionCount}회 × 2시간 = {t.sessionCount * 2}시간 기준
            </p>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <PriceField
            label="솔 에르다 조각 시세"
            value={fragmentPrice}
            onChange={onFragmentPriceChange}
          />
          <PriceField
            label="코어 젬스톤 시세"
            value={gemPrice}
            onChange={onGemPriceChange}
          />
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

function PriceField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  const display = formatMesosInputLive(String(value || ""));

  return (
    <label className="block">
      <span className="text-base text-maple-muted">{label}</span>
      <input
        type="text"
        inputMode="numeric"
        value={display}
        onChange={(e) => onChange(parseMesosInput(formatMesosInputLive(e.target.value)))}
        className="mt-1 min-h-12 w-full rounded border border-maple-border bg-maple-bg px-4 py-3 text-lg text-white focus:border-maple-gold focus:outline-none sm:min-h-14 sm:text-xl"
      />
      <p className="mt-1 text-xs text-maple-muted sm:text-sm">{formatMesosKorean(value)}</p>
    </label>
  );
}
