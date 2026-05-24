export function safeNumber(value: unknown, fallback = 0): number {
  if (value === null || value === undefined || value === "") return fallback;
  const n = typeof value === "number" ? value : Number(String(value).replace(/,/g, ""));
  return Number.isFinite(n) ? n : fallback;
}

export function formatMesos(n: number): string {
  const v = safeNumber(n);
  return Math.round(v).toLocaleString("ko-KR");
}

export function formatPercent(n: number): string {
  const v = safeNumber(n);
  const rounded = Math.round(v * 100) / 100;
  return `${rounded.toLocaleString("ko-KR")}%`;
}

export function parseMesosInput(raw: string): number {
  const cleaned = raw.replace(/[^\d.-]/g, "");
  return safeNumber(cleaned, 0);
}

/** Comma-format digit-only mesos string while typing */
export function formatMesosInputLive(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  const normalized = digits.replace(/^0+(?=\d)/, "");
  return normalized.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** Korean readable mesos units, e.g. 150,000,000 → "1억 5,000만 메소" */
export function formatMesosKorean(n: number): string {
  const v = Math.floor(Math.abs(safeNumber(n)));
  if (v === 0) return "0 메소";

  const parts: string[] = [];
  let rest = v;

  const eok = Math.floor(rest / 100_000_000);
  if (eok > 0) {
    parts.push(`${eok.toLocaleString("ko-KR")}억`);
    rest %= 100_000_000;
  }

  const man = Math.floor(rest / 10_000);
  if (man > 0) {
    parts.push(`${man.toLocaleString("ko-KR")}만`);
    rest %= 10_000;
  }

  if (rest > 0) {
    parts.push(rest.toLocaleString("ko-KR"));
  }

  return `${parts.join(" ")} 메소`;
}

export function formatTimerDisplay(totalSeconds: number): string {
  const sec = Math.max(0, Math.floor(safeNumber(totalSeconds)));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
  return `${pad(m)}:${pad(s)}`;
}

export function mesoHourlyWage(
  mesos: number,
  itemCount: number,
  itemPrice: number,
  elapsedSeconds: number
): number {
  const elapsed = Math.max(elapsedSeconds, 1);
  const total = safeNumber(mesos) + safeNumber(itemCount) * safeNumber(itemPrice);
  return (total / elapsed) * 3600;
}
