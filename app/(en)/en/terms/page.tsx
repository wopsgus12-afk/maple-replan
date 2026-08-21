import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import {
  EN_TERMS_SECTIONS,
  LEGAL_EFFECTIVE_DATE_EN,
  LEGAL_LAST_UPDATED_EN,
} from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "GG-PASS Terms of Service for the MapleStory meso/WAP calculator. In-game price volatility, calculation error ranges, and unofficial-fan-tool disclaimer.",
  alternates: sectionLanguageAlternates("en", "/terms"),
  openGraph: {
    title: "Terms of Service | GG-PASS",
    url: `${SITE_URL}/en/terms`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnTermsPage() {
  return (
    <LegalPageShell locale="en">
      <LegalDocument
        title="Terms of Service"
        sections={EN_TERMS_SECTIONS}
        effectiveDate={LEGAL_EFFECTIVE_DATE_EN}
        lastUpdated={LEGAL_LAST_UPDATED_EN}
        dateLabels={{ effective: "Effective", updated: "Last updated" }}
      />
    </LegalPageShell>
  );
}
