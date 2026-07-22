import type { Metadata } from "next";
import Link from "next/link";
import { GuideListPaginated } from "@/components/GuideListPaginated";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "재획 가이드 목록 | 메이플 재획 정산",
  description:
    "메이플스토리 재획·사냥터·메소 효율 고품질 가이드 전체 목록. 그란디스·오디움·도원경·아르테리아·카르시온 실전 정산 정보.",
  alternates: sectionLanguageAlternates("ko", "/guide/"),
  openGraph: {
    title: "재획 가이드 목록 | 메이플 재획 정산",
    description:
      "메이플스토리 재획·사냥터·메소 효율 고품질 가이드 전체 목록.",
    url: `${SITE_URL}/guide/`,
    siteName: "메이플 재획 정산",
    locale: "ko_KR",
    type: "website",
  },
};

export default function GuideIndexPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader locale="ko" />
      <main className="mx-auto max-w-2xl px-4 py-6 sm:max-w-3xl">
        <h1 className="mb-2 text-2xl font-bold text-maple-gold sm:text-3xl">
          재획 가이드
        </h1>
        <p className="mb-2 text-sm text-maple-muted">
          제목을 누르면 본문으로 이동합니다. 페이지당 10개씩 표시됩니다.
        </p>
        <GuideListPaginated locale="ko" />
        <p className="mt-8 text-center text-xs text-maple-muted">
          <Link href="/" className="hover:text-maple-gold hover:underline">
            ← 재획 정산기로 돌아가기
          </Link>
        </p>
      </main>
      <div className="mx-auto max-w-2xl px-4 sm:max-w-3xl">
        <GlobalFooter locale="ko" />
      </div>
    </div>
  );
}
