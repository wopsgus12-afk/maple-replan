import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
import { SiteHeader } from "@/components/SiteHeader";
import {
  LEGAL_EFFECTIVE_DATE,
  LEGAL_LAST_UPDATED,
  PRIVACY_SECTIONS,
} from "@/lib/legalContent";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "개인정보처리방침 | 메이플 재획 정산",
  description:
    "메이플 재획 정산 도구의 개인정보처리방침. localStorage, 커뮤니티 게시글, 광고 쿠키, 이용자 권리 및 문의처를 안내합니다.",
};

export default function PrivacyPage() {
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
          <Link href="/terms/" className="text-xs text-maple-muted hover:text-maple-gold">
            이용약관
          </Link>
        </nav>
        <LegalDocument
          title="개인정보처리방침"
          sections={PRIVACY_SECTIONS}
          effectiveDate={LEGAL_EFFECTIVE_DATE}
          lastUpdated={LEGAL_LAST_UPDATED}
        />
      </main>
    </div>
  );
}
