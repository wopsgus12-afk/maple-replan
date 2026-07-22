import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { RelatedGuides } from "@/components/RelatedGuides";
import { GuideViewTracker } from "@/components/GuideViewTracker";
import { SiteHeader } from "@/components/SiteHeader";
import { GlobalFooter } from "@/components/Footer";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/seoPosts";
import { guideAbsoluteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getGuideBySlug(slug);
  if (!post) return { title: "가이드를 찾을 수 없음" };

  const url = guideAbsoluteUrl(slug);
  return {
    title: `${post.title} | 메이플 재획 정산`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "메이플 재획 정산",
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const post = getGuideBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-maple-bg pb-8">
      <SiteHeader />
      <GuideViewTracker slug={slug} />
      <GuideArticle post={post} backHref="/guide/" backLabel="← 가이드 목록" />
      <RelatedGuides currentSlug={slug} />
      <div className="mx-auto max-w-2xl px-4">
        <GlobalFooter />
      </div>
    </div>
  );
}
