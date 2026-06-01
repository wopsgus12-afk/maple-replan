"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppQuery } from "@/hooks/useClientAppQuery";
import {
  createPost,
  fetchPosts,
  formatPostDate,
  subscribeToBoard,
  validateBoardPassword,
  type BoardKind,
  type CommunityPost,
} from "@/lib/board";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { BoardPostDetail } from "./BoardPostDetail";
import { useToast } from "./Toast";

const NOTICE_TITLE = "[공지] 커뮤니티 이용 규칙 안내";
const NOTICE_BODY =
  "본 게시판은 메이플 유저들의 청정한 정보 공유를 위한 공간입니다. 타인에 대한 비방, 욕설, 악성 도배글, 불법 프로그램 언급 적발 시 사전 고지 없이 글 삭제·이용 제한 조치가 있을 수 있습니다.";

const BOARD_META: Record<
  BoardKind,
  { heading: string; subtitle: string }
> = {
  brag: {
    heading: "자랑 게시판 (인증샷)",
    subtitle: "재획·사냥 성과와 인증샷을 공유해 주세요. 작성한 글은 다른 유저에게도 바로 보입니다.",
  },
  tips: {
    heading: "사냥터 팁/정보 공유",
    subtitle: "사냥터 빌드, 루트, 효율 팁을 나눠 주세요. 새 글은 실시간으로 목록에 반영됩니다.",
  },
};

const MAX_TITLE = 200;
const MAX_CONTENT = 5000;
const MAX_AUTHOR = 32;

type Props = {
  kind: BoardKind;
};

