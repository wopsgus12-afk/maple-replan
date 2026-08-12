interface CoupangBannerProps {
  variant?: "horizontal" | "card" | "sidebar";
  className?: string;
}

const KEYBOARD_LINK = "https://link.coupang.com/a/f9Se0Oyelg"; // 앱코 무소음 키보드
const MOUSE_LINK = "https://link.coupang.com/a/f9SjOYhtcq"; // 제닉스 버티컬 마우스
const PAD_LINK = "https://link.coupang.com/a/f9Smtc7y8Y"; // 논슬립 장패드

export default function CoupangBanner({
  variant = "horizontal",
  className = "",
}: CoupangBannerProps) {
  if (variant === "card") {
    return (
      <aside
        className={`my-8 rounded-xl border border-amber-500/30 bg-stone-900/90 p-5 text-stone-200 shadow-xl ${className}`}
        aria-label="쿠팡 파트너스 추천"
      >
        <div className="mb-4 flex flex-col justify-between gap-1 border-b border-stone-800 pb-2 sm:flex-row sm:items-center">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
            🎮 2시간+ 연속 재획 손목/손가락 피로도 제로 세팅
          </span>
          <span className="text-[10px] text-stone-500">
            이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <a
            href={MOUSE_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col justify-between rounded-lg border border-stone-700/50 bg-stone-800/80 p-3.5 transition hover:border-amber-500/50 hover:bg-stone-700/80"
          >
            <div>
              <p className="text-sm font-bold text-stone-100 transition group-hover:text-amber-300">
                제닉스 버티컬 마우스
              </p>
              <p className="mt-1 text-xs text-stone-400">
                장시간 재획 시 손목 터널 증후군 및 꺾임 통증 방지
              </p>
            </div>
            <span className="mt-3 text-right text-xs font-semibold text-amber-400 transition-transform group-hover:translate-x-1">
              최저가 보기 →
            </span>
          </a>

          <a
            href={KEYBOARD_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col justify-between rounded-lg border border-stone-700/50 bg-stone-800/80 p-3.5 transition hover:border-amber-500/50 hover:bg-stone-700/80"
          >
            <div>
              <p className="text-sm font-bold text-stone-100 transition group-hover:text-amber-300">
                앱코 저소음 키보드
              </p>
              <p className="mt-1 text-xs text-stone-400">
                반복 스킬 키 연타 손가락 피로 최소화 및 밤샘 저소음
              </p>
            </div>
            <span className="mt-3 text-right text-xs font-semibold text-amber-400 transition-transform group-hover:translate-x-1">
              최저가 보기 →
            </span>
          </a>

          <a
            href={PAD_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col justify-between rounded-lg border border-stone-700/50 bg-stone-800/80 p-3.5 transition hover:border-amber-500/50 hover:bg-stone-700/80"
          >
            <div>
              <p className="text-sm font-bold text-stone-100 transition group-hover:text-amber-300">
                논슬립 게이밍 장패드
              </p>
              <p className="mt-1 text-xs text-stone-400">
                팔꿈치 받침 미끄럼 방지 및 쿠션감 유지
              </p>
            </div>
            <span className="mt-3 text-right text-xs font-semibold text-amber-400 transition-transform group-hover:translate-x-1">
              최저가 보기 →
            </span>
          </a>
        </div>
      </aside>
    );
  }

  // horizontal / sidebar — 가이드 하단 및 메인용
  return (
    <aside
      className={`my-6 rounded-lg border border-amber-500/20 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 p-4 text-center ${className}`}
      aria-label="쿠팡 파트너스 추천"
    >
      <p className="text-sm font-medium text-amber-200">
        🎮 2시간 재획 완주를 위한 필수 게이밍 기어! 손목 통증 완화 장비 모음
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-3">
        <a
          href={MOUSE_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded bg-amber-500 px-3 py-1.5 text-xs font-bold text-stone-950 shadow transition hover:bg-amber-400"
        >
          버티컬 마우스 보기
        </a>
        <a
          href={KEYBOARD_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded bg-amber-500 px-3 py-1.5 text-xs font-bold text-stone-950 shadow transition hover:bg-amber-400"
        >
          무소음 키보드 보기
        </a>
        <a
          href={PAD_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded bg-amber-500 px-3 py-1.5 text-xs font-bold text-stone-950 shadow transition hover:bg-amber-400"
        >
          장패드 특가 보기
        </a>
      </div>
      <p className="mt-2 text-[10px] text-stone-500">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </aside>
  );
}
