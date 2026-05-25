"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AppQueryProvider,
  useAppQuery,
  useStaticHostingPathFix,
} from "@/hooks/useClientAppQuery";
import { GuideDetailPanel } from "./GuideDetailPanel";
import { TimerBar } from "./TimerBar";
import { HuntingForm } from "./HuntingForm";
import { SessionLists } from "./SessionLists";
import { Dashboard } from "./Dashboard";
import { GlobalFooter, SettlementFooter } from "./Footer";
import { GuideCards } from "./GuideCards";
import { FeedbackForm } from "./FeedbackForm";
import { BoardView } from "./BoardView";
import { AdBanner } from "./AdPlaceholder";
import { ToastProvider } from "./Toast";
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

type Props = {
  compact?: boolean;
};

const TAB_BUTTON_CLASS = (active: boolean) =>
  `maple-tab ${active ? "maple-tab-active" : "maple-tab-inactive"}`;

function ReplanAppInner({ compact }: Props) {
  useStaticHostingPathFix();

  const { mainTab, articleSlug, setMainTab, closeArticle } = useAppQuery();

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
    window.alert(
      "오버레이 모드는 Electron 앱에서 사용하세요.\n\nnpm run electron:dev 로 실행해 주세요."
    );
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
    if (!window.confirm("오늘의 모든 기록과 타이머를 초기화할까요?")) return;
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
    : mainTab === "calculator"
      ? "mx-auto w-full max-w-6xl px-4 py-3 sm:py-4"
      : "mx-auto w-full max-w-2xl px-4 py-3 sm:max-w-3xl sm:py-4";

  return (
    <div className={shellClass}>
      <div className={containerClass}>
        {!compact && (
          <header className="mb-3 text-center">
            <h1 className="text-lg font-bold text-maple-gold drop-shadow-sm">
              메이플 재획 정산
            </h1>
            <p className="text-[11px] text-maple-muted">2시간 사냥 시급 · 누적 정산</p>
          </header>
        )}

        <section aria-label="2시간 재획 타이머" className="shrink-0">
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

        {!compact && <AdBanner variant="strip" className="mt-3 w-full shrink-0" />}

        {!compact && (
          <nav
            aria-label="메인 탭"
            className="mt-3 flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <button
              type="button"
              onClick={() => setMainTab("calculator")}
              className={TAB_BUTTON_CLASS(mainTab === "calculator")}
            >
              재획 정산
            </button>
            <button
              type="button"
              onClick={() => setMainTab("guides")}
              className={TAB_BUTTON_CLASS(mainTab === "guides")}
            >
              재획 가이드 정보
            </button>
            <button
              type="button"
              onClick={() => setMainTab("brag")}
              className={TAB_BUTTON_CLASS(mainTab === "brag")}
            >
              자랑 게시판
            </button>
            <button
              type="button"
              onClick={() => setMainTab("tips")}
              className={TAB_BUTTON_CLASS(mainTab === "tips")}
            >
              사냥터 팁
            </button>
            <button
              type="button"
              onClick={() => setMainTab("feedback")}
              className={TAB_BUTTON_CLASS(mainTab === "feedback")}
            >
              개발자에게 한마디
            </button>
          </nav>
        )}

        {!compact && (
          <main className="mt-4 min-w-0">
            {mainTab === "guides" && !articleSlug && <GuideCards />}

            {mainTab === "guides" && articleSlug && (
              <GuideDetailPanel slug={articleSlug} onBack={closeArticle} />
            )}

            {mainTab === "brag" && <BoardView kind="brag" />}

            {mainTab === "tips" && <BoardView kind="tips" />}

            {mainTab === "feedback" && <FeedbackForm />}

            {mainTab === "calculator" && (
              <div className="flex w-full max-w-6xl flex-col gap-4">
                <section aria-label="사냥 기록 입력" className="min-w-0">
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

                <section aria-label="사냥 히스토리" className="min-w-0">
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
                  전체 초기화
                </button>

                <AdBanner variant="wide" className="mt-4 w-full" />

                <SettlementFooter />
              </div>
            )}
          </main>
        )}

        {!compact && <GlobalFooter />}
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
