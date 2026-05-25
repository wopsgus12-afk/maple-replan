"use client";

import { useState } from "react";
import { submitFeedback } from "@/lib/feedback";
import { DEVELOPER_GUIDE_INTRO } from "@/lib/infoContent";
import { DonationAccountBox } from "./DonationAccountBox";
import { InfoProseBlock } from "./InfoProseBlock";
import { useToast } from "./Toast";

const MAX_MESSAGE = 500;
const SUCCESS_TOAST =
  "소중한 의견이 개발자에게 전송되었습니다! 더 좋은 도구로 보답하겠습니다.";

const MOCK_SECRET_FEEDBACK = [
  {
    title: "🔒 유저가 보낸 비밀 제안입니다.",
    preview: "오버레이 크기 조절 옵션을 추가해 주시면 좋겠어요.",
    ago: "2시간 전",
  },
  {
    title: "🔒 사냥터 빌드 관련 개선 요청...",
    preview: "260+ 구간에서 조각/젬 전환 UI가 더 눈에 띄면 좋겠습니다.",
    ago: "5시간 전",
  },
  {
    title: "🔒 버그 제보 (비공개)",
    preview: "타이머 일시정지 후 재개 시 초가 어긋나는 경우가 있습니다.",
    ago: "어제",
  },
  {
    title: "🔒 응원 메시지 — 계속 만들어 주세요",
    preview: "재획 정산 앱 덕분에 기록이 편해졌어요. 감사합니다!",
    ago: "어제",
  },
  {
    title: "🔒 기능 아이디어: 주간 리포트",
    preview: "일주일 단위로 메소·EXP 합계를 PDF로 받고 싶어요.",
    ago: "3일 전",
  },
  {
    title: "🔒 닉네임 익명 처리 문의",
    preview: "피드백에 실제 캐릭명 대신 별칭만 쓰고 싶습니다.",
    ago: "4일 전",
  },
];

export function FeedbackForm() {
  const { showToast } = useToast();
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    const trimmedNick = nickname.trim();
    const trimmedMessage = message.trim();

    if (!trimmedNick) {
      showToast("닉네임을 입력해 주세요.");
      return;
    }

    setSubmitting(true);
    try {
      await submitFeedback({
        nickname: trimmedNick,
        message: trimmedMessage,
      });
      showToast(SUCCESS_TOAST);
      setNickname("");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-4 space-y-4">
      <InfoProseBlock
        title={DEVELOPER_GUIDE_INTRO.title}
        paragraphs={DEVELOPER_GUIDE_INTRO.paragraphs}
      />

      <div className="relative overflow-hidden rounded-lg border border-violet-500/35 bg-gradient-to-b from-[#0a0814] via-maple-panel/95 to-[#0d1218] p-4 shadow-[inset_0_0_32px_rgba(139,92,246,0.08),0_0_28px_rgba(62,207,110,0.06)]">
        <div
          className="pointer-events-none absolute right-3 top-3 text-lg opacity-40"
          aria-hidden
        >
          🔒
        </div>
        <div
          className="pointer-events-none absolute left-4 top-12 text-sm opacity-25"
          aria-hidden
        >
          🔒
        </div>

        <div className="relative space-y-1">
          <div className="flex items-center gap-2">
            <span className="rounded border border-violet-400/40 bg-violet-950/50 px-1.5 py-0.5 text-[10px] font-medium text-violet-200">
              🔒 비공개
            </span>
            <span className="rounded border border-cyan-500/30 bg-cyan-950/40 px-1.5 py-0.5 text-[10px] text-cyan-200/90">
              암호화 전송 (데모)
            </span>
          </div>
          <h2 className="text-sm font-semibold text-violet-100">개발자에게 한마디</h2>
          <p className="text-[11px] text-violet-200/70">
            의견은 개발자만 열람하는 비공개 채널로 전달됩니다. 로그인 없이 안전하게 보낼 수
            있습니다.
          </p>
        </div>

        <label className="relative mt-4 block">
          <span className="mb-1 flex items-center gap-1 text-[11px] text-violet-200/80">
            <span aria-hidden>🔒</span>
            닉네임 (한글 8자 제한)
          </span>
          <input
            type="text"
            maxLength={8}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
            className="w-full rounded border border-violet-500/30 bg-[#08060f] px-3 py-2 text-sm text-white placeholder:text-violet-300/40 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          />
        </label>

        <label className="relative mt-3 block">
          <span className="mb-1 flex items-center justify-between text-[11px] text-violet-200/80">
            <span className="flex items-center gap-1">
              <span aria-hidden>🔒</span>
              의견 및 기능 제안 (최대 500자)
            </span>
            <span className="tabular-nums text-violet-300/60">
              {message.length}/{MAX_MESSAGE}
            </span>
          </span>
          <textarea
            maxLength={MAX_MESSAGE}
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="개선 아이디어, 버그 제보, 응원 메시지 등을 자유롭게 적어 주세요."
            className="w-full resize-y rounded border border-violet-500/30 bg-[#08060f] px-3 py-2 text-sm text-white placeholder:text-violet-300/40 focus:border-cyan-400/50 focus:outline-none focus:shadow-[0_0_18px_rgba(139,92,246,0.2)]"
          />
        </label>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            disabled={submitting}
            onClick={() => void handleSubmit()}
            className="rounded-lg border border-cyan-500/50 bg-gradient-to-r from-violet-900/50 to-cyan-950/50 px-4 py-2.5 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(139,92,246,0.25),0_0_12px_rgba(34,211,238,0.15)] transition hover:from-violet-800/60 hover:to-cyan-900/50 hover:shadow-[0_0_32px_rgba(139,92,246,0.35)] disabled:opacity-50 sm:text-sm"
          >
            🔒 개발자에게 비공개로 안전하게 전송하기
          </button>
        </div>

        <DonationAccountBox className="mt-4 border-t border-violet-500/20 pt-4" />
      </div>

      <div className="rounded-lg border border-violet-500/25 bg-maple-panel/50 p-3">
        <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-violet-200/90">
          <span aria-hidden>🔒</span>
          개발자만 볼 수 있는 비밀 피드백 (데모)
        </h3>
        <ul className="space-y-2">
          {MOCK_SECRET_FEEDBACK.map((item, i) => (
            <li
              key={i}
              className="rounded border border-violet-500/20 bg-[#0a0812]/80 px-3 py-2.5 shadow-[inset_0_0_12px_rgba(139,92,246,0.06)]"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-medium text-violet-100/95">{item.title}</p>
                <span className="shrink-0 text-[9px] text-violet-400/70">{item.ago}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-[10px] text-violet-300/55 blur-[0.3px]">
                {item.preview}
              </p>
              <span className="mt-1.5 inline-flex items-center gap-0.5 text-[9px] text-cyan-400/60">
                🔒 내용 잠김
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
