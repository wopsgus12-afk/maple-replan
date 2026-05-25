/** gg-pass.com 루트 — 추후 글로벌 로블록스 허브 대문 */
export default function SiteHomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-maple-muted">
        GG Pass
      </p>
      <h1 className="text-2xl font-bold text-maple-gold sm:text-3xl">
        글로벌 로블록스 서비스 허브
      </h1>
      <p className="text-sm leading-relaxed text-maple-muted">
        메이플스토리 재획 정산 도구는 아래에서 이용할 수 있습니다. 다른 게임 서비스는
        준비 중입니다.
      </p>
      <a
        href="/maple/"
        className="rounded-lg border border-maple-gold/60 bg-maple-panel px-6 py-3 text-sm font-semibold text-maple-gold transition hover:border-maple-gold hover:bg-maple-panel/80"
      >
        메이플 재획 정산 →
      </a>
    </main>
  );
}
