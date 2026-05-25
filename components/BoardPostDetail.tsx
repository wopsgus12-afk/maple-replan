"use client";

import { useEffect } from "react";
import type { CommunityPost } from "@/lib/board";
import { formatPostDate } from "@/lib/board";

type Props = {
  post: CommunityPost;
  onBack: () => void;
};

export function BoardPostDetail({ post, onBack }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="board-post-title"
    >
      <article
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border border-maple-border bg-maple-panel p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 id="board-post-title" className="text-base font-semibold text-maple-gold">
            {post.title}
          </h3>
          <button
            type="button"
            onClick={onBack}
            className="shrink-0 rounded border border-maple-border px-2 py-0.5 text-xs text-maple-muted hover:text-white"
          >
            닫기
          </button>
        </div>
        <p className="mb-4 text-[11px] text-maple-muted">
          {post.author} · {formatPostDate(post.created_at)} · #{post.id}
        </p>
        <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-200">
          {post.content}
        </div>
        <button
          type="button"
          onClick={onBack}
          className="mt-6 w-full rounded-lg border border-maple-gold/50 bg-maple-gold/10 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/20"
        >
          ← 목록으로 가기
        </button>
      </article>
    </div>
  );
}
