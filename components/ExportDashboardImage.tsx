"use client";

import { useState, type RefObject } from "react";
import html2canvas from "html2canvas";
import type { Locale } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

type Props = {
  targetRef: RefObject<HTMLElement | null>;
  variant?: "inline" | "block";
  locale?: Locale;
};

export function ExportDashboardImage({
  targetRef,
  variant = "block",
  locale = "ko",
}: Props) {
  const [busy, setBusy] = useState(false);
  const t = ui(locale);

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
      link.download = t.exportFilename;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setBusy(false);
    }
  };

  const label = busy ? t.exportInlineBusy : t.exportInlineIdle;

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleExport}
        disabled={busy}
        title={t.exportSaveResult}
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
      {busy ? t.exportBusy : t.exportSaveResult}
    </button>
  );
}
