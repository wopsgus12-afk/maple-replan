import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
import { SiteHeader } from "@/components/SiteHeader";
import {
  LEGAL_EFFECTIVE_DATE,
  LEGAL_LAST_UPDATED,
  TERMS_SECTIONS,
} from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "이용약관 | 메이플 재획 정산",
  description:
    "메이플 재획 정산 계산기 이용약관. 참고용 도구, 계산 면책, 넥슨 비공식 면책, 광고·준거법 조항을 안내합니다.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <nav className="mb-6 flex flex-wrap items-center gap-3">
          <Link href="/" className="text-xs text-maple-muted hover:text-maple-gold">
            ← 메인으로
          </Link>
          <span className="text-maple-border" aria-hidden>
            |
          </span>
          <Link href="/privacy/" className="text-xs text-maple-muted hover:text-maple-gold">
            개인정보처리방침
          </Link>
        </nav>
        <LegalDocument
          title="이용약관"
          sections={TERMS_SECTIONS}
          effectiveDate={LEGAL_EFFECTIVE_DATE}
          lastUpdated={LEGAL_LAST_UPDATED}
        />
      </main>
    </div>
  );
}
