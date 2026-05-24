"use client";

import { useState } from "react";
import { BRAG_POSTS, TIPS_POSTS, type BoardPost } from "@/lib/boardMock";
import { useToast } from "./Toast";

const NOTICE_TITLE = "[공지] 커뮤니티 이용 규칙 안내";
const NOTICE_BODY =
  "본 게시판은 메이플 유저들의 청정한 정보 공유를 위한 공간입니다. 깨끗한 커뮤니티 환경 조성을 위해 타인에 대한 비방, 욕설, 악성 도배글, 불법 프로그램 언급 적발 시 사전 고지 없이 즉시 글 삭제 및 IP 차단 조치됩니다.";

type BoardKind = "brag" | "tips";

const BOARD_META: Record<
  BoardKind,
  { heading: string; subtitle: string; posts: BoardPost[] }
> = {
  brag: {
    heading: "자랑 게시판 (인증샷)",
    subtitle: "재획·사냥 성과와 인증샷을 공유해 주세요.",
    posts: BRAG_POSTS,
  },
  tips: {
    heading: "사냥터 팁/정보 공유",
    subtitle: "사냥터 빌드, 루트, 효율 팁을 나눠 주세요.",
    posts: TIPS_POSTS,
  },
};

type Props = {
  kind: BoardKind;
};

export function BoardView({ kind }: Props) {
  const { showToast } = useToast();
  const [writeOpen, setWriteOpen] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const meta = BOARD_META[kind];

  const handleSubmitPost = () => {
    if (!draftTitle.trim()) {
      showToast("제목을 입력해 주세요.");
      return;
    }
    showToast("글이 등록되었습니다. (데모)");
    setDraftTitle("");
    setWriteOpen(false);
  };

  return (
    <section className="mt-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-maple-gold">{meta.heading}</h2>
          <p className="mt-0.5 text-[11px] text-maple-muted">{meta.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setWriteOpen((v) => !v)}
          className="shrink-0 rounded border border-maple-accent bg-maple-accent/15 px-3 py-1.5 text-[11px] font-medium text-maple-accent hover:bg-maple-accent/25"
        >
          글쓰기
        </button>
      </div>

      {writeOpen && (
        <div className="rounded-lg border border-maple-border bg-maple-panel/90 p-3 space-y-2">
          <input
            type="text"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
          />
          <textarea
            rows={3}
            placeholder="내용 (데모 — 저장되지 않음)"
            className="w-full resize-y rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setWriteOpen(false)}
              className="rounded border border-maple-border px-3 py-1.5 text-[11px] text-maple-muted hover:text-white"
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleSubmitPost}
              className="rounded border border-maple-gold bg-maple-gold/15 px-3 py-1.5 text-[11px] font-medium text-maple-gold hover:bg-maple-gold/25"
            >
              등록
            </button>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-orange-500/50 bg-gradient-to-br from-orange-950/40 via-red-950/30 to-maple-panel/80 p-3 shadow-[0_0_20px_rgba(251,146,60,0.12)]">
        <p className="text-xs font-bold text-orange-300">{NOTICE_TITLE}</p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-orange-100/85">{NOTICE_BODY}</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-maple-border bg-maple-panel/60">
        <div className="grid grid-cols-[2.5rem_1fr_4.5rem_5rem] gap-1 border-b border-maple-border bg-maple-bg/60 px-2 py-2 text-[10px] font-semibold text-maple-muted">
          <span className="text-center">번호</span>
          <span>제목</span>
          <span className="text-center">작성자</span>
          <span className="text-right">작성일</span>
        </div>
        <ul className="divide-y divide-maple-border/60">
          {meta.posts.map((post) => (
            <li key={post.id}>
              <button
                type="button"
                onClick={() => showToast("게시글 상세는 준비 중입니다. (데모)")}
                className="grid w-full grid-cols-[2.5rem_1fr_4.5rem_5rem] gap-1 px-2 py-2.5 text-left text-[11px] transition hover:bg-maple-gold/5"
              >
                <span className="text-center tabular-nums text-maple-muted">{post.id}</span>
                <span className="truncate pr-1 text-gray-100 hover:text-maple-gold">
                  {post.title}
                </span>
                <span className="truncate text-center text-maple-muted">{post.author}</span>
                <span className="text-right tabular-nums text-maple-muted/80">{post.date}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
