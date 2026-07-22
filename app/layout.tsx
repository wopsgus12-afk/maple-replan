import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "메이플 재획 정산",
    template: "%s | 메이플 재획 정산",
  },
  description: "메이플스토리 2시간 재획(사냥) 시급 및 누적 정산 도구",
  openGraph: {
    siteName: "메이플 재획 정산",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
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
