"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createGuestbookEntry,
  fetchGuestbookEntries,
  formatGuestbookDate,
  subscribeToGuestbook,
  type GuestbookEntry,
} from "@/lib/guestbook";
import {
  checkGuestbookRateLimit,
  markGuestbookSubmitted,
  validateGuestbookInput,
} from "@/lib/guestbookValidation";
import { DEVELOPER_GUIDE_INTRO } from "@/lib/infoContent";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { InfoProseBlock } from "./InfoProseBlock";
import { useToast } from "./Toast";

const MAX_CONTENT = 500;
const SUCCESS_TOAST = "방명록에 등록되었습니다. 감사합니다!";

export function FeedbackForm() {
  const { showToast } = useToast();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loadEntries = useCallback(async () => {
    if (!isSupabaseConfigured()) {
      setLoadError("Supabase 환경변수가 설정되지 않았습니다.");
      setLoading(false);
      return;
    }
    setLoadError(null);
    try {
      const data = await fetchGuestbookEntries();
      setEntries(data);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "방명록을 불러오지 못했습니다.";
      setLoadError(msg);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadEntries();
  }, [loadEntries]);

  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    return subscribeToGuestbook(() => {
      void loadEntries();
    });
  }, [loadEntries]);

  const handleSubmit = async () => {
    const rateMsg = checkGuestbookRateLimit();
    if (rateMsg) {
      showToast(rateMsg);
      return;
    }

    const errors = validateGuestbookInput({
      nickname,
      password,
      content: message,
      honeypot,
    });
    const firstError = errors.nickname ?? errors.password ?? errors.content;
    if (firstError) {
      showToast(firstError);
      return;
    }

    setSubmitting(true);
    try {
      const created = await createGuestbookEntry({
        nickname: nickname.trim(),
        password,
        content: message.trim(),
      });
      markGuestbookSubmitted();
      setEntries((prev) => {
        if (prev.some((e) => e.id === created.id)) return prev;
        return [created, ...prev];
      });
      showToast(SUCCESS_TOAST);
      setNickname("");
      setPassword("");
      setMessage("");
      setHoneypot("");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "등록에 실패했습니다.";
      showToast(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-4 space-y-4" aria-label="개발자에게 한마디 방명록">
      <InfoProseBlock
        title={DEVELOPER_GUIDE_INTRO.title}
        paragraphs={DEVELOPER_GUIDE_INTRO.paragraphs}
      />

      <div className="relative overflow-hidden rounded-lg border border-violet-500/35 bg-gradient-to-b from-[#0a0814] via-maple-panel/95 to-[#0d1218] p-4 shadow-[inset_0_0_32px_rgba(139,92,246,0.08),0_0_28px_rgba(62,207,110,0.06)]">
        <div className="relative space-y-1">
          <div className="flex items-center gap-2">
            <span className="rounded border border-cyan-500/40 bg-cyan-950/40 px-1.5 py-0.5 text-[10px] font-medium text-cyan-200">
              실시간 방명록
            </span>
          </div>
          <h2 className="text-sm font-semibold text-violet-100">개발자에게 한마디</h2>
          <p className="text-[11px] text-violet-200/70">
            닉네임·비밀번호·내용을 입력하고 등록하면 Supabase에 저장되며, 아래 목록에
            즉시 표시됩니다. 비밀번호는 글 삭제·수정 시 확인용으로만 사용됩니다(화면에
            노출되지 않음).
          </p>
        </div>

        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <label className="relative mt-4 block">
          <span className="mb-1 block text-[11px] text-violet-200/80">닉네임 (2~16자)</span>
          <input
            type="text"
            maxLength={16}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
            autoComplete="nickname"
            className="w-full rounded border border-violet-500/30 bg-[#08060f] px-3 py-2 text-sm text-white placeholder:text-violet-300/40 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          />
        </label>

        <label className="relative mt-3 block">
          <span className="mb-1 block text-[11px] text-violet-200/80">
            비밀번호 (4~32자, 본인 글 관리용)
          </span>
          <input
            type="password"
            maxLength={32}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            autoComplete="new-password"
            className="w-full rounded border border-violet-500/30 bg-[#08060f] px-3 py-2 text-sm text-white placeholder:text-violet-300/40 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          />
        </label>

        <label className="relative mt-3 block">
          <span className="mb-1 flex items-center justify-between text-[11px] text-violet-200/80">
            <span>내용 (5~500자)</span>
            <span className="tabular-nums text-violet-300/60">
              {message.length}/{MAX_CONTENT}
            </span>
          </span>
          <textarea
            maxLength={MAX_CONTENT}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="버그 제보, 기능 제안, 응원 메시지 등을 자유롭게 적어 주세요."
            className="w-full resize-y rounded border border-violet-500/30 bg-[#08060f] px-3 py-2 text-sm text-white placeholder:text-violet-300/40 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_18px_rgba(139,92,246,0.2)]"
          />
        </label>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            disabled={submitting || !isSupabaseConfigured()}
            onClick={() => void handleSubmit()}
            className="rounded-lg border border-cyan-500/50 bg-gradient-to-r from-violet-900/50 to-cyan-950/50 px-4 py-2.5 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(139,92,246,0.25)] transition hover:from-violet-800/60 hover:to-cyan-900/50 disabled:opacity-50 sm:text-sm"
          >
            {submitting ? "등록 중…" : "등록"}
          </button>
        </div>
      </div>

      {loadError && (
        <div className="rounded-lg border border-red-800/50 bg-red-950/30 p-3 text-xs text-red-200">
          <p className="font-semibold">방명록 연결 오류</p>
          <p className="mt-1">{loadError}</p>
          <p className="mt-2 text-red-200/80">
            Supabase SQL Editor에서 <code className="text-[10px]">supabase/schema.sql</code>의
            방명록(developer_guestbook) 구문을 실행했는지 확인해 주세요.
          </p>
        </div>
      )}

      <div className="rounded-lg border border-violet-500/25 bg-maple-panel/50 p-3">
        <h3 className="mb-2 text-xs font-semibold text-violet-200/90">
          방명록 · 최근 메시지
        </h3>
        {loading ? (
          <p className="py-4 text-center text-[11px] text-maple-muted">불러오는 중…</p>
        ) : entries.length === 0 ? (
          <p className="py-4 text-center text-[11px] text-maple-muted">
            아직 등록된 글이 없습니다. 첫 메시지를 남겨 보세요!
          </p>
        ) : (
          <ul className="max-h-[50vh] space-y-2 overflow-y-auto pr-1">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="rounded border border-violet-500/20 bg-[#0a0812]/80 px-3 py-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] font-semibold text-violet-100">{entry.nickname}</p>
                  <time
                    dateTime={entry.created_at}
                    className="shrink-0 text-[9px] text-violet-400/70"
                  >
                    {formatGuestbookDate(entry.created_at)}
                  </time>
                </div>
                <p className="mt-1.5 whitespace-pre-wrap text-[11px] leading-relaxed text-gray-200">
                  {entry.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
