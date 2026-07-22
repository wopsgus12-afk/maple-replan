import Link from "next/link";
import { DonationAccountBox } from "./DonationAccountBox";
import { FOOTER_LEGAL_SNIPPET, LEGAL_LAST_UPDATED } from "@/lib/legalContent";

/** Legal links — site-wide footer (한 번만). */
export function GlobalFooter() {
  return (
    <footer className="mt-6 border-t border-maple-border/50 pt-4">
      <p className="mb-3 text-center text-[11px] leading-relaxed text-maple-muted">
        {FOOTER_LEGAL_SNIPPET}
      </p>
      <nav
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs"
        aria-label="법적 고지"
      >
        <Link
          href="/privacy/"
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          개인정보처리방침
        </Link>
        <span className="hidden text-maple-border sm:inline" aria-hidden>
          |
        </span>
        <Link
          href="/terms/"
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          이용약관
        </Link>
      </nav>
      <p className="mt-3 text-center text-[10px] text-maple-muted/80">
        © {new Date().getFullYear()} wopsgame · 비공식 팬 도구 · 법적 문서 최종 개정:{" "}
        {LEGAL_LAST_UPDATED}
      </p>
    </footer>
  );
}

/** Calculator page — 후원만 (약관 링크는 GlobalFooter에만). */
export function SettlementFooter() {
  return (
    <div className="mt-6">
      <DonationAccountBox />
    </div>
  );
}
