import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { FeedbackForm } from "@/components/FeedbackForm";
import { ToastProvider } from "@/components/Toast";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "개발자에게 한마디 | 메이플 재획 정산",
  description: "메이플 재획 정산 도구에 대한 의견·버그·요청을 남겨 주세요.",
  openGraph: {
    title: "개발자에게 한마디 | 메이플 재획 정산",
    description: "메이플 재획 정산 도구에 대한 의견·버그·요청을 남겨 주세요.",
    url: `${SITE_URL}/feedback/`,
    siteName: "메이플 재획 정산",
    locale: "ko_KR",
    type: "website",
  },
};

export default function FeedbackPage() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-maple-bg pb-8">
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-4 py-6 sm:max-w-3xl">
          <FeedbackForm />
        </main>
        <div className="mx-auto max-w-2xl px-4 sm:max-w-3xl">
          <GlobalFooter />
        </div>
      </div>
    </ToastProvider>
  );
}
