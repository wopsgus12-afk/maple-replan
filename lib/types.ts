export type ReplanSlot = 1 | 2 | 3;

export type SessionRecord = {
  id: string;
  slot: ReplanSlot;
  sessionLabel: string;
  groundId: string;
  groundLabel: string;
  mesosBefore: number;
  mesosAfter: number;
  expBefore: number;
  expAfter: number;
  netMesos: number;
  netExp: number;
  fragmentCount: number;
  gemstoneCount: number;
  sessionTotal: number;
  elapsedSeconds: number;
  recordedAt: string;
};

export type TimerMode = "countdown" | "countup";

export type AppPersistedState = {
  timerMode: TimerMode;
  timerRunning: boolean;
  timerAnchorMs: number | null;
  timerAccumulatedMs: number;
  groundId: string;
  mesosBeforeInput: string;
  mesosAfterInput: string;
  expBeforeInput: string;
  expAfterInput: string;
  fragmentCount: number;
  gemstoneCount: number;
  gemPrice: number;
  fragmentPrice: number;
  sessions: SessionRecord[];
  nextSessionCounters: Record<ReplanSlot, number>;
};

export const DEFAULT_GEM_PRICE = 1_800_000;
export const DEFAULT_FRAGMENT_PRICE = 4_000_000;
export const REPLAN_DURATION_SEC = 120 * 60;
export const HOURS_PER_SESSION = 2;

export const STORAGE_KEY = "maple-replan-v1";

export function defaultPersistedState(): AppPersistedState {
  return {
    timerMode: "countdown",
    timerRunning: false,
    timerAnchorMs: null,
    timerAccumulatedMs: 0,
    groundId: "serenium-library-1",
    mesosBeforeInput: "",
    mesosAfterInput: "",
    expBeforeInput: "",
    expAfterInput: "",
    fragmentCount: 0,
    gemstoneCount: 0,
    gemPrice: DEFAULT_GEM_PRICE,
    fragmentPrice: DEFAULT_FRAGMENT_PRICE,
    sessions: [],
    nextSessionCounters: { 1: 1, 2: 1, 3: 1 },
  };
}
