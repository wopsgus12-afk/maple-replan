"use client";

import { useAppQuery } from "@/hooks/useClientAppQuery";
import { GUIDE_TAB_INTRO } from "@/lib/infoContent";
import { GUIDE_POSTS } from "@/lib/seoPosts";
import { InfoProseBlock } from "./InfoProseBlock";

type Props = {
  compact?: boolean;
};

export function GuideCards({ compact }: Props) {
  const { openArticle } = useAppQuery();

  const handleArticleClick = (slug: string) => {
    openArticle(slug);
  };

  return (
    <section aria-label="재획 가이드 목록">
      {!compact && (
        <>
          <h2 className="mb-4 text-2xl font-bold text-maple-gold sm:text-3xl">재획 가이드</h2>
          <InfoProseBlock
            title={GUIDE_TAB_INTRO.title}
            paragraphs={GUIDE_TAB_INTRO.paragraphs}
          />
        </>
      )}
      <h3 className="mb-2 text-sm font-semibold text-maple-accent">주제별 심화 가이드</h3>
      <ul className={`space-y-2 ${compact ? "" : "max-h-[50vh] overflow-y-auto pr-1"}`}>
        {GUIDE_POSTS.map((post) => (
          <li key={post.slug}>
            <button
              type="button"
              onClick={() => handleArticleClick(post.slug)}
              className="block w-full rounded-lg border border-maple-border bg-maple-panel/60 p-3 text-left transition hover:border-maple-gold/60 hover:bg-maple-panel"
            >
              <h3 className="text-base font-semibold leading-snug text-maple-gold">{post.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-maple-muted">
                {post.description}
              </p>
              <span className="mt-2 inline-block text-[10px] text-maple-accent">자세히 읽기 →</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
