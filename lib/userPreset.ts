import {
  DEFAULT_FRAGMENT_PRICE,
  DEFAULT_GEM_PRICE,
  defaultPersistedState,
} from "@/lib/types";
import { getGroundById } from "@/lib/huntingGrounds";
import { safeNumber } from "@/lib/format";
import type { Locale } from "@/lib/locale";

export const PRESET_STORAGE_KEY = "ggpass_user_preset";

export type ServerMode = "kms" | "gms_heroic";

export type UserPreset = {
  serverMode: ServerMode;
  fragmentPrice: number;
  gemPrice: number;
  groundId: string;
};

export function defaultUserPreset(): UserPreset {
  const base = defaultPersistedState();
  return {
    serverMode: "kms",
    fragmentPrice: DEFAULT_FRAGMENT_PRICE,
    gemPrice: DEFAULT_GEM_PRICE,
    groundId: base.groundId,
  };
}

export function isServerMode(value: unknown): value is ServerMode {
  return value === "kms" || value === "gms_heroic";
}

/** Load preset from LocalStorage. Returns null if missing/invalid. */
export function loadUserPreset(): UserPreset | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PRESET_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<UserPreset>;
    const defaults = defaultUserPreset();
    const groundId =
      typeof parsed.groundId === "string" && getGroundById(parsed.groundId)
        ? parsed.groundId
        : defaults.groundId;
    return {
      serverMode: isServerMode(parsed.serverMode) ? parsed.serverMode : defaults.serverMode,
      fragmentPrice: Math.max(0, safeNumber(parsed.fragmentPrice, defaults.fragmentPrice)),
      gemPrice: Math.max(0, safeNumber(parsed.gemPrice, defaults.gemPrice)),
      groundId,
    };
  } catch {
    return null;
  }
}

export function saveUserPreset(preset: UserPreset): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(preset));
  } catch {
    /* quota / private mode */
  }
}

export function clearUserPreset(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PRESET_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** Calculation layer: Heroic uses 0 prices; stored KMS values stay untouched. */
export function effectivePrices(
  serverMode: ServerMode,
  fragmentPrice: number,
  gemPrice: number
): { fragmentPrice: number; gemPrice: number } {
  if (serverMode === "gms_heroic") {
    return { fragmentPrice: 0, gemPrice: 0 };
  }
  return {
    fragmentPrice: Math.max(0, safeNumber(fragmentPrice)),
    gemPrice: Math.max(0, safeNumber(gemPrice)),
  };
}

/** Compact badge price, e.g. 4,000,000 → "400만" / "4M" */
export function formatPriceShort(n: number, locale: Locale): string {
  const v = Math.max(0, Math.floor(safeNumber(n)));
  if (locale === "en") {
    if (v >= 1_000_000) {
      const m = v / 1_000_000;
      return `${Number.isInteger(m) ? m : m.toFixed(1)}M`;
    }
    if (v >= 1_000) {
      const k = v / 1_000;
      return `${Number.isInteger(k) ? k : k.toFixed(1)}K`;
    }
    return String(v);
  }
  if (v >= 100_000_000) {
    const eok = Math.floor(v / 100_000_000);
    const man = Math.floor((v % 100_000_000) / 10_000);
    if (man > 0) return `${eok}억 ${man.toLocaleString("ko-KR")}만`;
    return `${eok}억`;
  }
  if (v >= 10_000) {
    return `${Math.round(v / 10_000).toLocaleString("ko-KR")}만`;
  }
  return v.toLocaleString("ko-KR");
}
