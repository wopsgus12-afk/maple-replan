import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { CommunityBoardPage } from "@/components/CommunityBoardPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "자랑 게시판 | 메이플 재획 정산",
  description:
    "메이플 재획·사냥 성과와 인증샷을 공유하는 자랑 게시판. 익명으로 자유롭게 올려 보세요.",
  openGraph: {
    title: "자랑 게시판 | 메이플 재획 정산",
    description: "메이플 재획·사냥 성과와 인증샷을 공유하는 자랑 게시판.",
    url: `${SITE_URL}/community/`,
    siteName: "메이플 재획 정산",
    locale: "ko_KR",
    type: "website",
  },
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-6 sm:max-w-3xl">
        <CommunityBoardPage kind="brag" basePath="/community/" />
      </main>
      <div className="mx-auto max-w-2xl px-4 sm:max-w-3xl">
        <GlobalFooter />
      </div>
    </div>
  );
}
