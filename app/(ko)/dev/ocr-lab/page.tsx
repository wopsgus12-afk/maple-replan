"use client";

import { useCallback, useState } from "react";
import {
  parseKoreanNumber,
  parseMapleScreenshot,
  type MapleOcrResult,
} from "@/lib/ocr/parseMapleScreenshot";

const SAMPLES = [
  { id: "kms-01", src: "/dev/ocr-samples/kms-01.png", label: "Sample 1" },
  { id: "kms-02", src: "/dev/ocr-samples/kms-02.png", label: "Sample 2" },
  { id: "kms-03", src: "/dev/ocr-samples/kms-03.png", label: "Sample 3" },
  { id: "kms-04", src: "/dev/ocr-samples/kms-04.png", label: "Sample 4" },
  { id: "kms-05", src: "/dev/ocr-samples/kms-05.png", label: "Sample 5" },
] as const;

function formatNum(n: number): string {
  return Math.round(n).toLocaleString("ko-KR");
}

export default function OcrLabPage() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MapleOcrResult | null>(null);
  const [unitTest, setUnitTest] = useState("");

  const run = useCallback(async (input: File | string) => {
    setBusy(true);
    setError(null);
    setResult(null);
    setStatus("starting");
    setProgress(0);
    try {
      const out = await parseMapleScreenshot(input, (s, p) => {
        setStatus(s);
        setProgress(p);
      });
      setResult(out);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
      setStatus("");
      setProgress(0);
    }
  }, []);

  const onFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (file) void run(file);
  };

  return (
    <div className="min-h-screen bg-maple-bg px-4 py-8 text-gray-100">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-1 border-b border-maple-border/50 pb-4">
          <p className="text-xs font-medium text-maple-muted">DEV ONLY · noindex</p>
          <h1 className="text-2xl font-bold text-maple-gold">OCR Lab — KMS Battle Stats</h1>
          <p className="text-sm text-maple-muted">
            Full-image 2× upscale + soft contrast + tesseract (kor+eng), keyword scan (no fixed %
            crop). Main calculator is not connected.
          </p>
        </header>

        <section
          className="rounded-xl border border-dashed border-maple-gold/50 bg-maple-panel/40 p-6 text-center"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            onFiles(e.dataTransfer.files);
          }}
        >
          <p className="mb-3 text-sm text-maple-muted">
            Drop a 전투분석시스템 screenshot here, or choose a file.
          </p>
          <input
            type="file"
            accept="image/*"
            disabled={busy}
            onChange={(e) => onFiles(e.target.files)}
            className="mx-auto block w-full max-w-sm text-sm text-maple-muted file:mr-3 file:rounded file:border-0 file:bg-maple-gold/20 file:px-3 file:py-1.5 file:text-maple-gold"
          />
          {busy && (
            <p className="mt-3 text-xs text-maple-gold">
              {status || "working…"} {progress > 0 ? `(${Math.round(progress * 100)}%)` : ""}
            </p>
          )}
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold text-maple-accent">Bundled samples</h2>
          <div className="flex flex-wrap gap-2">
            {SAMPLES.map((s) => (
              <button
                key={s.id}
                type="button"
                disabled={busy}
                onClick={() => void run(s.src)}
                className="rounded border border-maple-border px-3 py-1.5 text-xs text-maple-muted hover:border-maple-gold/50 hover:text-maple-gold disabled:opacity-40"
              >
                {s.label}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-maple-border/60 bg-maple-panel/30 p-4">
          <h2 className="mb-2 text-sm font-semibold text-maple-accent">
            parseKoreanNumber smoke test
          </h2>
          <div className="flex flex-wrap gap-2">
            <input
              value={unitTest}
              onChange={(e) => setUnitTest(e.target.value)}
              placeholder="예: 1억 0898만"
              className="min-w-[12rem] flex-1 rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm"
            />
            <p className="self-center text-sm tabular-nums text-maple-gold">
              → {formatNum(parseKoreanNumber(unitTest || "0"))}
            </p>
          </div>
          <ul className="mt-2 space-y-0.5 text-[11px] text-maple-muted">
            <li>1억 0898만 → {formatNum(parseKoreanNumber("1억 0898만"))}</li>
            <li>6647만 7498 → {formatNum(parseKoreanNumber("6647만 7498"))}</li>
            <li>122억 6451만 → {formatNum(parseKoreanNumber("122억 6451만"))}</li>
          </ul>
        </section>

        {error && (
          <p className="rounded border border-red-800/60 bg-red-950/30 px-3 py-2 text-sm text-red-200">
            {error}
          </p>
        )}

        {result && (
          <section className="space-y-4">
            <div className="rounded-lg border border-maple-border bg-maple-panel/50 p-4">
              <h2 className="mb-3 text-sm font-semibold text-maple-gold">Parsed result</h2>
              <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                <div>
                  <dt className="text-xs text-maple-muted">duration</dt>
                  <dd className="font-mono text-maple-accent">{result.duration || "—"}</dd>
                </div>
                <div>
                  <dt className="text-xs text-maple-muted">meso</dt>
                  <dd className="font-mono text-maple-accent">{formatNum(result.meso)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-maple-muted">exp (absolute)</dt>
                  <dd className="font-mono text-maple-accent">{formatNum(result.exp)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-maple-muted">confidence</dt>
                  <dd className="font-mono text-maple-accent">
                    {result.confidence.toFixed(1)}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-maple-accent">
                Preprocessed preview (full image)
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result.previewDataUrl}
                alt="OCR preprocess preview"
                className="max-h-64 w-full rounded border border-maple-border bg-black object-contain"
              />
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-maple-accent">rawText</h2>
              <pre className="max-h-80 overflow-auto rounded border border-maple-border bg-black/50 p-3 text-xs leading-relaxed text-maple-muted whitespace-pre-wrap">
                {result.rawText || "(empty)"}
              </pre>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
