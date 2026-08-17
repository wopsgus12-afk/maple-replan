"use client";

import { SITE_URL } from "@/lib/site";

const LINKS = [
  {
    href: `${SITE_URL}/guide`,
    label: "최신 사냥터 시급 정산표 보러가기",
  },
  {
    href: `${SITE_URL}/guide`,
    label: "공식 가이드 보기",
  },
] as const;

function openInBrowser(url: string) {
  if (typeof window === "undefined") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Overlay: no ads — drive traffic to web guides in the system browser. */
export function OverlayGuideLinks() {
  return (
    <div
      className="electron-no-drag flex shrink-0 flex-col gap-0.5 px-0.5 pb-0.5"
      role="navigation"
      aria-label="웹 가이드 바로가기"
    >
      {LINKS.map((link) => (
        <button
          key={link.label}
          type="button"
          onClick={() => openInBrowser(link.href)}
          className="w-full truncate rounded border border-maple-gold/40 bg-maple-gold/10 px-1.5 py-0.5 text-[9px] font-medium leading-tight text-maple-gold hover:bg-maple-gold/20"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
