import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | 메이플 재획 정산",
  description:
    "메이플 재획 정산 계산기 이용약관. 자발적 사용, 참고용 도구, 넥슨 공식 비연계 면책 조항을 안내합니다.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <nav className="mb-6">
        <Link href="/" className="text-xs text-maple-muted hover:text-maple-gold">
          ← 메인으로
        </Link>
      </nav>
      <article>
        <h1 className="mb-6 text-2xl font-bold text-maple-gold">이용약관</h1>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">1. 서비스 개요</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            메이플 재획 정산(이하 &apos;본 서비스&apos;)은 메이플스토리 2시간 재획(사냥) 타이머 및
            수익 정산을 돕는 웹·데스크톱 계산기 도구입니다. 사용자는 자발적으로 본 서비스를
            이용하며, 게임 플레이 및 재화 관리에 대한 최종 판단과 책임은 사용자에게 있습니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">2. 계산 결과 면책</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            본 서비스가 표시하는 메소, 시급, 누적 수익, 젬·조각 환산액 등 모든 수치는 사용자
            입력값을 바탕으로 한 참고용 계산 결과입니다. 게임 내 실제 드랍, 시세 변동, 패치,
            이벤트 등으로 인한 차이가 발생할 수 있으며, 당사는 계산 결과의 정확성·완전성을
            보증하지 않습니다. 투자·거래·아이템 구매 등 금전적 결정에 본 도구만을 근거로 삼지
            마십시오.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">3. 넥슨과의 관계</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            본 서비스는 넥슨(NEXON) 및 메이플스토리 공식 운영팀과 무관한 비공식 팬 도구입니다.
            메이플스토리, MapleStory 및 관련 상표·콘텐츠에 대한 권리는 각 권리자에게 있습니다.
            본 서비스는 넥슨의 공식 승인·후원·제휴를 받지 않습니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">4. 광고 및 제휴</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            본 서비스는 Google AdSense 등 광고를 표시할 수 있습니다. 광고 클릭·구매 등
            광고주와 사용자 간 거래는 본 서비스와 무관하며, 그에 따른 분쟁·손해에 대해 당사는
            책임지지 않습니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">5. 이용 제한</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            사용자는 본 서비스를 불법 목적·타인의 권리 침해·서비스 운영 방해 목적으로 이용해서는
            안 됩니다. 서비스는 예고 없이 변경·중단될 수 있습니다.
          </p>
        </section>

        <p className="text-xs text-maple-muted">시행일: 2026년 5월 24일</p>
      </article>
    </main>
  );
}
