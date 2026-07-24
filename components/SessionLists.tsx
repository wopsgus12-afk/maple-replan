"use client";

import type { ReplanSlot, SessionRecord } from "@/lib/types";
import { formatMesos, formatPercent, safeNumber } from "@/lib/format";
import type { Locale } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

const NEON_REVENUE =
  "whitespace-nowrap font-bold text-maple-accent drop-shadow-[0_0_14px_rgba(62,207,110,0.7)]";

type Props = {
  sessions: SessionRecord[];
  locale?: Locale;
  onClearSlot?: (slot: ReplanSlot) => void;
};

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-maple-border/60 bg-maple-bg/50 px-2 py-3 text-center">
      <span className="block truncate text-[10px] font-semibold leading-tight text-maple-muted sm:text-xs">
        {label}
      </span>
      <p className="mt-1 truncate whitespace-nowrap text-sm font-bold text-white sm:text-base">
        {value}
      </p>
    </div>
  );
}

function formatRecordTime(iso: string, locale: Locale): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString(locale === "en" ? "en-US" : "ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function SessionLists({
  sessions,
  locale = "ko",
  onClearSlot,
}: Props) {
  const t = ui(locale);
  const slots: ReplanSlot[] = [1, 2, 3];

  return (
    <section aria-label={t.historyTitle} className="w-full min-w-0">
      <h2 className="mb-2 text-sm font-semibold text-maple-gold">{t.historyTitle}</h2>
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        {slots.map((slot) => {
          const list = sessions.filter((s) => s.slot === slot);
          const mesosSum = list.reduce((a, s) => a + safeNumber(s.netMesos), 0);
          const fragmentsSum = list.reduce(
            (a, s) => a + safeNumber(s.fragmentCount),
            0
          );
          const gemstonesSum = list.reduce(
            (a, s) => a + safeNumber(s.gemstoneCount),
            0
          );
          const revenueSum = list.reduce((a, s) => a + safeNumber(s.sessionTotal), 0);
          const hasRecords = list.length > 0;

          return (
            <article
              key={slot}
              className="flex min-w-0 flex-col rounded-lg border border-maple-border bg-maple-panel/60 p-3"
            >
              <div className="flex shrink-0 items-center justify-between gap-2 border-b border-maple-border/50 pb-1.5">
                <h3 className="text-lg font-bold text-maple-gold">
                  {t.slotLabel(slot)}
                </h3>
                {onClearSlot && (
                  <button
                    type="button"
                    disabled={!hasRecords}
                    onClick={() => onClearSlot(slot)}
                    className="rounded border border-maple-border px-1.5 py-0.5 text-[10px] text-maple-muted hover:border-red-700/60 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label={`${t.slotLabel(slot)} ${t.historyClearSlot}`}
                  >
                    {t.historyClearSlot}
                  </button>
                )}
              </div>

              {!hasRecords ? (
                <p className="flex flex-1 items-center justify-center py-6 text-center text-xs text-maple-muted">
                  {t.historyEmpty}
                </p>
              ) : (
                <>
                  <div className="mt-2 grid min-w-0 grid-cols-3 gap-2">
                    <StatBox
                      label={t.historyMesosSubtotal}
                      value={formatMesos(mesosSum)}
                    />
                    <StatBox
                      label={locale === "en" ? "Erda Fragments" : "솔 에르다 조각"}
                      value={String(fragmentsSum)}
                    />
                    <StatBox
                      label={locale === "en" ? "Nodestones" : "코어 젬스톤"}
                      value={String(gemstonesSum)}
                    />
                  </div>

                  <div className="mt-2 min-w-0 overflow-hidden rounded-lg border border-maple-gold/35 bg-maple-gold/5 px-2 py-2 text-center">
                    <p className="truncate text-xs font-semibold text-maple-muted">
                      {t.historyRevenueSubtotal}
                    </p>
                    <p className={`mt-0.5 truncate text-2xl ${NEON_REVENUE}`}>
                      {formatMesos(revenueSum)}
                    </p>
                  </div>

                  <ul className="mt-2 max-h-48 min-h-0 space-y-2 overflow-y-auto overscroll-contain pr-0.5">
                    {list.map((s, idx) => (
                      <li
                        key={s.id}
                        className="min-w-0 rounded-lg border border-maple-border/40 bg-maple-bg/50 p-2"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="truncate text-xs font-semibold text-maple-accent">
                            {t.historyEntry(idx + 1)}
                          </div>
                          <div className="shrink-0 text-[10px] tabular-nums text-maple-muted">
                            {formatRecordTime(s.recordedAt, locale)}
                          </div>
                        </div>
                        <div className="mb-2 truncate text-[10px] text-maple-muted">
                          {s.groundLabel}
                        </div>
                        <div className="grid min-w-0 grid-cols-3 gap-2">
                          <StatBox
                            label={t.historyMesos}
                            value={formatMesos(s.netMesos)}
                          />
                          <StatBox
                            label={
                              locale === "en" ? "Erda Fragments" : "솔 에르다 조각"
                            }
                            value={String(s.fragmentCount)}
                          />
                          <StatBox
                            label={locale === "en" ? "Nodestones" : "코어 젬스톤"}
                            value={String(s.gemstoneCount)}
                          />
                        </div>
                        <div className="mt-2 min-w-0 overflow-hidden text-center">
                          <p className="truncate text-xs font-semibold text-maple-muted">
                            {t.historyRevenue}
                          </p>
                          <p className={`mt-0.5 truncate text-xl ${NEON_REVENUE}`}>
                            {formatMesos(s.sessionTotal)}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-maple-muted">
                            {t.historyExp(formatPercent(s.netExp))}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function computeTodayTotals(
  sessions: SessionRecord[],
  gemPrice: number,
  fragmentPrice: number
) {
  let netMesos = 0;
  let netExp = 0;
  let fragmentItems = 0;
  let gemstoneItems = 0;
  let totalRevenue = 0;

  for (const s of sessions) {
    netMesos += safeNumber(s.netMesos);
    netExp += safeNumber(s.netExp);
    fragmentItems += safeNumber(s.fragmentCount);
    gemstoneItems += safeNumber(s.gemstoneCount);
    totalRevenue += safeNumber(
      s.sessionTotal,
      safeNumber(s.netMesos) +
        safeNumber(s.fragmentCount) * safeNumber(fragmentPrice) +
        safeNumber(s.gemstoneCount) * safeNumber(gemPrice)
    );
  }

  const totalHours = sessions.length * 2;
  const hourly = totalHours > 0 ? totalRevenue / totalHours : 0;

  return {
    netMesos,
    netExp,
    fragmentItems,
    gemstoneItems,
    totalRevenue,
    hourly,
    sessionCount: sessions.length,
  };
}
