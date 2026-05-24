"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { REPLAN_DURATION_SEC } from "@/lib/types";
import { safeNumber } from "@/lib/format";

export type TimerSnapshot = {
  mode: "countdown" | "countup";
  running: boolean;
  anchorMs: number | null;
  accumulatedMs: number;
};

function elapsedMs(snapshot: TimerSnapshot, now = Date.now()): number {
  const base = safeNumber(snapshot.accumulatedMs);
  if (!snapshot.running || snapshot.anchorMs == null) return base;
  return base + (now - snapshot.anchorMs);
}

export function displaySeconds(snapshot: TimerSnapshot, now = Date.now()): number {
  const ms = elapsedMs(snapshot, now);
  const sec = Math.floor(ms / 1000);
  if (snapshot.mode === "countup") return sec;
  return Math.max(0, REPLAN_DURATION_SEC - sec);
}

export function isReplanComplete(snapshot: TimerSnapshot, now = Date.now()): boolean {
  if (snapshot.mode !== "countdown") return false;
  const ms = elapsedMs(snapshot, now);
  return ms >= REPLAN_DURATION_SEC * 1000;
}

export function useTimer(
  initial: TimerSnapshot,
  onTick?: (seconds: number) => void
) {
  const [snapshot, setSnapshot] = useState<TimerSnapshot>(initial);
  const snapshotRef = useRef(snapshot);
  snapshotRef.current = snapshot;

  const [displaySec, setDisplaySec] = useState(() =>
    displaySeconds(initial)
  );

  useEffect(() => {
    snapshotRef.current = snapshot;
    setDisplaySec(displaySeconds(snapshot));
  }, [snapshot]);

  useEffect(() => {
    const id = window.setInterval(() => {
      const now = Date.now();
      const sec = displaySeconds(snapshotRef.current, now);
      setDisplaySec(sec);
      onTick?.(sec);
    }, 250);
    return () => clearInterval(id);
  }, [onTick]);

  const start = useCallback(() => {
    setSnapshot((s) => {
      if (s.running) return s;
      return { ...s, running: true, anchorMs: Date.now() };
    });
  }, []);

  const stop = useCallback(() => {
    setSnapshot((s) => {
      if (!s.running) return s;
      const now = Date.now();
      const acc =
        safeNumber(s.accumulatedMs) +
        (s.anchorMs != null ? now - s.anchorMs : 0);
      return {
        ...s,
        running: false,
        anchorMs: null,
        accumulatedMs: acc,
      };
    });
  }, []);

  const toggle = useCallback(() => {
    if (snapshotRef.current.running) stop();
    else start();
  }, [start, stop]);

  const reset = useCallback(() => {
    setSnapshot((s) => ({
      ...s,
      running: false,
      anchorMs: null,
      accumulatedMs: 0,
    }));
  }, []);

  const setMode = useCallback((mode: "countdown" | "countup") => {
    setSnapshot((s) => ({
      ...s,
      mode,
      running: false,
      anchorMs: null,
      accumulatedMs: 0,
    }));
  }, []);

  const hydrate = useCallback((next: TimerSnapshot) => {
    setSnapshot(next);
  }, []);

  const getElapsedSeconds = useCallback(() => {
    return Math.floor(elapsedMs(snapshotRef.current) / 1000);
  }, []);

  return {
    snapshot,
    displaySec,
    start,
    stop,
    toggle,
    reset,
    setMode,
    hydrate,
    getElapsedSeconds,
  };
}
