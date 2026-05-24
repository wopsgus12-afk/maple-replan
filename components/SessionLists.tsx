"use client";

import type { ReplanSlot, SessionRecord } from "@/lib/types";
import { formatMesos, formatPercent, safeNumber } from "@/lib/format";

const SLOT_LABELS: Record<ReplanSlot, string> = {
  1: "1차 재획",
  2: "2차 재획",
  3: "3차 재획",
};

const NEON_REVENUE =
  "whitespace-nowrap font-bold text-maple-accent drop-shadow-[0_0_14px_rgba(62,207,110,0.7)]";

type Props = {
  sessions: SessionRecord[];
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

export function SessionLists({ sessions }: Props) {
  const slots: ReplanSlot[] = [1, 2, 3];

  return (
    <section aria-label="사냥 히스토리" className="w-full min-w-0">
      <h2 className="mb-2 text-sm font-semibold text-maple-gold">사냥 히스토리</h2>
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

          return (
            <article
              key={slot}
              className="flex min-w-0 flex-col rounded-lg border border-maple-border bg-maple-panel/60 p-3"
            >
              <h3 className="shrink-0 border-b border-maple-border/50 pb-1.5 text-lg font-bold text-maple-gold">
                {SLOT_LABELS[slot]}
              </h3>

              {list.length === 0 ? (
                <p className="flex flex-1 items-center justify-center py-6 text-center text-xs text-maple-muted">
                  기록 없음
                </p>
              ) : (
                <>
                  <div className="mt-2 grid min-w-0 grid-cols-3 gap-2">
                    <StatBox label="획득 메소 소계" value={formatMesos(mesosSum)} />
                    <StatBox label="솔 에르다 조각" value={String(fragmentsSum)} />
                    <StatBox label="코어 젬스톤" value={String(gemstonesSum)} />
                  </div>

                  <div className="mt-2 min-w-0 overflow-hidden rounded-lg border border-maple-gold/35 bg-maple-gold/5 px-2 py-2 text-center">
                    <p className="truncate text-xs font-semibold text-maple-muted">총수익 소계</p>
                    <p className={`mt-0.5 truncate text-2xl ${NEON_REVENUE}`}>
                      {formatMesos(revenueSum)}
                    </p>
                  </div>

                  <ul className="mt-2 max-h-48 min-h-0 space-y-2 overflow-y-auto overscroll-contain pr-0.5">
                    {list.map((s) => (
                      <li
                        key={s.id}
                        className="min-w-0 rounded-lg border border-maple-border/40 bg-maple-bg/50 p-2"
                      >
                        <div className="truncate text-xs font-semibold text-maple-accent">
                          {s.sessionLabel}
                        </div>
                        <div className="mb-2 truncate text-[10px] text-maple-muted">
                          {s.groundLabel}
                        </div>
                        <div className="grid min-w-0 grid-cols-3 gap-2">
                          <StatBox
                            label="획득 메소"
                            value={formatMesos(s.netMesos)}
                          />
                          <StatBox
                            label="솔 에르다 조각"
                            value={String(s.fragmentCount)}
                          />
                          <StatBox
                            label="코어 젬스톤"
                            value={String(s.gemstoneCount)}
                          />
                        </div>
                        <div className="mt-2 min-w-0 overflow-hidden text-center">
                          <p className="truncate text-xs font-semibold text-maple-muted">
                            1회 총수익
                          </p>
                          <p className={`mt-0.5 truncate text-xl ${NEON_REVENUE}`}>
                            {formatMesos(s.sessionTotal)}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-maple-muted">
                            순수 EXP {formatPercent(s.netExp)}
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
