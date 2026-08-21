import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import type { Locale } from "@/lib/locale";
import { homePath, localizedPath } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

const LEGAL_LINKS = [
  { path: "/privacy", ko: "개인정보처리방침", en: "Privacy" },
  { path: "/terms", ko: "이용약관", en: "Terms" },
  { path: "/about", ko: "사이트 소개", en: "About" },
  { path: "/contact", ko: "문의하기", en: "Contact" },
] as const;

type Props = {
  locale: Locale;
  children: ReactNode;
};

export function LegalPageShell({ locale, children }: Props) {
  const t = ui(locale);
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader locale={locale} />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <nav className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-maple-muted">
          <Link
            href={homePath(locale)}
            className="hover:text-maple-gold hover:underline"
          >
            {locale === "en" ? "← Home" : "← 메인으로"}
          </Link>
          {LEGAL_LINKS.map((item) => (
            <span key={item.path} className="inline-flex items-center gap-3">
              <span className="text-maple-border" aria-hidden>
                |
              </span>
              <Link
                href={localizedPath(locale, item.path)}
                className="hover:text-maple-gold hover:underline"
              >
                {locale === "en" ? item.en : item.ko}
              </Link>
            </span>
          ))}
        </nav>
        {children}
      </main>
      <div className="mx-auto max-w-2xl px-4">
        <GlobalFooter locale={locale} />
      </div>
      <p className="sr-only">{t.footerLegalAria}</p>
    </div>
  );
}
