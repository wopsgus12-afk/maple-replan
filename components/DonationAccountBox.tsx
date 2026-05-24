"use client";

import { useToast } from "./Toast";

const ACCOUNT_NUMBER = "100120933018";
const COPY_SUCCESS_TOAST =
  "계좌번호가 복사되었습니다. 따뜻한 후원에 깊이 감사드립니다!";

type Props = {
  className?: string;
};

export function DonationAccountBox({ className = "" }: Props) {
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      showToast(COPY_SUCCESS_TOAST, "success");
    } catch {
      showToast("복사에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div
      className={`mx-auto w-full max-w-md rounded-lg border border-emerald-500/45 bg-gradient-to-r from-[#081210] via-maple-panel/95 to-[#0d1a14] px-3 py-2.5 text-center shadow-[inset_0_0_28px_rgba(62,207,110,0.1),0_0_22px_rgba(62,207,110,0.14)] ${className}`}
      aria-label="후원 계좌"
    >
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-bold tracking-wide text-emerald-100/95 sm:text-xl">
          [ 후원계좌: 토스뱅크 1001-2093-3018 장* ]
        </p>
        <button
          type="button"
          onClick={() => void handleCopy()}
          className="electron-no-drag shrink-0 self-center rounded border border-emerald-400/55 bg-emerald-950/70 px-3 py-1.5 text-[11px] font-semibold text-emerald-200 shadow-[0_0_18px_rgba(62,207,110,0.28)] transition hover:border-emerald-300/75 hover:bg-emerald-900/55 hover:shadow-[0_0_26px_rgba(62,207,110,0.38)] sm:self-auto"
        >
          [계좌 복사]
        </button>
      </div>
    </div>
  );
}
