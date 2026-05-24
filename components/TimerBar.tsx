"use client";

import { formatTimerDisplay } from "@/lib/format";
import { REPLAN_DURATION_SEC } from "@/lib/types";

type Props = {
  displaySec: number;
  mode: "countdown" | "countup";
  running: boolean;
  compact?: boolean;
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
  onToggleMode,
  onToggleRun,
  onReset,
  onOpenOverlay,
  onCloseOverlay,
}: Props) {
  const progress =
    mode === "countdown"
      ? Math.min(100, ((REPLAN_DURATION_SEC - displaySec) / REPLAN_DURATION_SEC) * 100)
      : Math.min(100, (displaySec / REPLAN_DURATION_SEC) * 100);

  return (
    <section
      className={`rounded-lg border border-maple-border bg-maple-panel/90 p-3 shadow-maple ${
        compact ? "electron-drag p-2" : ""
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-maple-gold">2시간 재획 타이머</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-maple-muted">Ctrl+Shift+Space</span>
          {compact && onCloseOverlay && (
            <button
              type="button"
              onClick={onCloseOverlay}
              className="electron-no-drag rounded border border-maple-border px-1.5 py-0.5 text-[10px] text-maple-muted hover:border-red-700 hover:text-red-300"
              aria-label="오버레이 닫기"
            >
              닫기
            </button>
          )}
        </div>
      </div>
      <div
        className={`font-mono font-bold tracking-wider text-maple-accent ${
          compact ? "text-2xl" : "text-3xl sm:text-4xl"
        }`}
        aria-live="polite"
      >
        {formatTimerDisplay(displaySec)}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-maple-bg">
        <div
          className="h-full bg-gradient-to-r from-maple-border to-maple-gold transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      {mode === "countdown" && (
        <p className="mt-1 text-[10px] text-maple-muted">
          목표 {formatTimerDisplay(REPLAN_DURATION_SEC)}
        </p>
      )}
      <div className={`mt-3 flex flex-wrap gap-1.5 ${compact ? "text-xs" : "text-sm"}`}>
        <button
          type="button"
          onClick={onToggleMode}
          className={`rounded border border-maple-border px-2 py-1 text-maple-muted hover:border-maple-gold hover:text-maple-gold ${
            compact ? "electron-no-drag" : ""
          }`}
        >
          {mode === "countdown" ? "카운트 업" : "카운트 다운"}
        </button>
        <button
          type="button"
          onClick={onToggleRun}
          className={`rounded px-3 py-1 font-medium ${
            running
              ? "bg-red-900/60 text-red-200 border border-red-700"
              : "bg-maple-accent/20 text-maple-accent border border-maple-accent"
          } ${compact ? "electron-no-drag" : ""}`}
        >
          {running ? "정지" : "시작"}
        </button>
        <button
          type="button"
          onClick={onReset}
          className={`rounded border border-maple-border px-2 py-1 text-maple-muted hover:text-maple-gold ${
            compact ? "electron-no-drag" : ""
          }`}
        >
          리셋
        </button>
        {onOpenOverlay && !compact && (
          <button
            type="button"
            onClick={onOpenOverlay}
            className="rounded border border-maple-gold/50 px-2 py-1 text-maple-gold hover:bg-maple-gold/10"
          >
            오버레이 모드
          </button>
        )}
      </div>
    </section>
  );
}
