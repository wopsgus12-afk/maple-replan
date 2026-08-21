import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import {
  EN_PRIVACY_SECTIONS,
  LEGAL_EFFECTIVE_DATE_EN,
  LEGAL_LAST_UPDATED_EN,
} from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GG-PASS Privacy Policy: Google AdSense and DART cookies, how to opt out of personalized ads, Google Analytics, and Coupang Partners disclosures.",
  alternates: sectionLanguageAlternates("en", "/privacy"),
  openGraph: {
    title: "Privacy Policy | GG-PASS",
    url: `${SITE_URL}/en/privacy`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnPrivacyPage() {
  return (
    <LegalPageShell locale="en">
      <LegalDocument
        title="Privacy Policy"
        sections={EN_PRIVACY_SECTIONS}
        effectiveDate={LEGAL_EFFECTIVE_DATE_EN}
        lastUpdated={LEGAL_LAST_UPDATED_EN}
        dateLabels={{ effective: "Effective", updated: "Last updated" }}
      />
    </LegalPageShell>
  );
}
