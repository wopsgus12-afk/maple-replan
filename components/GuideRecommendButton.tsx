"use client";

import { useEffect, useState } from "react";
import {
  formatCount,
  hasRecommendedLocally,
  incrementGuideRecommend,
} from "@/lib/guideViews";

type Props = {
  slug: string;
  initialCount?: number;
};

export function GuideRecommendButton({ slug, initialCount = 0 }: Props) {
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
      setMessage(result.already ? "이미 추천한 글입니다." : "추천해 주셔서 감사합니다!");
    } catch {
      setMessage("추천 처리에 실패했습니다. 잠시 후 다시 시도해 주세요.");
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
        {done ? `추천 완료 · ${formatCount(count)}` : `추천하기 · ${formatCount(count)}`}
      </button>
      {message && <p className="text-xs text-maple-muted">{message}</p>}
    </div>
  );
}
