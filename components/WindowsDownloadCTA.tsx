import { WINDOWS_INSTALLER_RELEASE_URL } from "@/lib/download";

export function WindowsDownloadCTA() {
  return (
    <section
      aria-label="Windows 프로그램 다운로드"
      className="mb-4 rounded-xl border border-maple-gold/35 bg-gradient-to-b from-maple-panel/95 to-maple-bg/80 p-4 shadow-maple"
    >
      <a
        href={WINDOWS_INSTALLER_RELEASE_URL}
        download="maple-replan-setup-0.1.0.exe"
        rel="noopener noreferrer"
        className="electron-no-drag flex w-full items-center justify-center gap-2 rounded-lg border border-maple-gold/60 bg-gradient-to-r from-maple-accent/25 via-maple-panel to-maple-accent/15 px-4 py-3.5 text-center text-sm font-bold tracking-tight text-maple-gold shadow-[0_0_24px_rgba(62,207,110,0.12)] transition hover:border-maple-gold hover:from-maple-accent/35 hover:to-maple-accent/20 hover:shadow-[0_0_28px_rgba(212,168,75,0.18)] active:scale-[0.99] sm:text-base"
      >
        <span aria-hidden className="text-lg">
          ⬇
        </span>
        메이플 재획 정산기 Windows 프로그램 다운로드
      </a>
      <p className="mt-3 text-center text-[11px] leading-relaxed text-maple-muted sm:text-xs">
        오버레이 기능은 Windows 앱 버전에서 정식 지원됩니다. 설치 파일은 GitHub
        Releases에서 제공됩니다.
      </p>
    </section>
  );
}
