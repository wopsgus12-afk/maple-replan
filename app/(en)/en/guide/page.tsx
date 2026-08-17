import type { Metadata } from "next";
import Link from "next/link";
import { GuideListPaginated } from "@/components/GuideListPaginated";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { EN_GUIDE_POSTS } from "@/lib/enSeoPosts";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";
import { ui } from "@/lib/uiCopy";

export const dynamic = "force-static";
export const revalidate = false;

const t = ui("en");

export const metadata: Metadata = {
  title: "Hunting & Meso Guides",
  description:
    "English MapleStory hunting, meso farming, and settlement guides for GMS and overseas players.",
  alternates: sectionLanguageAlternates("en", "/guide"),
  openGraph: {
    title: "Hunting & Meso Guides | Maple Meso Calculator",
    description:
      "English MapleStory hunting and meso farming guides.",
    url: `${SITE_URL}/en/guide`,
    siteName: "Maple Meso Calculator",
    locale: "en_US",
    type: "website",
  },
};

export default function EnGuideIndexPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader locale="en" />
      <main className="mx-auto max-w-2xl px-4 py-6 sm:max-w-3xl">
        <h1 className="mb-2 text-2xl font-bold text-maple-gold sm:text-3xl">
          {t.guideIndexTitle}
        </h1>
        <p className="mb-2 text-sm text-maple-muted">{t.guideIndexBlurb}</p>
        <GuideListPaginated locale="en" posts={EN_GUIDE_POSTS} />
        <p className="mt-8 text-center text-xs text-maple-muted">
          <Link href="/en" className="hover:text-maple-gold hover:underline">
            {t.guideBackHome}
          </Link>
        </p>
      </main>
      <div className="mx-auto max-w-2xl px-4 sm:max-w-3xl">
        <GlobalFooter locale="en" />
      </div>
    </div>
  );
}
