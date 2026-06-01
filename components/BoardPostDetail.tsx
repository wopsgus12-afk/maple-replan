"use client";

import { useEffect, useState } from "react";
import {
  deletePost,
  formatPostDate,
  updatePost,
  validateBoardPassword,
  verifyPostPassword,
  type CommunityPost,
} from "@/lib/board";
import { BoardPasswordModal } from "./BoardPasswordModal";
import { useToast } from "./Toast";

const MAX_TITLE = 200;
const MAX_CONTENT = 5000;
const MAX_AUTHOR = 32;

type ModalAction = "edit" | "delete" | null;

type Props = {
  post: CommunityPost;
  onBack: () => void;
  onChanged: () => void;
  initialAction?: "edit" | "delete" | null;
  onInitialActionConsumed?: () => void;
};

export function BoardPostDetail({
  post,
  onBack,
  onChanged,
  initialAction,
  onInitialActionConsumed,
}: Props) {
  const { showToast } = useToast();
  const [current, setCurrent] = useState(post);
  const [modalAction, setModalAction] = useState<ModalAction>(null);
  const [modalBusy, setModalBusy] = useState(false);
  const [editing, setEditing] = useState(false);
  const [verifiedPassword, setVerifiedPassword] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);
  const [editAuthor, setEditAuthor] = useState(post.author);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setCurrent(post);
    setEditTitle(post.title);
    setEditContent(post.content);
    setEditAuthor(post.author);
    setEditing(false);
    setVerifiedPassword(null);
  }, [post]);

  useEffect(() => {
    if (initialAction) {
      setModalAction(initialAction);
      onInitialActionConsumed?.();
    }
  }, [initialAction, onInitialActionConsumed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !modalAction && !editing) onBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack, modalAction, editing]);

  const openPasswordModal = (action: ModalAction) => {
    setModalAction(action);
  };

  const handlePasswordConfirm = async (password: string) => {
    const pwdError = validateBoardPassword(password);
    if (pwdError) {
      showToast(pwdError);
      return;
    }

    setModalBusy(true);
    try {
      if (modalAction === "delete") {
        await deletePost(current.id, password);
        showToast("글이 삭제되었습니다.");
        setModalAction(null);
        onChanged();
        onBack();
        return;
      }

      if (modalAction === "edit") {
        const ok = await verifyPostPassword(current.id, password);
        if (!ok) {
          showToast("비밀번호가 일치하지 않습니다.");
          return;
        }
        setVerifiedPassword(password);
        setEditing(true);
        setModalAction(null);
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "처리에 실패했습니다.";
      showToast(msg);
    } finally {
      setModalBusy(false);
    }
  };

  const handleSaveEdit = async () => {
    const title = editTitle.trim();
    const content = editContent.trim();
    const author = editAuthor.trim();

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
    if (!verifiedPassword) {
      showToast("비밀번호 확인이 필요합니다.");
      return;
    }

    setSaving(true);
    try {
      const updated = await updatePost(current.id, verifiedPassword, {
        title,
        content,
        author,
      });
      setCurrent(updated);
      setEditing(false);
      setVerifiedPassword(null);
      showToast("글이 수정되었습니다.");
      onChanged();
    } catch (e) {
      const msg = e instanceof Error ? e.message : "수정에 실패했습니다.";
      showToast(msg);
    } finally {
      setSaving(false);
    }
  };

  const cancelEdit = () => {
    setEditing(false);
    setVerifiedPassword(null);
    setEditTitle(current.title);
    setEditContent(current.content);
    setEditAuthor(current.author);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="board-post-title"
        onClick={onBack}
      >
        <article
          className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border border-maple-border bg-maple-panel p-4 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            {editing ? (
              <input
                type="text"
                maxLength={MAX_TITLE}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="min-w-0 flex-1 rounded border border-maple-border bg-maple-bg px-2 py-1 text-base font-semibold text-maple-gold focus:border-maple-gold focus:outline-none"
                aria-label="제목 수정"
              />
            ) : (
              <h3 id="board-post-title" className="text-base font-semibold text-maple-gold">
                {current.title}
              </h3>
            )}
            <button
              type="button"
              onClick={onBack}
              className="shrink-0 rounded border border-maple-border px-2 py-0.5 text-xs text-maple-muted hover:text-white"
            >
              닫기
            </button>
          </div>

          <p className="mb-3 text-[11px] text-maple-muted">
            {current.author} · {formatPostDate(current.created_at)} · #{current.id}
          </p>

          {!editing && (
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                onClick={() => openPasswordModal("edit")}
                className="rounded border border-maple-gold/50 bg-maple-gold/10 px-3 py-1 text-[11px] font-medium text-maple-gold hover:bg-maple-gold/20"
              >
                수정
              </button>
              <button
                type="button"
                onClick={() => openPasswordModal("delete")}
                className="rounded border border-red-500/40 bg-red-950/30 px-3 py-1 text-[11px] font-medium text-red-300 hover:bg-red-950/50"
              >
                삭제
              </button>
            </div>
          )}

          {editing ? (
            <div className="space-y-2">
              <input
                type="text"
                maxLength={MAX_AUTHOR}
                value={editAuthor}
                onChange={(e) => setEditAuthor(e.target.value)}
                placeholder="작성자 (닉네임)"
                className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white focus:border-maple-gold focus:outline-none"
              />
              <textarea
                rows={8}
                maxLength={MAX_CONTENT}
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="내용"
                className="w-full resize-y rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white focus:border-maple-gold focus:outline-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={cancelEdit}
                  disabled={saving}
                  className="rounded border border-maple-border px-3 py-1.5 text-[11px] text-maple-muted hover:text-white disabled:opacity-50"
                >
                  취소
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => void handleSaveEdit()}
                  className="rounded border border-maple-gold bg-maple-gold/15 px-3 py-1.5 text-[11px] font-medium text-maple-gold hover:bg-maple-gold/25 disabled:opacity-50"
                >
                  {saving ? "저장 중…" : "저장"}
                </button>
              </div>
            </div>
          ) : (
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-200">
              {current.content}
            </div>
          )}

          {!editing && (
            <button
              type="button"
              onClick={onBack}
              className="mt-6 w-full rounded-lg border border-maple-gold/50 bg-maple-gold/10 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/20"
            >
              ← 목록으로 가기
            </button>
          )}
        </article>
      </div>

      <BoardPasswordModal
        open={modalAction !== null}
        title={modalAction === "delete" ? "글 삭제" : "글 수정"}
        description="글 작성 시 설정한 비밀번호를 입력해 주세요."
        confirmLabel={modalAction === "delete" ? "삭제" : "확인"}
        busy={modalBusy}
        onClose={() => {
          if (!modalBusy) setModalAction(null);
        }}
        onConfirm={(pwd) => void handlePasswordConfirm(pwd)}
      />
    </>
  );
}
