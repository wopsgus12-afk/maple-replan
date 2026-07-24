/**
 * MapleStory KMS Battle Statistics (전투분석시스템) OCR helpers.
 * Stage 1: header ROI crop + preprocess + parse duration/meso/exp.
 */

export type MapleOcrResult = {
  meso: number;
  exp: number;
  duration: string;
  rawText: string;
  confidence: number;
  /** Data-URL of the cropped/preprocessed ROI used for OCR (for lab preview). */
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
  // Phrase-level OCR absorb (before single-char fixes)
  s = s.replace(/건투|전두/g, "전투");
  s = s.replace(/매스|배초|배소|메초/g, "메소");
  s = s.replace(/걸험치|걸치/g, "경험치");
  s = s.replace(/익/g, "억");
  // Residual glyph confusions that still form 경험치 fragments
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

  // Strip trailing noise like "(1초당)"
  s = s.replace(/\(.*?\)/g, "").trim();
  if (!s) return 0;

  // Glue broken digit runs and spaces around 조/억/만:
  // "61 억 8 5 2 9 만" → "61억8529만"
  s = s.replace(/\s+/g, " ").trim();
  s = s.replace(/\s*([조억만])\s*/g, "$1");
  s = s.replace(/(\d)\s+(\d)/g, "$1$2");
  while (/(\d)\s+(\d)/.test(s)) {
    s = s.replace(/(\d)\s+(\d)/g, "$1$2");
  }
  s = s.replace(/\s+/g, "");

  if (/^\d+$/.test(s)) return Number(s);

  // Preferred: N억 M만 [R]
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

  // Remainder after 만, e.g. "6647만7498"
  const afterMan = s.match(/만(\d+)$/);
  if (afterMan) {
    total += Number(afterMan[1]);
    matched = true;
  } else if (!matched) {
    const digits = s.replace(/[^\d]/g, "");
    if (digits) return Number(digits);
  } else if (eok && !man) {
    // Digits after 억 without 만 → treat as 만-scale when < 10000
    const afterEok = s.match(/억(\d+)$/);
    if (afterEok) {
      const n = Number(afterEok[1]);
      total += n < 10000 ? n * 10_000 : n;
    }
  }

  return total;
}

/** Amount chars after a label (spaces already stripped by normalizeOcrText). */
const AMOUNT_CHARS = "[0-9OolIl|SsZzBb조억만,]+";

function extractLabeledAmount(
  text: string,
  labelPatterns: RegExp[]
): string | null {
  for (const label of labelPatterns) {
    const re = new RegExp(`${label.source}[:：]?(${AMOUNT_CHARS})`, "i");
    const m = text.match(re);
    if (m?.[1]) {
      const chunk = m[1].replace(/(평균|총합|몬스터|측정|스킬|획득).*$/i, "");
      if (chunk) return chunk;
    }
  }
  return null;
}

function extractDuration(text: string): string {
  const labeled = text.match(/전투시간[:：]?(\d{1,2}:\d{2}:\d{2})/);
  if (labeled?.[1]) {
    const parts = labeled[1].split(":").map((p) => p.padStart(2, "0"));
    return `${parts[0]}:${parts[1]}:${parts[2]}`;
  }
  const any = text.match(/(\d{2}:\d{2}:\d{2})/);
  return any?.[1] ?? "";
}

export function parseBattleStatsText(rawText: string): {
  meso: number;
  exp: number;
  duration: string;
} {
  const text = normalizeOcrText(rawText);

  // 획득메소 / 메소 뒤의 억·만 숫자
  const mesoRaw = extractLabeledAmount(text, [/획득메소/, /메소/]);

  // 획득경험치 우선, 없으면 평균이 아닌 경험치
  let expRaw = extractLabeledAmount(text, [/획득경험치/, /EXP획득경험치/]);
  if (!expRaw) {
    const loose = text.match(/(?<!평균)경험치[:：]?([0-9OolIl|SsZzBb조억만,]+)/i);
    if (loose?.[1]) {
      expRaw = loose[1].replace(/(평균|총합|몬스터|측정|스킬|획득).*$/i, "");
    }
  }

  return {
    meso: mesoRaw ? parseKoreanNumber(mesoRaw) : 0,
    exp: expRaw ? parseKoreanNumber(expRaw) : 0,
    duration: extractDuration(text),
  };
}

/**
 * Crop only the top header band: battle time / meso / exp.
 * Tight ~16% height so skill-bar UI below is excluded.
 */
export function cropHeaderRoi(
  source: HTMLCanvasElement | HTMLImageElement,
  opts?: { topRatio?: number; heightRatio?: number }
): HTMLCanvasElement {
  const topRatio = opts?.topRatio ?? 0.02;
  const heightRatio = opts?.heightRatio ?? 0.16;
  const sw =
    "naturalWidth" in source && source.naturalWidth
      ? source.naturalWidth
      : source.width;
  const sh =
    "naturalHeight" in source && source.naturalHeight
      ? source.naturalHeight
      : source.height;

  const sy = Math.floor(sh * topRatio);
  const shBand = Math.max(24, Math.floor(sh * heightRatio));
  const canvas = document.createElement("canvas");
  canvas.width = sw;
  canvas.height = shBand;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.drawImage(source, 0, sy, sw, shBand, 0, 0, sw, shBand);
  return canvas;
}

/**
 * Upscale ROI 2.5× with smooth interpolation, then grayscale + soft contrast.
 * Hard thresholding is avoided — it destroys small Maple UI glyphs.
 */
export function binarizeCanvas(
  source: HTMLCanvasElement,
  scale = 2.5,
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
  const roi = cropHeaderRoi(full);
  const processed = binarizeCanvas(roi, 2.5, 1.5);
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
      tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
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
