import type { Metadata } from "next";
import { ReplanApp } from "@/components/ReplanApp";
import { SiteHeader } from "@/components/SiteHeader";
import { localeHomeAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Maple Meso Calculator",
  description:
    "Unofficial MapleStory 2-hour hunt wage and meso settlement calculator for English players.",
  alternates: localeHomeAlternates("en"),
  openGraph: {
    title: "Maple Meso Calculator",
    description:
      "Unofficial MapleStory meso calculator and hunting settlement tool.",
    url: `${SITE_URL}/en`,
    siteName: "Maple Meso Calculator",
    locale: "en_US",
    type: "website",
  },
};

export default function EnHomePage() {
  return (
    <>
      <SiteHeader locale="en" />
      <ReplanApp locale="en" />
    </>
  );
}
