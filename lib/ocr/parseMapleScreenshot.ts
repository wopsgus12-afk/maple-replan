/**
 * MapleStory KMS Battle Statistics (전투분석시스템) OCR helpers.
 * Full-image preprocess + keyword scan for duration/meso/exp (no fixed % crop).
 */

export type MapleOcrResult = {
  meso: number;
  exp: number;
  duration: string;
  rawText: string;
  confidence: number;
  /** Data-URL of the preprocessed full image used for OCR (for lab preview). */
  previewDataUrl: string;
};

const TESSERACT_BASE = "/tesseract";

/** Same-origin absolute URL so Worker importScripts is not blocked. */
function tesseractUrl(relPath: string): string {
  const path = relPath.startsWith("/") ? relPath : `${TESSERACT_BASE}/${relPath}`;
  if (typeof window === "undefined") return path;
  return new URL(path, window.location.origin).href;
}

/** Fix common OCR digit confusions in numeric / unit strings. */
export function correctOcrDigits(input: string): string {
  return input
    .replace(/[Oo]/g, "0")
    .replace(/[Il|]/g, "1")
    .replace(/[Ss]/g, "5")
    .replace(/[Zz]/g, "2")
    .replace(/[Bb]/g, "8");
}

/**
 * Strip all whitespace and apply Korean OCR typo fixes before regex matching.
 * e.g. "획 득 걸 험 치 61 익" → "획득경험치61억"
 */
export function normalizeOcrText(rawText: string): string {
  let s = rawText.replace(/[\s\u00A0]+/g, "");
  s = correctOcrDigits(s);
  s = s.replace(/건투|전두/g, "전투");
  s = s.replace(/매스|배초|배소|메초/g, "메소");
  s = s.replace(/걸험치|걸치/g, "경험치");
  s = s.replace(/익/g, "억");
  s = s.replace(/[걸껄덤]/g, "경");
  return s;
}

/**
 * Parse Maple Korean amount strings into integers.
 * Examples:
 * - "1억 0898만" → 108980000
 * - "6647만 7498" → 66477498
 * - "122억 6451만" → 12264510000
 * - "17만 9845" → 179845
 * - "61 억 8529 만" / "61억8 5 2 9만" → 6185290000
 * - "0" → 0
 */
export function parseKoreanNumber(raw: string): number {
  if (!raw) return 0;
  let s = correctOcrDigits(raw)
    .replace(/,/g, "")
    .replace(/익/g, "억")
    .trim();

  s = s.replace(/\(.*?\)/g, "").trim();
  if (!s) return 0;

  // Glue broken digit runs and spaces around 조/억/만
  s = s.replace(/\s+/g, " ").trim();
  s = s.replace(/\s*([조억만])\s*/g, "$1");
  while (/(\d)\s+(\d)/.test(s)) {
    s = s.replace(/(\d)\s+(\d)/g, "$1$2");
  }
  s = s.replace(/\s+/g, "");

  if (/^\d+$/.test(s)) return Number(s);

  const eokMan = s.match(/(\d+)억(\d+)만(\d+)?/);
  if (eokMan) {
    return (
      Number(eokMan[1]) * 100_000_000 +
      Number(eokMan[2]) * 10_000 +
      Number(eokMan[3] || 0)
    );
  }

  let total = 0;
  let matched = false;

  const jo = s.match(/(\d+)조/);
  if (jo) {
    total += Number(jo[1]) * 1_000_000_000_000;
    matched = true;
  }

  const eok = s.match(/(\d+)억/);
  if (eok) {
    total += Number(eok[1]) * 100_000_000;
    matched = true;
  }

  const man = s.match(/(\d+)만/);
  if (man) {
    total += Number(man[1]) * 10_000;
    matched = true;
  }

  const afterMan = s.match(/만(\d+)$/);
  if (afterMan) {
    total += Number(afterMan[1]);
    matched = true;
  } else if (!matched) {
    const digits = s.replace(/[^\d]/g, "");
    if (digits) return Number(digits);
  } else if (eok && !man) {
    const afterEok = s.match(/억(\d+)$/);
    if (afterEok) {
      const n = Number(afterEok[1]);
      total += n < 10000 ? n * 10_000 : n;
    }
  }

  return total;
}

