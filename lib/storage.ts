import {
  AppPersistedState,
  DEFAULT_FRAGMENT_PRICE,
  DEFAULT_GEM_PRICE,
  STORAGE_KEY,
  SessionRecord,
  defaultPersistedState,
} from "./types";
import { safeNumber } from "./format";
import { getGroundById } from "./huntingGrounds";

const LEGACY_GROUND_IDS: Record<string, string> = {
  serenium: "serenium-library-1",
  dowongyeong: "dowongyeong-four-seasons",
  carcion: "carcion-turtle-1",
};

type LegacySession = {
  id?: string;
  slot?: number;
  sessionLabel?: string;
  groundId?: string;
  groundLabel?: string;
  mesos?: number;
  expPercent?: number;
  itemCount?: number;
  itemKind?: "gem" | "fragment";
  mesosBefore?: number;
  mesosAfter?: number;
  expBefore?: number;
  expAfter?: number;
  netMesos?: number;
  netExp?: number;
  fragmentCount?: number;
  gemstoneCount?: number;
  sessionTotal?: number;
  elapsedSeconds?: number;
  recordedAt?: string;
};

function normalizeGroundId(groundId: string | undefined): string {
  const base = defaultPersistedState();
  if (!groundId) return base.groundId;
  const migrated = LEGACY_GROUND_IDS[groundId] ?? groundId;
  return getGroundById(migrated) ? migrated : base.groundId;
}

function migrateSession(
  raw: LegacySession,
  gemPrice: number,
  fragmentPrice: number
): SessionRecord | null {
  if (!raw?.id || !raw.slot || !raw.recordedAt) return null;

  const hasNewShape =
    raw.netMesos !== undefined ||
    raw.fragmentCount !== undefined ||
    raw.gemstoneCount !== undefined;

  if (hasNewShape) {
    const netMesos = safeNumber(raw.netMesos);
    const fragmentCount = safeNumber(raw.fragmentCount);
    const gemstoneCount = safeNumber(raw.gemstoneCount);
    const sessionTotal = safeNumber(
      raw.sessionTotal,
      netMesos + fragmentCount * fragmentPrice + gemstoneCount * gemPrice
    );
    return {
      id: raw.id,
      slot: raw.slot as SessionRecord["slot"],
      sessionLabel: raw.sessionLabel ?? "",
      groundId: normalizeGroundId(raw.groundId),
      groundLabel: raw.groundLabel ?? "알 수 없음",
      mesosBefore: safeNumber(raw.mesosBefore),
      mesosAfter: safeNumber(raw.mesosAfter),
      expBefore: safeNumber(raw.expBefore),
      expAfter: safeNumber(raw.expAfter),
      netMesos,
      netExp: safeNumber(raw.netExp),
      fragmentCount,
      gemstoneCount,
      sessionTotal,
      elapsedSeconds: safeNumber(raw.elapsedSeconds),
      recordedAt: raw.recordedAt,
    };
  }

  const netMesos = safeNumber(raw.mesos);
  const netExp = safeNumber(raw.expPercent);
  const itemCount = safeNumber(raw.itemCount);
  const fragmentCount = raw.itemKind === "fragment" ? itemCount : 0;
  const gemstoneCount = raw.itemKind === "gem" ? itemCount : 0;
  const sessionTotal =
    netMesos + fragmentCount * fragmentPrice + gemstoneCount * gemPrice;

  return {
    id: raw.id,
    slot: raw.slot as SessionRecord["slot"],
    sessionLabel: raw.sessionLabel ?? "",
    groundId: normalizeGroundId(raw.groundId),
    groundLabel: raw.groundLabel ?? "알 수 없음",
    mesosBefore: 0,
    mesosAfter: netMesos,
    expBefore: 0,
    expAfter: netExp,
    netMesos,
    netExp,
    fragmentCount,
    gemstoneCount,
    sessionTotal,
    elapsedSeconds: safeNumber(raw.elapsedSeconds),
    recordedAt: raw.recordedAt,
  };
}

function migrateFormInputs(parsed: Record<string, unknown>): Pick<
  AppPersistedState,
  | "mesoInputMode"
  | "mesosBeforeInput"
  | "mesosAfterInput"
  | "expBeforeInput"
  | "expAfterInput"
  | "fragmentCount"
  | "gemstoneCount"
> {
  const base = defaultPersistedState();
  const legacyMesos =
    typeof parsed.mesosInput === "string" ? parsed.mesosInput : "";
  const legacyExp = typeof parsed.expInput === "string" ? parsed.expInput : "";
  const legacyItemCount = safeNumber(parsed.itemCount, 0);

  const mesoInputMode: AppPersistedState["mesoInputMode"] =
    parsed.mesoInputMode === "range" || parsed.mesoInputMode === "net"
      ? parsed.mesoInputMode
      : base.mesoInputMode;

  const mesosBeforeInput =
    typeof parsed.mesosBeforeInput === "string"
      ? parsed.mesosBeforeInput
      : base.mesosBeforeInput;
  const mesosAfterInput =
    typeof parsed.mesosAfterInput === "string"
      ? parsed.mesosAfterInput
      : legacyMesos || base.mesosAfterInput;
  const expBeforeInput =
    typeof parsed.expBeforeInput === "string"
      ? parsed.expBeforeInput
      : base.expBeforeInput;
  const expAfterInput =
    typeof parsed.expAfterInput === "string"
      ? parsed.expAfterInput
      : legacyExp || base.expAfterInput;

  const fragmentCount =
    parsed.fragmentCount !== undefined
      ? Math.max(0, safeNumber(parsed.fragmentCount))
      : legacyItemCount > 0
        ? legacyItemCount
        : base.fragmentCount;
  const gemstoneCount =
    parsed.gemstoneCount !== undefined
      ? Math.max(0, safeNumber(parsed.gemstoneCount))
      : base.gemstoneCount;

  return {
    mesoInputMode,
    mesosBeforeInput,
    mesosAfterInput,
    expBeforeInput,
    expAfterInput,
    fragmentCount,
    gemstoneCount,
  };
}

export function loadState(): AppPersistedState {
  if (typeof window === "undefined") return defaultPersistedState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPersistedState();
    const parsed = JSON.parse(raw) as Partial<AppPersistedState> & Record<string, unknown>;
    const base = defaultPersistedState();
    const gemPrice = safeNumber(parsed.gemPrice, DEFAULT_GEM_PRICE);
    const fragmentPrice = safeNumber(parsed.fragmentPrice, DEFAULT_FRAGMENT_PRICE);
    const form = migrateFormInputs(parsed);

    const sessions = Array.isArray(parsed.sessions)
      ? parsed.sessions
          .map((s) => migrateSession(s as LegacySession, gemPrice, fragmentPrice))
          .filter((s): s is SessionRecord => s !== null)
      : [];

    return {
      ...base,
      ...parsed,
      groundId: normalizeGroundId(parsed.groundId),
      gemPrice,
      fragmentPrice,
      ...form,
      timerAccumulatedMs: safeNumber(parsed.timerAccumulatedMs, 0),
      sessions,
      nextSessionCounters: {
        ...base.nextSessionCounters,
        ...(parsed.nextSessionCounters ?? {}),
      },
    };
  } catch {
    return defaultPersistedState();
  }
}

export function saveState(state: AppPersistedState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota or private mode */
  }
}
