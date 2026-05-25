import type { Metadata } from "next";
import { GgPassLanding } from "@/components/GgPassLanding";

export const metadata: Metadata = {
  title: "GG-PASS | No More High Ping. No More Lags.",
  description:
    "Find the Best Roblox Servers with 1-Click. Maximize your gaming experience with GG-PASS Ping Scanner.",
  openGraph: {
    title: "GG-PASS | Roblox Ping Scanner",
    description:
      "Real-time ping tracking, auto-matchmaking, and 100% Roblox-compliant server discovery.",
    type: "website",
  },
};

/** gg-pass.com 루트 — 글로벌 Roblox Chrome 확장 소개 ( /maple 은 독립 유지 ) */
export default function SiteHomePage() {
  return <GgPassLanding />;
}
