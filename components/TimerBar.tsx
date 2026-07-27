"use client";

import { formatTimerDisplay } from "@/lib/format";
import type { Locale } from "@/lib/locale";
import { REPLAN_DURATION_SEC } from "@/lib/types";
import { ui } from "@/lib/uiCopy";

const BTN =
  "electron-no-drag relative z-10 touch-manipulation active:scale-[0.98] transition-transform";

type Props = {
  displaySec: number;
  mode: "countdown" | "countup";
  running: boolean;
  compact?: boolean;
  locale?: Locale;
  onToggleMode: () => void;
  onToggleRun: () => void;
  onReset: () => void;
  onOpenOverlay?: () => void;
  onCloseOverlay?: () => void;
};

export function TimerBar({
  displaySec,
  mode,
  running,
  compact,
  locale = "ko",
  onToggleMode,
  onToggleRun,
  onReset,
  onOpenOverlay,
  onCloseOverlay,
}: Props) {
  const t = ui(locale);
  const progress =
    mode === "countdown"
      ? Math.min(100, ((REPLAN_DURATION_SEC - displaySec) / REPLAN_DURATION_SEC) * 100)
      : Math.min(100, (displaySec / REPLAN_DURATION_SEC) * 100);

  return (
    <section className="electron-no-drag relative z-10 rounded-lg border border-maple-border bg-maple-panel/90 p-3 shadow-maple">
      <div
        className={`mb-2 flex items-center justify-between gap-2 ${compact ? "electron-drag-handle -mx-1 -mt-1 rounded-t px-1 pt-1" : ""}`}
      >
        <span className="text-xs font-medium text-maple-gold">{t.timerTitle}</span>
        <div className="electron-no-drag flex items-center gap-2">
          <span className="text-[10px] text-maple-muted">Ctrl+Shift+Space</span>
          {compact && onCloseOverlay && (
            <button
              type="button"
              onClick={onCloseOverlay}
              className={`${BTN} rounded border border-maple-border px-1.5 py-0.5 text-[10px] text-maple-muted hover:border-red-700 hover:text-red-300`}
              aria-label={t.timerCloseOverlay}
            >
              {t.timerCloseOverlay}
            </button>
          )}
        </div>
      </div>
      <div
        className={`electron-no-drag font-mono font-bold tracking-wider text-maple-accent ${
          compact ? "text-2xl" : "text-3xl sm:text-4xl"
        }`}
        aria-live="polite"
      >
        {formatTimerDisplay(displaySec)}
      </div>
      <div className="electron-no-drag mt-2 h-1.5 overflow-hidden rounded-full bg-maple-bg">
        <div
          className="h-full bg-gradient-to-r from-maple-border to-maple-gold transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      {mode === "countdown" && (
        <p className="electron-no-drag mt-1 text-[10px] text-maple-muted">
          {t.timerTarget} {formatTimerDisplay(REPLAN_DURATION_SEC)}
        </p>
      )}
      <div
        className={`electron-no-drag relative z-20 mt-3 flex flex-wrap gap-1.5 ${compact ? "text-xs" : "text-sm"}`}
      >
        <button
          type="button"
          onClick={onToggleMode}
          className={`${BTN} rounded border border-maple-border px-2 py-1 text-maple-muted hover:border-maple-gold hover:text-maple-gold`}
        >
          {mode === "countdown" ? t.timerCountUp : t.timerCountDown}
        </button>
        <button
          type="button"
          onClick={onToggleRun}
          className={`${BTN} rounded px-3 py-1 font-medium ${
            running
              ? "border border-red-700 bg-red-900/60 text-red-200"
              : "border border-maple-accent bg-maple-accent/20 text-maple-accent"
          }`}
        >
          {running ? t.timerStop : t.timerStart}
        </button>
        <button
          type="button"
          onClick={onReset}
          className={`${BTN} rounded border border-maple-border px-2 py-1 text-maple-muted hover:text-maple-gold`}
        >
          {t.timerReset}
        </button>
        {onOpenOverlay && !compact && (
          <button
            type="button"
            onClick={onOpenOverlay}
            className={`${BTN} rounded border border-maple-gold/50 px-2 py-1 text-maple-gold hover:bg-maple-gold/10`}
          >
            {t.timerOverlay}
          </button>
        )}
      </div>
    </section>
  );
}
