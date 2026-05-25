"use client";

import { useEffect } from "react";
import { getGuideBySlug } from "@/lib/seoPosts";

type Props = {
  slug: string;
  onBack: () => void;
};

export function GuideDetailPanel({ slug, onBack }: Props) {
  const post = getGuideBySlug(slug);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack]);

  if (!post) {
    return (
      <div className="rounded-lg border border-maple-border bg-maple-panel p-4">
        <p className="text-sm text-maple-muted">가이드를 찾을 수 없습니다.</p>
        <button
          type="button"
          onClick={onBack}
          className="mt-3 text-xs text-maple-gold hover:underline"
        >
          ← 목록으로
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-maple-bg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-detail-title"
    >
      <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-maple-border bg-maple-bg/95 px-4 py-3 backdrop-blur-sm">
        <button
          type="button"
          onClick={onBack}
          className="rounded border border-maple-border px-3 py-1.5 text-xs font-medium text-maple-gold hover:bg-maple-panel"
        >
          ← 목록으로
        </button>
        <span className="text-[11px] text-maple-muted">재획 가이드</span>
      </div>

      <article className="mx-auto w-full max-w-2xl flex-1 overflow-y-auto px-4 py-6">
        <header className="mb-8 border-b border-maple-border/50 pb-6">
          <h1
            id="guide-detail-title"
            className="text-2xl font-bold leading-snug text-maple-gold sm:text-3xl"
          >
            {post.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-maple-muted">{post.description}</p>
        </header>
        <div className="space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-xl font-bold text-maple-accent sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mb-3 text-base leading-loose text-gray-200"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-10 border-t border-maple-border/50 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="w-full rounded-lg border border-maple-gold/50 bg-maple-gold/10 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/20"
          >
            목록으로 가기
          </button>
        </div>
      </article>
    </div>
  );
}
