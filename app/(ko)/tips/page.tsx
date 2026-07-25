import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { CommunityBoardPage } from "@/components/CommunityBoardPage";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "유저 팁 게시판 | 메이플 재획 정산",
  description:
    "메이플 사냥터 빌드·루트·효율 팁을 유저들이 공유하는 게시판입니다.",
  openGraph: {
    title: "유저 팁 게시판 | 메이플 재획 정산",
    description: "메이플 사냥터 빌드·루트·효율 팁을 유저들이 공유하는 게시판.",
    url: `${SITE_URL}/tips/`,
    siteName: "메이플 재획 정산",
    locale: "ko_KR",
    type: "website",
  },
};

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-6 sm:max-w-3xl">
        <CommunityBoardPage kind="tips" basePath="/tips/" />
      </main>
      <div className="mx-auto max-w-2xl px-4 sm:max-w-3xl">
        <GlobalFooter />
      </div>
    </div>
  );
}