export function BoardView({ kind }: Props) {
  const { mainTab, postId, openPost, closePost, replace } = useAppQuery();
  const postIdParam = mainTab === kind ? postId : null;
  const { showToast } = useToast();
  const meta = BOARD_META[kind];

  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [writeOpen, setWriteOpen] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftContent, setDraftContent] = useState("");
  const [draftAuthor, setDraftAuthor] = useState("");
  const [draftPassword, setDraftPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [detailAction, setDetailAction] = useState<"edit" | "delete" | null>(null);

  const handleOpenPost = useCallback(
    (post: CommunityPost, action?: "edit" | "delete") => {
      openPost(kind, post.id);
      setDetailAction(action ?? null);
    },
    [openPost, kind]
  );

  const handleClosePost = useCallback(() => {
    closePost(kind);
  }, [closePost, kind]);

  const selectedPost = useMemo(() => {
    if (!postIdParam) return null;
    const id = Number(postIdParam);
    if (!Number.isFinite(id)) return null;
    return posts.find((p) => p.id === id) ?? null;
  }, [postIdParam, posts]);

  const loadPosts = useCallback(async () => {
    if (!isSupabaseConfigured()) {
      setLoadError("Supabase 환경변수가 설정되지 않았습니다.");
      setLoading(false);
      return;
    }
    setLoadError(null);
    try {
      const data = await fetchPosts(kind, searchQuery);
      setPosts(data);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "게시글을 불러오지 못했습니다.";
      setLoadError(msg);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [kind, searchQuery]);

  useEffect(() => {
    setLoading(true);
    void loadPosts();
  }, [loadPosts]);

  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    return subscribeToBoard(kind, () => {
      void loadPosts();
    });
  }, [kind, loadPosts]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setSearchQuery(searchInput.trim());
    }, 300);
    return () => window.clearTimeout(t);
  }, [searchInput]);

  useEffect(() => {
    if (!postIdParam || loading) return;
    const id = Number(postIdParam);
    if (!Number.isFinite(id)) {
      replace({ tab: kind });
      return;
    }
    if (posts.length > 0 && !posts.some((p) => p.id === id)) {
      showToast("삭제되었거나 찾을 수 없는 글입니다.");
      replace({ tab: kind });
    }
  }, [postIdParam, posts, loading, kind, replace, showToast]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput.trim());
  };

  const handleSubmitPost = async () => {
    const title = draftTitle.trim();
    const content = draftContent.trim();
    const author = draftAuthor.trim();

    if (!author) {
      showToast("작성자(닉네임)를 입력해 주세요.");
      return;
    }
    if (!title) {
      showToast("제목을 입력해 주세요.");
      return;
    }
    if (!content) {
      showToast("내용을 입력해 주세요.");
      return;
    }
    const pwdError = validateBoardPassword(draftPassword);
    if (pwdError) {
      showToast(pwdError);
      return;
    }

    setSubmitting(true);
    try {
      await createPost({
        boardType: kind,
        title,
        content,
        author,
        password: draftPassword,
      });
      showToast("글이 등록되었습니다.");
      setDraftTitle("");
      setDraftContent("");
      setDraftPassword("");
      setWriteOpen(false);
      await loadPosts();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "등록에 실패했습니다.";
      showToast(msg);
    } finally {
      setSubmitting(false);
    }
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

      <form onSubmit={handleSearchSubmit} className="flex gap-2" role="search">
        <label className="sr-only" htmlFor={`board-search-${kind}`}>
          게시글 검색
        </label>
        <input
          id={`board-search-${kind}`}
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="제목·내용 검색"
          className="min-w-0 flex-1 rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded border border-maple-gold/50 bg-maple-gold/10 px-3 py-2 text-xs font-medium text-maple-gold hover:bg-maple-gold/20"
        >
          검색
        </button>
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchInput("");
              setSearchQuery("");
            }}
            className="shrink-0 rounded border border-maple-border px-2 py-2 text-xs text-maple-muted hover:text-white"
          >
            초기화
          </button>
        )}
      </form>

      {searchQuery && (
        <p className="text-[11px] text-maple-muted">
          검색어: <span className="text-maple-gold">&quot;{searchQuery}&quot;</span>
          {loading ? " · 검색 중…" : ` · ${posts.length}건`}
        </p>
      )}

      {writeOpen && (
        <div className="space-y-2 rounded-lg border border-maple-border bg-maple-panel/90 p-3">
          <input
            type="text"
            maxLength={MAX_AUTHOR}
            value={draftAuthor}
            onChange={(e) => setDraftAuthor(e.target.value)}
            placeholder="작성자 (닉네임, 최대 32자)"
            className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
          />
          <input
            type="text"
            maxLength={MAX_TITLE}
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            placeholder="제목"
            className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
          />
          <textarea
            rows={5}
            maxLength={MAX_CONTENT}
            value={draftContent}
            onChange={(e) => setDraftContent(e.target.value)}
            placeholder="내용을 입력하세요"
            className="w-full resize-y rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
          />
          <input
            type="password"
            maxLength={32}
            value={draftPassword}
            onChange={(e) => setDraftPassword(e.target.value)}
            placeholder="비밀번호 (4~32자, 수정·삭제 시 사용)"
            autoComplete="new-password"
            className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white placeholder:text-maple-muted/60 focus:border-maple-gold focus:outline-none"
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
              disabled={submitting}
              onClick={() => void handleSubmitPost()}
              className="rounded border border-maple-gold bg-maple-gold/15 px-3 py-1.5 text-[11px] font-medium text-maple-gold hover:bg-maple-gold/25 disabled:opacity-50"
            >
              {submitting ? "등록 중…" : "등록"}
            </button>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-orange-500/50 bg-gradient-to-br from-orange-950/40 via-red-950/30 to-maple-panel/80 p-3 shadow-[0_0_20px_rgba(251,146,60,0.12)]">
        <p className="text-xs font-bold text-orange-300">{NOTICE_TITLE}</p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-orange-100/85">{NOTICE_BODY}</p>
      </div>

      {loadError && (
        <div className="rounded-lg border border-red-800/50 bg-red-950/30 p-3 text-xs text-red-200">
          <p className="font-semibold">게시판 연결 오류</p>
          <p className="mt-1">{loadError}</p>
          <p className="mt-2 text-red-200/80">
            Supabase SQL Editor에서 <code className="text-[10px]">supabase/schema.sql</code>을
            실행했는지 확인해 주세요.
          </p>
        </div>
      )}

      <div className="overflow-hidden rounded-lg border border-maple-border bg-maple-panel/60">
        <div className="grid grid-cols-[2.5rem_1fr_4.5rem_5rem_3.5rem] gap-1 border-b border-maple-border bg-maple-bg/60 px-2 py-2 text-[10px] font-semibold text-maple-muted">
          <span className="text-center">번호</span>
          <span>제목</span>
          <span className="text-center">작성자</span>
          <span className="text-right">작성일</span>
          <span className="text-center">관리</span>
        </div>
        {loading ? (
          <p className="px-3 py-6 text-center text-xs text-maple-muted">불러오는 중…</p>
        ) : posts.length === 0 ? (
          <p className="px-3 py-6 text-center text-xs text-maple-muted">
            {searchQuery ? "검색 결과가 없습니다." : "아직 글이 없습니다. 첫 글을 작성해 보세요!"}
          </p>
        ) : (
          <ul className="divide-y divide-maple-border/60">
            {posts.map((post) => (
              <li key={post.id}>
                <div className="grid grid-cols-[2.5rem_1fr_4.5rem_5rem_3.5rem] gap-1 px-2 py-2.5 text-[11px] transition hover:bg-maple-gold/5">
                  <button
                    type="button"
                    onClick={() => handleOpenPost(post)}
                    className="col-span-4 grid grid-cols-[2.5rem_1fr_4.5rem_5rem] gap-1 text-left"
                  >
                    <span className="text-center tabular-nums text-maple-muted">{post.id}</span>
                    <span className="truncate pr-1 text-gray-100 hover:text-maple-gold">
                      {post.title}
                    </span>
                    <span className="truncate text-center text-maple-muted">{post.author}</span>
                    <span className="text-right tabular-nums text-maple-muted/80">
                      {formatPostDate(post.created_at)}
                    </span>
                  </button>
                  <div
                    className="flex flex-col items-center justify-center gap-0.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenPost(post, "edit")}
                      className="text-[9px] text-maple-gold hover:underline"
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenPost(post, "delete")}
                      className="text-[9px] text-red-400/90 hover:underline"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {postIdParam && loading && !selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <p className="text-sm text-maple-muted">글 불러오는 중…</p>
        </div>
      )}

      {selectedPost && (
        <BoardPostDetail
          post={selectedPost}
          onBack={handleClosePost}
          onChanged={() => void loadPosts()}
          initialAction={detailAction}
          onInitialActionConsumed={() => setDetailAction(null)}
        />
      )}
    </section>
  );
}
