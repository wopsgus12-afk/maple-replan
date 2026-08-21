import type { Metadata } from "next";
import { ContactCards } from "@/components/ContactCards";
import { LegalPageShell } from "@/components/LegalPageShell";
import { EN_CONTACT_CARDS, EN_CONTACT_INTRO } from "@/lib/legalContent";
import { sectionLanguageAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GG-PASS for calculator feedback, hunting-guide data corrections, and business inquiries.",
  alternates: sectionLanguageAlternates("en", "/contact"),
  openGraph: {
    title: "Contact Us | GG-PASS",
    url: `${SITE_URL}/en/contact`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnContactPage() {
  return (
    <LegalPageShell locale="en">
      <article>
        <h1 className="mb-6 text-2xl font-bold text-maple-gold">Contact Us</h1>
        <ContactCards
          intro={EN_CONTACT_INTRO}
          cards={EN_CONTACT_CARDS}
          emailLabel="Official contact email"
        />
      </article>
    </LegalPageShell>
  );
}
