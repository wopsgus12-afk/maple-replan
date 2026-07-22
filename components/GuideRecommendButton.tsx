"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/locale";
import {
  formatCount,
  hasRecommendedLocally,
  incrementGuideRecommend,
} from "@/lib/guideViews";
import { ui } from "@/lib/uiCopy";

type Props = {
  slug: string;
  initialCount?: number;
  locale?: Locale;
};

export function GuideRecommendButton({
  slug,
  initialCount = 0,
  locale = "ko",
}: Props) {
  const t = ui(locale);
  const [count, setCount] = useState(initialCount);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setDone(hasRecommendedLocally(slug));
  }, [slug]);

  const onRecommend = async () => {
    if (busy || done) return;
    setBusy(true);
    setMessage(null);
    try {
      const result = await incrementGuideRecommend(slug);
      setCount(result.count);
      setDone(true);
      setMessage(result.already ? t.recommendAlready : t.recommendThanks);
    } catch {
      setMessage(t.recommendFail);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <button
        type="button"
        onClick={() => void onRecommend()}
        disabled={busy || done}
        className={
          done
            ? "rounded-lg border border-maple-border bg-maple-panel/50 px-5 py-2.5 text-sm font-medium text-maple-muted"
            : "rounded-lg border border-maple-gold/60 bg-maple-gold/15 px-5 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/25 disabled:opacity-50"
        }
      >
        {done
          ? t.recommendDone(formatCount(count, locale))
          : t.recommendCta(formatCount(count, locale))}
      </button>
      {message && <p className="text-xs text-maple-muted">{message}</p>}
    </div>
  );
}
