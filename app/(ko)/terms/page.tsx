import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import {
  LEGAL_EFFECTIVE_DATE,
  LEGAL_LAST_UPDATED,
  TERMS_SECTIONS,
} from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "이용약관 | GG-PASS",
  description:
    "GG-PASS 메이플스토리 시급·수익 계산기 이용약관. 인게임 시세 변동, 계산 오차 범위, 넥슨 비공식 면책을 안내합니다.",
  alternates: sectionLanguageAlternates("ko", "/terms"),
  openGraph: {
    title: "이용약관 | GG-PASS",
    url: `${SITE_URL}/terms`,
    locale: "ko_KR",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <LegalPageShell locale="ko">
      <LegalDocument
        title="이용약관"
        sections={TERMS_SECTIONS}
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        lastUpdated={LEGAL_LAST_UPDATED}
      />
    </LegalPageShell>
  );
}
