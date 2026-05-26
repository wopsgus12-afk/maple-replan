"use client";

import { useEffect } from "react";
import { buildAppPath } from "@/lib/appTab";

type Props = {
  slug: string;
};

/** 북마크·외부 링크 `/maple/guide/[slug]` → 메인 앱 가이드 탭으로 통합 */
export function GuideSlugRedirect({ slug }: Props) {
  useEffect(() => {
    window.location.replace(buildAppPath({ tab: "guides", article: slug }));
  }, [slug]);

  return (
    <p className="px-4 py-8 text-center text-sm text-maple-muted">가이드로 이동 중…</p>
  );
}
