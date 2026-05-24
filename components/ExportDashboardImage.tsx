"use client";

import { useState, type RefObject } from "react";
import html2canvas from "html2canvas";

type Props = {
  targetRef: RefObject<HTMLElement | null>;
  variant?: "inline" | "block";
};

export function ExportDashboardImage({ targetRef, variant = "block" }: Props) {
  const [busy, setBusy] = useState(false);

  const handleExport = async () => {
    const el = targetRef.current;
    if (!el || busy) return;

    setBusy(true);
    try {
      const canvas = await html2canvas(el, {
        backgroundColor: "#0d0f14",
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = "메이플_재획_총정산.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setBusy(false);
    }
  };

  const label = busy ? "생성 중…" : "인증샷 저장";

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleExport}
        disabled={busy}
        title="[정산 결과 이미지로 저장 (인증샷)]"
        className="shrink-0 rounded border border-maple-gold/50 bg-maple-gold/10 px-2 py-1 text-[10px] font-medium text-maple-gold hover:bg-maple-gold/20 disabled:opacity-60"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={busy}
      className="w-full rounded-lg border border-maple-gold/50 bg-maple-gold/10 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/20 disabled:opacity-60"
    >
      {busy ? "이미지 생성 중…" : "[정산 결과 이미지로 저장 (인증샷)]"}
    </button>
  );
}
