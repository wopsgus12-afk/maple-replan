"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getEnGuideBySlug } from "@/lib/enSeoPosts";
import type { Locale } from "@/lib/locale";
import { guideIndexPath, guidePath } from "@/lib/locale";
import { parseMainTab } from "@/lib/appTab";
import { getGuideBySlug } from "@/lib/seoPosts";

type Props = {
  locale?: Locale;
};

/**
 * Legacy SPA query (?tab=guides&article=slug) → real static routes.
 * Unknown slugs go to the locale guide index instead of a 404.
 */
export function LegacyTabRedirect({ locale = "ko" }: Props) {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = parseMainTab(params.get("tab"));
    const article = params.get("article");
    const post = params.get("post");

    if (tab === "guides") {
      if (!article) {
        router.replace(guideIndexPath(locale));
        return;
      }
      const exists =
        locale === "en" ? getEnGuideBySlug(article) : getGuideBySlug(article);
      router.replace(
        exists ? guidePath(locale, article) : guideIndexPath(locale)
      );
      return;
    }
    if (tab === "brag") {
      router.replace(
        post ? `/community?post=${encodeURIComponent(post)}` : "/community"
      );
      return;
    }
    if (tab === "tips") {
      router.replace(post ? `/tips?post=${encodeURIComponent(post)}` : "/tips");
      return;
    }
    if (tab === "feedback") {
      router.replace("/feedback");
    }
  }, [locale, router]);

  return null;
}
