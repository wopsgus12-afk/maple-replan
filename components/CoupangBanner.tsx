interface CoupangBannerProps {
  /** Kept for call-site compatibility — always renders the 3-card widget. */
  variant?: "horizontal" | "card" | "sidebar";
  className?: string;
}

const KEYBOARD_LINK = "https://link.coupang.com/a/f9Se0Oyelg";
const MOUSE_LINK = "https://link.coupang.com/a/f9SjOYhtcq";
const PAD_LINK = "https://link.coupang.com/a/f9Smtc7y8Y";

const MOUSE_IMG =
  "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&auto=format&fit=crop&q=80";
const KEYBOARD_IMG =
  "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&auto=format&fit=crop&q=80";
const PAD_IMG =
  "https://images.unsplash.com/photo-1616440342855-081e85a538e1?w=300&auto=format&fit=crop&q=80";

/** 공정위/쿠팡 파트너스 필수 대가성 고지 문구 (축약 금지) */
const COUPANG_DISCLOSURE =
  "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

function CoupangDisclosure({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-xs font-medium leading-relaxed break-keep text-amber-300 ${className}`}
    >
      {COUPANG_DISCLOSURE}
    </p>
  );
}

/** Coupang Partners gaming gear widget — always the 3-card product grid. */
export default function CoupangBanner({
  variant: _variant = "card",
  className = "",
}: CoupangBannerProps) {
  void _variant;

  return (
    <aside
      className={`my-4 rounded-2xl border border-amber-500/30 bg-stone-900/90 p-4 text-stone-200 shadow-2xl backdrop-blur-sm sm:my-6 sm:p-5 ${className}`}
      aria-label="쿠팡 파트너스 추천"
    >
      <CoupangDisclosure className="mb-3 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2" />
      <div className="mb-4 flex flex-col justify-between gap-2 border-b border-stone-800/80 pb-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="shrink-0 rounded-full border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-400">
            장비 추천
          </span>
          <h3 className="min-w-0 text-xs font-bold break-keep text-stone-100 sm:text-sm">
            🎮 2시간+ 연속 재획 손목/손가락 피로도 제로 세팅
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
        <a
          href={MOUSE_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group relative flex flex-col justify-between rounded-xl border border-stone-700/60 bg-stone-800/70 p-3.5 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-stone-800"
        >
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-stone-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MOUSE_IMG}
                alt="제닉스 버티컬 마우스"
                width={300}
                height={128}
                className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />
              <span className="absolute left-2 top-2 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                🚀 로켓배송
              </span>
            </div>
            <p className="line-clamp-1 text-sm font-bold text-stone-100 transition-colors group-hover:text-amber-300">
              제닉스 버티컬 마우스
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-400">
              손목 꺾임 통증 방지 인체공학 피로 완화
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-stone-700/40 pt-2">
            <span className="text-[11px] font-medium text-amber-400/90">
              손목 터널 예방
            </span>
            <span className="text-xs font-bold text-amber-400 transition-transform group-hover:translate-x-1">
              특가 확인 →
            </span>
          </div>
        </a>

        <a
          href={KEYBOARD_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group relative flex flex-col justify-between rounded-xl border border-stone-700/60 bg-stone-800/70 p-3.5 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-stone-800"
        >
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-stone-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={KEYBOARD_IMG}
                alt="앱코 저소음 키보드"
                width={300}
                height={128}
                className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />
              <span className="absolute left-2 top-2 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                🚀 로켓배송
              </span>
            </div>
            <p className="line-clamp-1 text-sm font-bold text-stone-100 transition-colors group-hover:text-amber-300">
              앱코 저소음 키보드
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-400">
              반복 스킬 연타 손가락 피로 최소화
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-stone-700/40 pt-2">
            <span className="text-[11px] font-medium text-amber-400/90">
              밤샘 무소음
            </span>
            <span className="text-xs font-bold text-amber-400 transition-transform group-hover:translate-x-1">
              특가 확인 →
            </span>
          </div>
        </a>

        <a
          href={PAD_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group relative flex flex-col justify-between rounded-xl border border-stone-700/60 bg-stone-800/70 p-3.5 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-stone-800"
        >
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-stone-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PAD_IMG}
                alt="논슬립 게이밍 장패드"
                width={300}
                height={128}
                className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />
              <span className="absolute left-2 top-2 rounded bg-blue-600 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                ★ 인기상품
              </span>
            </div>
            <p className="line-clamp-1 text-sm font-bold text-stone-100 transition-colors group-hover:text-amber-300">
              논슬립 게이밍 장패드
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-400">
              팔꿈치 받침 미끄럼 방지 및 두꺼운 쿠션감
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-stone-700/40 pt-2">
            <span className="text-[11px] font-medium text-amber-400/90">
              초대형 사이즈
            </span>
            <span className="text-xs font-bold text-amber-400 transition-transform group-hover:translate-x-1">
              특가 확인 →
            </span>
          </div>
        </a>
      </div>
      <CoupangDisclosure className="mt-4 border-t border-amber-500/30 pt-3 text-stone-300" />
    </aside>
  );
}
