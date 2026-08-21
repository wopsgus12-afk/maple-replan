import type { Metadata } from "next";
import { AboutTrustStrip } from "@/components/AboutTrustStrip";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import { ABOUT_SECTIONS } from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "사이트 소개 | GG-PASS",
  description:
    "GG-PASS는 메이플스토리 1재획 시급·조각 수익 실측 데이터와 실질 순수익 계산기를 제공하는 게이머 생산성 플랫폼입니다.",
  alternates: sectionLanguageAlternates("ko", "/about"),
  openGraph: {
    title: "사이트 소개 | GG-PASS",
    url: `${SITE_URL}/about`,
    locale: "ko_KR",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <LegalPageShell locale="ko">
      <AboutTrustStrip
        kicker="Gamer productivity · MapleStory WAP data"
        items={[
          { label: "실측", value: "1재획 2시간 시급·조각 수익" },
          { label: "정산", value: "경매장 1% · 소모품 순수익" },
          { label: "신뢰", value: "포스 미달·원킬 삑 손실 공개" },
        ]}
      />
      <LegalDocument title="사이트 소개" sections={ABOUT_SECTIONS} />
    </LegalPageShell>
  );
}