/** Amount payload after a label (compact text has no spaces). */
const AMOUNT_CHARS = "[0-9OolIl|SsZzBb조억만,]+";
/** Same, allowing whitespace between tokens in raw OCR lines. */
const AMOUNT_CHARS_SPACED = "[0-9OolIl|SsZzBb조억만,\\s]+";

function trimAmountChunk(chunk: string): string {
  return chunk
    .replace(/(평균|총합|몬스터|측정|스킬|획득|전투|시간).*$/i, "")
    .trim();
}

function extractLabeledAmount(
  text: string,
  labelPatterns: RegExp[],
  amountClass = AMOUNT_CHARS
): string | null {
  for (const label of labelPatterns) {
    const re = new RegExp(`${label.source}[:：]?\\s*(${amountClass})`, "i");
    const m = text.match(re);
    if (m?.[1]) {
      const chunk = trimAmountChunk(m[1]);
      if (chunk.replace(/\s/g, "")) return chunk;
    }
  }
  return null;
}

function extractDuration(compact: string, spaced: string): string {
  const patterns = [
    /전투시간[:：]?(\d{1,2}:\d{2}:\d{2})/,
    /전투\s*시간\s*[:：]?\s*(\d{1,2}:\d{2}:\d{2})/,
  ];
  for (const src of [compact, spaced]) {
    for (const re of patterns) {
      const m = src.match(re);
      if (m?.[1]) {
        const parts = m[1].split(":").map((p) => p.padStart(2, "0"));
        return `${parts[0]}:${parts[1]}:${parts[2]}`;
      }
    }
  }
  const any = compact.match(/(\d{2}:\d{2}:\d{2})/) ?? spaced.match(/(\d{2}:\d{2}:\d{2})/);
  return any?.[1] ?? "";
}

/**
 * Scan full OCR rawText for battle-stats fields (position-independent).
 * Prefers 획득메소 / 획득경험치 over bare 메소 / 경험치; skips 평균경험치.
 */
export function parseBattleStatsText(rawText: string): {
  meso: number;
  exp: number;
  duration: string;
} {
  const compact = normalizeOcrText(rawText);
  const spaced = correctOcrDigits(rawText)
    .replace(/\r/g, "\n")
    .replace(/건\s*투|전\s*두/g, "전투")
    .replace(/매\s*스|배\s*초|배\s*소|메\s*초/g, "메소")
    .replace(/걸\s*험\s*치|걸\s*치/g, "경험치")
    .replace(/익/g, "억");

  const mesoRaw =
    extractLabeledAmount(compact, [/획득메소/, /메소/]) ??
    extractLabeledAmount(
      spaced,
      [/획득\s*메소/, /메소/],
      AMOUNT_CHARS_SPACED
    );

  let expRaw =
    extractLabeledAmount(compact, [/획득경험치/, /EXP획득경험치/]) ??
    extractLabeledAmount(
      spaced,
      [/획득\s*경험치/, /EXP\s*획득\s*경험치/],
      AMOUNT_CHARS_SPACED
    );

  if (!expRaw) {
    const looseCompact = compact.match(
      /(?<!평균)경험치[:：]?([0-9OolIl|SsZzBb조억만,]+)/i
    );
    if (looseCompact?.[1]) {
      expRaw = trimAmountChunk(looseCompact[1]);
    } else {
      const looseSpaced = spaced.match(
        /(?<!평균\s*)경험\s*치\s*[:：]?\s*([0-9OolIl|SsZzBb조억만,\s]+)/i
      );
      if (looseSpaced?.[1]) expRaw = trimAmountChunk(looseSpaced[1]);
    }
  }

  return {
    meso: mesoRaw ? parseKoreanNumber(mesoRaw) : 0,
    exp: expRaw ? parseKoreanNumber(expRaw) : 0,
    duration: extractDuration(compact, spaced),
  };
}

/**
 * Optional legacy crop helper — not used by default (fixed % crop mis-cuts blog headers).
 */
