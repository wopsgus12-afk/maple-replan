"use client";

import { useEffect } from "react";
import { incrementGuideView } from "@/lib/guideViews";

type Props = {
  slug: string;
};

/** Counts a page view once per browser session per slug. */
export function GuideViewTracker({ slug }: Props) {
  useEffect(() => {
    try {
      const key = `maple-guide-viewed:${slug}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      /* private mode */
    }
    void incrementGuideView(slug);
  }, [slug]);

  return null;
}
