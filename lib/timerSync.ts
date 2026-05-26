import type { TimerSnapshot } from "@/hooks/useTimer";

export type TimerSyncMessage = {
  type: "timer:snapshot";
  snapshot: TimerSnapshot;
  sentAt: number;
  sourceId: string;
};

const CHANNEL_NAME = "gg-pass:maple:timer-sync";
const STORAGE_KEY = "__gg_pass_maple_timer_sync__";

let syncSourceId: string | null = null;

export function getTimerSyncSourceId(): string {
  if (syncSourceId) return syncSourceId;
  syncSourceId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `sync-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return syncSourceId;
}

export function snapshotKey(snapshot: TimerSnapshot): string {
  return `${snapshot.mode}|${snapshot.running}|${snapshot.anchorMs}|${snapshot.accumulatedMs}`;
}

function safeParse(raw: string | null): TimerSyncMessage | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw) as TimerSyncMessage;
    if (v?.type !== "timer:snapshot" || !v.snapshot || !v.sourceId) return null;
    return v;
  } catch {
    return null;
  }
}

export function publishTimerSnapshot(snapshot: TimerSnapshot): void {
  const msg: TimerSyncMessage = {
    type: "timer:snapshot",
    snapshot,
    sentAt: Date.now(),
    sourceId: getTimerSyncSourceId(),
  };

  try {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.postMessage(msg);
    channel.close();
  } catch {
    /* BroadcastChannel 미지원 */
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msg));
  } catch {
    /* quota */
  }
}

export function subscribeTimerSync(onMessage: (msg: TimerSyncMessage) => void): () => void {
  let channel: BroadcastChannel | null = null;
  const selfId = getTimerSyncSourceId();

  try {
    channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (event) => {
      const data = event.data as TimerSyncMessage;
      if (data?.type !== "timer:snapshot") return;
      if (data.sourceId === selfId) return;
      onMessage(data);
    };
  } catch {
    /* ignore */
  }

  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    const parsed = safeParse(event.newValue);
    if (!parsed || parsed.sourceId === selfId) return;
    onMessage(parsed);
  };

  window.addEventListener("storage", onStorage);

  return () => {
    channel?.close();
    window.removeEventListener("storage", onStorage);
  };
}
