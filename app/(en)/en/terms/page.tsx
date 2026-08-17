import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { sectionLanguageAlternates } from "@/lib/hreflang";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Maple Meso Calculator (English summary page).",
  alternates: sectionLanguageAlternates("en", "/terms"),
  openGraph: {
    title: "Terms of Use",
    url: `${SITE_URL}/en/terms`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnTermsPage() {
  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader locale="en" />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-bold text-maple-gold">Terms of Use</h1>
        <p className="mb-4 text-sm leading-relaxed text-maple-muted">
          An English terms page will be published here. Until then, the binding
          Korean terms of use apply to all visitors:
        </p>
        <p>
          <Link
            href="/terms"
            hrefLang="ko"
            className="text-maple-gold underline-offset-2 hover:underline"
          >
            View Korean Terms of Use →
          </Link>
        </p>
      </main>
      <div className="mx-auto max-w-2xl px-4">
        <GlobalFooter locale="en" />
      </div>
    </div>
  );
}
