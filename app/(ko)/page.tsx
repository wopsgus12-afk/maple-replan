import type { Metadata } from "next";
import { ReplanApp } from "@/components/ReplanApp";
import { SiteHeader } from "@/components/SiteHeader";
import { localeHomeAlternates } from "@/lib/hreflang";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: localeHomeAlternates("ko"),
  openGraph: {
    url: `${SITE_URL}/`,
    locale: "ko_KR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader locale="ko" />
      <ReplanApp locale="ko" />
    </>
  );
}
