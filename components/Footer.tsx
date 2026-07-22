import Link from "next/link";
import { DonationAccountBox } from "./DonationAccountBox";
import { FOOTER_LEGAL_SNIPPET, LEGAL_LAST_UPDATED } from "@/lib/legalContent";
import type { Locale } from "@/lib/locale";
import { homePath, localizedPath } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

const EN_FOOTER_SNIPPET =
  "This site is an unofficial fan tool for Nexon MapleStory and is not affiliated with or endorsed by Nexon. Calculation results are for reference only.";

type FooterProps = {
  locale?: Locale;
};

/** Legal links — site-wide footer (once per page). */
export function GlobalFooter({ locale = "ko" }: FooterProps) {
  const t = ui(locale);
  const other: Locale = locale === "ko" ? "en" : "ko";

  return (
    <footer className="mt-6 border-t border-maple-border/50 pt-4">
      <p className="mb-3 text-center text-[11px] leading-relaxed text-maple-muted">
        {locale === "en" ? EN_FOOTER_SNIPPET : FOOTER_LEGAL_SNIPPET}
      </p>
      <nav
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs"
        aria-label={t.footerLegalAria}
      >
        <Link
          href={localizedPath(locale, "/privacy")}
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          {t.footerPrivacy}
        </Link>
        <span className="hidden text-maple-border sm:inline" aria-hidden>
          |
        </span>
        <Link
          href={localizedPath(locale, "/terms")}
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          {t.footerTerms}
        </Link>
        <span className="hidden text-maple-border sm:inline" aria-hidden>
          |
        </span>
        <Link
          href={homePath(other)}
          hrefLang={other}
          className="font-medium text-maple-gold underline-offset-2 hover:underline"
        >
          {t.langSwitchLabel}
        </Link>
      </nav>
      <p className="mt-3 text-center text-[10px] text-maple-muted/80">
        {t.footerCopyright(
          new Date().getFullYear(),
          locale === "en" ? "May 25, 2026" : LEGAL_LAST_UPDATED
        )}
      </p>
    </footer>
  );
}

/** Calculator page — donation only (legal links live in GlobalFooter). */
export function SettlementFooter() {
  return (
    <div className="mt-6">
      <DonationAccountBox />
    </div>
  );
}
