import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { sectionLanguageAlternates } from "@/lib/hreflang";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Maple Meso Calculator (English summary page).",
  alternates: sectionLanguageAlternates("en", "/privacy"),
  openGraph: {
    title: "Privacy Policy",
    url: `${SITE_URL}/en/privacy`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnPrivacyPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader locale="en" />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-bold text-maple-gold">Privacy Policy</h1>
        <p className="mb-4 text-sm leading-relaxed text-maple-muted">
          An English privacy policy page will be published here. Until then, the
          binding Korean privacy policy applies to all visitors:
        </p>
        <p>
          <Link
            href="/privacy"
            hrefLang="ko"
            className="text-maple-gold underline-offset-2 hover:underline"
          >
            View Korean Privacy Policy →
          </Link>
        </p>
      </main>
      <div className="mx-auto max-w-2xl px-4">
        <GlobalFooter locale="en" />
      </div>
    </div>
  );
}
