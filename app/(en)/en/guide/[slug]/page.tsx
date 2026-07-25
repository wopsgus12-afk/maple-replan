import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { RelatedGuides } from "@/components/RelatedGuides";
import { GuideViewTracker } from "@/components/GuideViewTracker";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { getAllEnGuideSlugs, getEnGuideBySlug } from "@/lib/enSeoPosts";
import { guideLanguageAlternates } from "@/lib/hreflang";
import { guideAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllEnGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnGuideBySlug(slug);
  if (!post) return { title: "Guide not found" };

  const url = guideAbsoluteUrl("en", slug);
  return {
    title: post.title,
    description: post.description,
    alternates: guideLanguageAlternates("en", slug),
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Maple Meso Calculator",
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function EnGuidePage({ params }: Props) {
  const { slug } = await params;
  const post = getEnGuideBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader locale="en" />
      <GuideViewTracker slug={slug} />
      <GuideArticle post={post} locale="en" />
      <RelatedGuides currentSlug={slug} locale="en" />
      <div className="mx-auto max-w-2xl px-4">
        <GlobalFooter locale="en" />
      </div>
    </div>
  );
}
