"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { guidePath } from "@/lib/site";
import { parseMainTab } from "@/lib/appTab";

/**
 * Legacy SPA query (?tab=guides&article=slug) → real static routes.
 * No meta-refresh; client navigation only after mount.
 */
export function LegacyTabRedirect() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = parseMainTab(params.get("tab"));
    const article = params.get("article");
    const post = params.get("post");

    if (tab === "guides") {
      router.replace(article ? guidePath(article) : "/guide/");
      return;
    }
    if (tab === "brag") {
      router.replace(post ? `/community/?post=${encodeURIComponent(post)}` : "/community/");
      return;
    }
    if (tab === "tips") {
      router.replace(post ? `/tips/?post=${encodeURIComponent(post)}` : "/tips/");
      return;
    }
    if (tab === "feedback") {
      router.replace("/feedback/");
    }
  }, [router]);

  return null;
}