export function cropHeaderRoi(
  source: HTMLCanvasElement | HTMLImageElement,
  opts?: { topRatio?: number; heightRatio?: number }
): HTMLCanvasElement {
  const topRatio = opts?.topRatio ?? 0;
  const heightRatio = opts?.heightRatio ?? 1;
  const sw =
    "naturalWidth" in source && source.naturalWidth
      ? source.naturalWidth
      : source.width;
  const sh =
    "naturalHeight" in source && source.naturalHeight
      ? source.naturalHeight
      : source.height;

  const sy = Math.floor(sh * topRatio);
  const shBand = Math.max(1, Math.floor(sh * heightRatio));
  const canvas = document.createElement("canvas");
  canvas.width = sw;
  canvas.height = shBand;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.drawImage(source, 0, sy, sw, shBand, 0, 0, sw, shBand);
  return canvas;
}

/**
 * Upscale with smooth interpolation, then grayscale + soft contrast.
 * Default 2× for full-screenshot OCR (no fixed ROI crop).
 */
export function binarizeCanvas(
  source: HTMLCanvasElement,
  scale = 2,
  contrast = 1.5
): HTMLCanvasElement {
  const out = document.createElement("canvas");
  out.width = Math.max(1, Math.floor(source.width * scale));
  out.height = Math.max(1, Math.floor(source.height * scale));
  const ctx = out.getContext("2d");
  if (!ctx) return out;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(source, 0, 0, out.width, out.height);

  const img = ctx.getImageData(0, 0, out.width, out.height);
  const d = img.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i];
    const g = d[i + 1];
    const b = d[i + 2];
    let gray = 0.299 * r + 0.587 * g + 0.114 * b;
    gray = ((gray / 255 - 0.5) * contrast + 0.5) * 255;
    gray = Math.max(0, Math.min(255, gray));
    d[i] = d[i + 1] = d[i + 2] = gray;
    d[i + 3] = 255;
  }

  ctx.putImageData(img, 0, 0);
  return out;
}

async function loadImageElement(
  input: File | Blob | string
): Promise<HTMLImageElement> {
  const url =
    typeof input === "string" ? input : URL.createObjectURL(input);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.crossOrigin = "anonymous";
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("Failed to load image for OCR"));
      el.src = url;
    });
    return img;
  } finally {
    if (typeof input !== "string") URL.revokeObjectURL(url);
  }
}

function imageToCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.drawImage(img, 0, 0);
  return canvas;
}

/**
 * Run KMS battle-stats OCR on a screenshot File/Blob/URL.
 * Full image → 2× grayscale/contrast → tesseract → keyword parse.
 * Browser-only (uses DOM Canvas + tesseract worker).
 */
export async function parseMapleScreenshot(
  input: File | Blob | string,
  onProgress?: (status: string, progress: number) => void
): Promise<MapleOcrResult> {
  if (typeof window === "undefined") {
    throw new Error("parseMapleScreenshot runs in the browser only");
  }

  const img = await loadImageElement(input);
  const full = imageToCanvas(img);
  // No fixed-% crop — screenshots vary (blog titles, margins, resolutions).
  const processed = binarizeCanvas(full, 2, 1.5);
  const previewDataUrl = processed.toDataURL("image/png");

  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("kor+eng", 1, {
    workerPath: tesseractUrl("/tesseract/worker.min.js"),
    corePath: tesseractUrl("/tesseract/tesseract-core-simd.wasm.js"),
    langPath: tesseractUrl("/tesseract/lang"),
    logger: (m) => {
      if (m.status && onProgress) {
        onProgress(String(m.status), Number(m.progress) || 0);
      }
    },
  });

  try {
    const { PSM } = await import("tesseract.js");
    await worker.setParameters({
      tessedit_pageseg_mode: PSM.AUTO,
    });
    const {
      data: { text, confidence },
    } = await worker.recognize(processed);

    const rawText = text ?? "";
    const parsed = parseBattleStatsText(rawText);

    return {
      ...parsed,
      rawText,
      confidence: Number(confidence) || 0,
      previewDataUrl,
    };
  } finally {
    await worker.terminate();
  }
}
