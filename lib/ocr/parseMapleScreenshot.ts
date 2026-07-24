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
  /** Data-URL of the cropped/binarized image used for OCR (for lab preview). */
  previewDataUrl: string;
};

const TESSERACT_CDN = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist";

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
 * Parse Maple Korean amount strings into integers.
 * Examples:
 * - "1억 0898만" → 108980000
 * - "6647만 7498" → 66477498
 * - "122억 6451만" → 12264510000
 * - "17만 9845" → 179845
 * - "0" → 0
 */
export function parseKoreanNumber(raw: string): number {
  if (!raw) return 0;
  let s = correctOcrDigits(raw)
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Strip trailing noise like "(1초당)"
  s = s.replace(/\(.*?\)/g, "").trim();

  if (!s) return 0;
  if (/^\d+$/.test(s)) return Number(s);

  let total = 0;
  let matched = false;

  const jo = s.match(/(\d+)\s*조/);
  if (jo) {
    total += Number(jo[1]) * 1_000_000_000_000;
    matched = true;
  }

  const eok = s.match(/(\d+)\s*억/);
  if (eok) {
    total += Number(eok[1]) * 100_000_000;
    matched = true;
  }

  const man = s.match(/(\d+)\s*만/);
  if (man) {
    total += Number(man[1]) * 10_000;
    matched = true;
  }

  // Remainder after last unit, e.g. "6647만 7498" or "1억 0898만" (no remainder)
  const afterMan = s.match(/만\s*(\d+)\s*$/);
  if (afterMan) {
    total += Number(afterMan[1]);
    matched = true;
  } else if (!matched) {
    const digits = s.replace(/[^\d]/g, "");
    if (digits) return Number(digits);
  } else {
    // "1억 0898만" already handled; if leftover digits without 만 after 억
    const afterEok = s.match(/억\s*(\d+)(?!\s*만)/);
    if (afterEok && !man) {
      // treat as 만-scale padded? Maple usually writes 0898만. If bare digits after 억, treat as 만.
      const n = Number(afterEok[1]);
      total += n < 10000 ? n * 10_000 : n;
    }
  }

  return total;
}

function extractLabeledAmount(
  text: string,
  labelPatterns: RegExp[]
): string | null {
  const normalized = correctOcrDigits(text).replace(/\r/g, "\n");
  for (const label of labelPatterns) {
    const re = new RegExp(
      `${label.source}\\s*[:：]?\\s*([0-9OolIl|SsZzBb조억만,\\s]+)`,
      "i"
    );
    const m = normalized.match(re);
    if (m?.[1]) {
      // Stop before next Korean label-ish token
      const chunk = m[1]
        .split(/\n/)[0]
        .replace(/(평균|총합|몬스터|측정|스킬).*$/i, "")
        .trim();
      if (chunk) return chunk;
    }
  }
  return null;
}

function extractDuration(text: string): string {
  const normalized = correctOcrDigits(text);
  const labeled = normalized.match(
    /전투\s*시간\s*[:：]?\s*(\d{1,2}:\d{2}:\d{2})/
  );
  if (labeled?.[1]) {
    const parts = labeled[1].split(":").map((p) => p.padStart(2, "0"));
    return `${parts[0]}:${parts[1]}:${parts[2]}`;
  }
  const any = normalized.match(/\b(\d{2}:\d{2}:\d{2})\b/);
  return any?.[1] ?? "";
}

export function parseBattleStatsText(rawText: string): {
  meso: number;
  exp: number;
  duration: string;
} {
  // Prefer 획득 경험치 over 평균 경험치
  const mesoRaw = extractLabeledAmount(rawText, [
    /획득\s*메소/,
    /획[득등]\s*메소/,
    /메소/,
  ]);
  const expRaw = extractLabeledAmount(rawText, [
    /획득\s*경험치/,
    /EXP\s*획득\s*경험치/,
    /획[득등]\s*경험치/,
  ]);

  // If "평균 경험치" was accidentally grabbed via loose 메소 pattern, ignore when label is 평균
  let exp = 0;
  if (expRaw && !/평균/.test(expRaw)) {
    exp = parseKoreanNumber(expRaw);
  } else {
    // Fallback: line containing 획득 경험치
    const line = rawText
      .split(/\n/)
      .find((l) => /획득\s*경험치/.test(l) && !/평균/.test(l));
    if (line) {
      const after = line.replace(/.*?획득\s*경험치\s*/i, "");
      exp = parseKoreanNumber(after);
    }
  }

  return {
    meso: mesoRaw ? parseKoreanNumber(mesoRaw) : 0,
    exp,
    duration: extractDuration(rawText),
  };
}

/**
 * Crop top header band (battle time / meso / exp) by relative ratios.
 * Full window screenshots: top ~8–32%. Close-ups of the panel: top ~0–35%.
 */
export function cropHeaderRoi(
  source: HTMLCanvasElement | HTMLImageElement,
  opts?: { topRatio?: number; heightRatio?: number }
): HTMLCanvasElement {
  const topRatio = opts?.topRatio ?? 0.06;
  const heightRatio = opts?.heightRatio ?? 0.28;
  const sw =
    "naturalWidth" in source && source.naturalWidth
      ? source.naturalWidth
      : source.width;
  const sh =
    "naturalHeight" in source && source.naturalHeight
      ? source.naturalHeight
      : source.height;

  const sy = Math.floor(sh * topRatio);
  const shBand = Math.max(32, Math.floor(sh * heightRatio));
  const canvas = document.createElement("canvas");
  canvas.width = sw;
  canvas.height = shBand;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.drawImage(source, 0, sy, sw, shBand, 0, 0, sw, shBand);
  return canvas;
}

/** Upscale + grayscale + threshold for translucent Maple UI. */
export function binarizeCanvas(
  source: HTMLCanvasElement,
  scale = 2,
  threshold = 140
): HTMLCanvasElement {
  const out = document.createElement("canvas");
  out.width = Math.max(1, Math.floor(source.width * scale));
  out.height = Math.max(1, Math.floor(source.height * scale));
  const ctx = out.getContext("2d");
  if (!ctx) return out;

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(source, 0, 0, out.width, out.height);
  const img = ctx.getImageData(0, 0, out.width, out.height);
  const d = img.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i];
    const g = d[i + 1];
    const b = d[i + 2];
    // Emphasize yellow/white UI text over dark translucent bg
    const yellowBoost = Math.max(0, g - b) * 0.35 + Math.max(0, r - b) * 0.15;
    const lum = 0.299 * r + 0.587 * g + 0.114 * b + yellowBoost;
    const v = lum >= threshold ? 255 : 0;
    d[i] = d[i + 1] = d[i + 2] = v;
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
  const processed = binarizeCanvas(roi, 2.5, 135);
  const previewDataUrl = processed.toDataURL("image/png");

  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("kor+eng", 1, {
    workerPath: `${TESSERACT_CDN}/worker.min.js`,
    corePath: `${TESSERACT_CDN}/tesseract-core-simd.wasm.js`,
    langPath: "https://tessdata.projectnaptha.com/4.0.0",
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
