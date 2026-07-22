"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  AppQueryProvider,
  useStaticHostingPathFix,
} from "@/hooks/useClientAppQuery";
import { TimerBar } from "./TimerBar";
import { HuntingForm } from "./HuntingForm";
import { SessionLists } from "./SessionLists";
import { Dashboard } from "./Dashboard";
import { GlobalFooter, SettlementFooter } from "./Footer";
import { WindowsDownloadCTA } from "./WindowsDownloadCTA";
import { ToastProvider } from "./Toast";
import { LegacyTabRedirect } from "./LegacyTabRedirect";
import { isElectron, openElectronOverlay, closeElectronOverlay } from "@/lib/electron";
import { getGroundById } from "@/lib/huntingGrounds";
import { parseMesosInput, safeNumber } from "@/lib/format";
import { loadState, saveState } from "@/lib/storage";
import {
  defaultPersistedState,
  type AppPersistedState,
  type ReplanSlot,
  type SessionRecord,
} from "@/lib/types";
import { useTimer, type TimerSnapshot } from "@/hooks/useTimer";
import type { Locale } from "@/lib/locale";
import { guideIndexPath } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

type Props = {
  compact?: boolean;
  locale?: Locale;
};

function ReplanAppInner({ compact, locale = "ko" }: Props) {
  useStaticHostingPathFix();
  const t = ui(locale);

  const [storageReady, setStorageReady] = useState(false);
  const [state, setState] = useState<AppPersistedState>(defaultPersistedState);
  const [recordSlot, setRecordSlot] = useState<ReplanSlot>(1);
  const timer = useTimer({
    mode: state.timerMode,
    running: state.timerRunning,
    anchorMs: state.timerAnchorMs,
    accumulatedMs: state.timerAccumulatedMs,
  });

  const persistTimer = useCallback((snap: TimerSnapshot) => {
    setState((prev) => ({
      ...prev,
      timerMode: snap.mode,
      timerRunning: snap.running,
      timerAnchorMs: snap.anchorMs,
      timerAccumulatedMs: snap.accumulatedMs,
    }));
  }, []);

  useEffect(() => {
    const loaded = loadState();
    setState(loaded);
    timer.hydrate({
      mode: loaded.timerMode,
      running: loaded.timerRunning,
      anchorMs: loaded.timerAnchorMs,
      accumulatedMs: loaded.timerAccumulatedMs,
    });
    setStorageReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    persistTimer(timer.snapshot);
  }, [timer.snapshot, storageReady, persistTimer]);

  useEffect(() => {
    if (!storageReady) return;
    saveState(state);
  }, [state, storageReady]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== "maple-replan-v1" || !e.newValue) return;
      const next = loadState();
      setState(next);
      timer.hydrate({
        mode: next.timerMode,
        running: next.timerRunning,
        anchorMs: next.timerAnchorMs,
        accumulatedMs: next.timerAccumulatedMs,
      });
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [timer]);

  const toggleTimer = useCallback(() => {
    timer.toggle();
  }, [timer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === "Space") {
        e.preventDefault();
        toggleTimer();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleTimer]);

  const openOverlay = async () => {
    if (isElectron()) {
      await openElectronOverlay();
      return;
    }
    const url = `${window.location.origin}/overlay/`;
    const features =
      "popup=yes,toolbar=no,location=no,menubar=no,status=no,scrollbars=no,resizable=no,width=360,height=650";
    window.open(url, "mapleOverlay", features)?.focus();
  };

  const closeOverlay = async () => {
    if (isElectron()) {
      await closeElectronOverlay();
    }
  };

  const handleToggleMode = () => {
    const next = state.timerMode === "countdown" ? "countup" : "countdown";
    timer.setMode(next);
    setState((s) => ({ ...s, timerMode: next }));
  };

  const handleResetTimer = () => {
    timer.reset();
    setState((s) => ({
      ...s,
      timerRunning: false,
      timerAnchorMs: null,
      timerAccumulatedMs: 0,
    }));
  };

  const recordSession = () => {
    const ground = getGroundById(state.groundId);
    const counter = state.nextSessionCounters[recordSlot];
    const sessionLabel = `${recordSlot}재획 ${counter}`;

    const mesosBefore = parseMesosInput(state.mesosBeforeInput);
    const mesosAfter = parseMesosInput(state.mesosAfterInput);
    const netMesos = mesosAfter - mesosBefore;
    const expBefore = safeNumber(state.expBeforeInput);
    const expAfter = safeNumber(state.expAfterInput);
    const netExp = expAfter - expBefore;
    const fragmentCount = safeNumber(state.fragmentCount);
    const gemstoneCount = safeNumber(state.gemstoneCount);
    const fragmentPrice = safeNumber(state.fragmentPrice);
    const gemPrice = safeNumber(state.gemPrice);
    const sessionTotal =
      netMesos +
      fragmentCount * fragmentPrice +
      gemstoneCount * gemPrice;

    const record: SessionRecord = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      slot: recordSlot,
      sessionLabel,
      groundId: state.groundId,
      groundLabel: ground?.label ?? "알 수 없음",
      mesosBefore,
      mesosAfter,
      expBefore,
      expAfter,
      netMesos,
      netExp,
      fragmentCount,
      gemstoneCount,
      sessionTotal,
      elapsedSeconds: timer.getElapsedSeconds(),
      recordedAt: new Date().toISOString(),
    };

    setState((s) => ({
      ...s,
      sessions: [...s.sessions, record],
      nextSessionCounters: {
        ...s.nextSessionCounters,
        [recordSlot]: s.nextSessionCounters[recordSlot] + 1,
      },
      mesosBeforeInput: "",
      mesosAfterInput: "",
      expBeforeInput: "",
      expAfterInput: "",
      fragmentCount: 0,
      gemstoneCount: 0,
      timerRunning: false,
      timerAnchorMs: null,
      timerAccumulatedMs: 0,
    }));
    timer.reset();
  };

  const resetAll = () => {
    if (!window.confirm(t.calcResetConfirm)) return;
    const defaults = defaultPersistedState();
    const cleared: AppPersistedState = {
      ...defaults,
      timerMode: state.timerMode,
      gemPrice: state.gemPrice,
      fragmentPrice: state.fragmentPrice,
      groundId: state.groundId,
    };
    setState(cleared);
    timer.hydrate({
      mode: cleared.timerMode,
      running: false,
      anchorMs: null,
      accumulatedMs: 0,
    });
    saveState(cleared);
  };

  const shellClass = compact
    ? "overflow-hidden p-2"
    : "min-h-screen bg-maple-bg pb-8";
  const containerClass = compact
    ? "w-full"
    : "mx-auto w-full max-w-6xl px-4 py-3 sm:py-4";

  return (
    <div className={shellClass}>
      {!compact && <LegacyTabRedirect />}
      <div className={containerClass}>
        {!compact && (
          <>
            <header className="mb-3 text-center">
              <h1 className="text-lg font-bold text-maple-gold drop-shadow-sm">
                {t.calcTitle}
              </h1>
              <p className="text-[11px] text-maple-muted">{t.calcSubtitle}</p>
            </header>
            {locale === "ko" && <WindowsDownloadCTA />}
          </>
        )}

        <section
          aria-label={locale === "en" ? "2-hour hunt timer" : "2시간 재획 타이머"}
          className="shrink-0"
        >
          <TimerBar
            displaySec={timer.displaySec}
            mode={state.timerMode}
            running={timer.snapshot.running}
            compact={compact}
            onToggleMode={handleToggleMode}
            onToggleRun={toggleTimer}
            onReset={handleResetTimer}
            onOpenOverlay={compact ? undefined : openOverlay}
            onCloseOverlay={compact ? closeOverlay : undefined}
          />
        </section>

        {!compact && (
          <main className="mt-4 min-w-0">
            <div className="flex w-full max-w-6xl flex-col gap-4">
              <section
                aria-label={locale === "en" ? "Hunt log input" : "사냥 기록 입력"}
                className="min-w-0"
              >
                <HuntingForm
                  groundId={state.groundId}
                  mesosBeforeInput={state.mesosBeforeInput}
                  mesosAfterInput={state.mesosAfterInput}
                  expBeforeInput={state.expBeforeInput}
                  expAfterInput={state.expAfterInput}
                  fragmentCount={state.fragmentCount}
                  gemstoneCount={state.gemstoneCount}
                  recordSlot={recordSlot}
                  onGroundChange={(id) => setState((s) => ({ ...s, groundId: id }))}
                  onMesosBeforeChange={(mesosBeforeInput) =>
                    setState((s) => ({ ...s, mesosBeforeInput }))
                  }
                  onMesosAfterChange={(mesosAfterInput) =>
                    setState((s) => ({ ...s, mesosAfterInput }))
                  }
                  onExpBeforeChange={(expBeforeInput) =>
                    setState((s) => ({ ...s, expBeforeInput }))
                  }
                  onExpAfterChange={(expAfterInput) =>
                    setState((s) => ({ ...s, expAfterInput }))
                  }
                  onFragmentCountChange={(fragmentCount) =>
                    setState((s) => ({ ...s, fragmentCount: Math.max(0, fragmentCount) }))
                  }
                  onGemstoneCountChange={(gemstoneCount) =>
                    setState((s) => ({ ...s, gemstoneCount: Math.max(0, gemstoneCount) }))
                  }
                  onRecordSlotChange={setRecordSlot}
                  onRecord={recordSession}
                />
              </section>

              <section
                aria-label={locale === "en" ? "Hunt history" : "사냥 히스토리"}
                className="min-w-0"
              >
                <SessionLists sessions={state.sessions} />
              </section>

              <Dashboard
                sessions={state.sessions}
                gemPrice={state.gemPrice}
                fragmentPrice={state.fragmentPrice}
                onGemPriceChange={(gemPrice) => setState((s) => ({ ...s, gemPrice }))}
                onFragmentPriceChange={(fragmentPrice) =>
                  setState((s) => ({ ...s, fragmentPrice }))
                }
              />

              <button
                type="button"
                onClick={resetAll}
                className="mt-3 w-full rounded border border-red-800/60 py-2 text-xs text-red-300/90 hover:bg-red-950/30"
              >
                {t.calcResetAll}
              </button>

              <p className="text-center text-sm">
                <Link
                  href={guideIndexPath(locale)}
                  className="inline-flex items-center gap-1 rounded-lg border border-maple-gold/50 bg-maple-gold/10 px-4 py-2.5 font-medium text-maple-gold hover:bg-maple-gold/20"
                >
                  {t.calcMoreGuides}
                </Link>
              </p>

              {locale === "ko" && <SettlementFooter />}
            </div>
          </main>
        )}

        {!compact && <GlobalFooter locale={locale} />}
      </div>
    </div>
  );
}

export function ReplanApp(props: Props) {
  return (
    <ToastProvider>
      <AppQueryProvider>
        <ReplanAppInner {...props} />
      </AppQueryProvider>
    </ToastProvider>
  );
}
