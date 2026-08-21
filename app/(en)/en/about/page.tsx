import type { Metadata } from "next";
import { AboutTrustStrip } from "@/components/AboutTrustStrip";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import { EN_ABOUT_SECTIONS } from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "About GG-PASS",
  description:
    "GG-PASS publishes field-tested MapleStory 2-hour WAP wages and fragment yields, plus a net hourly meso calculator for gamers.",
  alternates: sectionLanguageAlternates("en", "/about"),
  openGraph: {
    title: "About GG-PASS",
    url: `${SITE_URL}/en/about`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnAboutPage() {
  return (
    <LegalPageShell locale="en">
      <AboutTrustStrip
        kicker="Gamer productivity · MapleStory WAP data"
        items={[
          { label: "Field data", value: "2-hour WAP wages & fragments" },
          { label: "Net profit", value: "1% AH fee + potion costs" },
          { label: "Trust", value: "Under-Force & 1-KO leak losses" },
        ]}
      />
      <LegalDocument title="About GG-PASS" sections={EN_ABOUT_SECTIONS} />
    </LegalPageShell>
  );
}
