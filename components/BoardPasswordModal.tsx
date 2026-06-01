"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel: string;
  busy?: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
};

export function BoardPasswordModal({
  open,
  title,
  description,
  confirmLabel,
  busy,
  onClose,
  onConfirm,
}: Props) {
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!open) setPassword("");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !busy) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, busy, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="board-password-modal-title"
      onClick={() => {
        if (!busy) onClose();
      }}
    >
      <div
        className="w-full max-w-sm rounded-lg border border-maple-border bg-maple-panel p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 id="board-password-modal-title" className="text-sm font-semibold text-maple-gold">
          {title}
        </h4>
        {description && (
          <p className="mt-1.5 text-[11px] leading-relaxed text-maple-muted">{description}</p>
        )}
        <label className="mt-4 block">
          <span className="mb-1 block text-[11px] text-maple-muted">글 작성 시 입력한 비밀번호</span>
          <input
            type="password"
            maxLength={32}
            value={password}
            autoFocus
            disabled={busy}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && password.trim()) {
                e.preventDefault();
                onConfirm(password);
              }
            }}
            className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2 text-sm text-white focus:border-maple-gold focus:outline-none disabled:opacity-50"
          />
        </label>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={onClose}
            className="rounded border border-maple-border px-3 py-1.5 text-[11px] text-maple-muted hover:text-white disabled:opacity-50"
          >
            취소
          </button>
          <button
            type="button"
            disabled={busy || !password.trim()}
            onClick={() => onConfirm(password)}
            className="rounded border border-maple-gold bg-maple-gold/15 px-3 py-1.5 text-[11px] font-medium text-maple-gold hover:bg-maple-gold/25 disabled:opacity-50"
          >
            {busy ? "확인 중…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
