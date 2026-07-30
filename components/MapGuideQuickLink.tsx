"use client";

import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { resolveMapGuideLink } from "@/lib/mapGuideMap";

type Props = {
  groundId: string;
  locale?: Locale;
};

/** Subtle guide shortcut shown directly under the map selector. */
export function MapGuideQuickLink({ groundId, locale = "ko" }: Props) {
  const guide = resolveMapGuideLink(groundId, locale);
  if (!guide) return null;

  const label =
    locale === "en"
      ? `📖 Read ${guide.regionLabel} Hunting Guide →`
      : `📖 ${guide.regionLabel} 핵심 세부 맵 분석 가이드 보러가기 →`;

  return (
    <p className="mt-1.5">
      <Link
        href={guide.href}
        className="inline-flex max-w-full items-center text-[11px] leading-snug text-maple-muted transition-colors hover:text-maple-gold hover:underline"
        title={guide.guideTitle}
      >
        <span className="truncate">{label}</span>
      </Link>
    </p>
  );
}
