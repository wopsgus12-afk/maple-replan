import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCR Lab (dev)",
  robots: { index: false, follow: false },
};

export default function OcrLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
