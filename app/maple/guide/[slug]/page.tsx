import type { Metadata } from "next";
import { GuideSlugRedirect } from "./GuideSlugRedirect";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/seoPosts";

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

  return {
    title: `${post.title} | 메이플 재획 정산`,
    description: post.description,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  return <GuideSlugRedirect slug={slug} />;
}
