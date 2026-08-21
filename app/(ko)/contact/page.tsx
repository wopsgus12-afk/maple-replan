import type { Metadata } from "next";
import { ContactCards } from "@/components/ContactCards";
import { LegalPageShell } from "@/components/LegalPageShell";
import { CONTACT_CARDS, CONTACT_INTRO } from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "문의하기 | GG-PASS",
  description:
    "GG-PASS 피드백, 가이드 데이터 오류 제보, 비즈니스 문의. 운영자 이메일로 접수합니다.",
  alternates: sectionLanguageAlternates("ko", "/contact"),
  openGraph: {
    title: "문의하기 | GG-PASS",
    url: `${SITE_URL}/contact`,
    locale: "ko_KR",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <LegalPageShell locale="ko">
      <article>
        <h1 className="mb-6 text-2xl font-bold text-maple-gold">문의하기</h1>
        <ContactCards
          intro={CONTACT_INTRO}
          cards={CONTACT_CARDS}
          emailLabel="공식 문의 이메일"
        />
      </article>
    </LegalPageShell>
  );
}
