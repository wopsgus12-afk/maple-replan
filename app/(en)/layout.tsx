import type { Metadata } from "next";
import { geistMono, geistSans } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maple Meso Calculator",
    template: "%s | Maple Meso Calculator",
  },
  description:
    "Unofficial MapleStory meso calculator and hunting guides for English players (GMS and beyond).",
  openGraph: {
    siteName: "Maple Meso Calculator",
    locale: "en_US",
    type: "website",
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="7GuB5n3MyAf5MypvQCAOsz1P2UcZ3fQvRneDivfRTDQ"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4932168650472242"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-maple-bg font-maple text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
