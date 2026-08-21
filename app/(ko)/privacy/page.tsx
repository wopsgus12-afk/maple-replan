import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import {
  LEGAL_EFFECTIVE_DATE,
  LEGAL_LAST_UPDATED,
  PRIVACY_SECTIONS,
} from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "개인정보처리방침 | GG-PASS",
  description:
    "GG-PASS 개인정보처리방침. Google AdSense·DART 쿠키, 맞춤 광고 거부 방법, Google Analytics, 쿠팡 파트너스 고지를 포함합니다.",
  alternates: sectionLanguageAlternates("ko", "/privacy"),
  openGraph: {
    title: "개인정보처리방침 | GG-PASS",
    url: `${SITE_URL}/privacy`,
    locale: "ko_KR",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell locale="ko">
      <LegalDocument
        title="개인정보처리방침"
        sections={PRIVACY_SECTIONS}
        effectiveDate={LEGAL_EFFECTIVE_DATE}
        lastUpdated={LEGAL_LAST_UPDATED}
      />
    </LegalPageShell>
  );
}
