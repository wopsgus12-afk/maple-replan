import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 메이플 재획 정산",
  description:
    "메이플 재획 정산 도구의 개인정보처리방침. 서버 저장 없이 localStorage만 사용하며 Google AdSense 쿠키 정책을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <nav className="mb-6">
        <Link href="/" className="text-xs text-maple-muted hover:text-maple-gold">
          ← 메인으로
        </Link>
      </nav>
      <article>
        <h1 className="mb-6 text-2xl font-bold text-maple-gold">개인정보처리방침</h1>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">1. 수집하는 정보</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            본 서비스(메이플 재획 정산)는 회원가입·로그인 기능을 제공하지 않으며, 사용자의
            개인정보를 서버에 저장·전송하지 않습니다. 사냥 기록, 타이머 상태, 메소 입력값 등
            모든 데이터는 사용자 브라우저의 localStorage에만 저장됩니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">2. localStorage 사용</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            저장 키는 maple-replan-v1이며, 재획 정산에 필요한 설정과 기록만 포함합니다. 사용자가
            브라우저 데이터를 삭제하거나 &apos;전체 초기화&apos;를 실행하면 해당 정보는 즉시
            제거됩니다. 당사는 localStorage 내용에 접근할 수 없습니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">3. Google AdSense 및 쿠키</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            본 사이트는 Google AdSense 광고를 게재할 수 있으며, Google 및 제3자 공급업체는
            사용자의 방문 기록 등을 바탕으로 맞춤 광고를 제공하기 위해
            쿠키(광고 식별용 작은 텍스트 파일)를 사용할 수 있습니다. Google의 광고 쿠키 사용에 대한
            자세한 내용은 Google 개인정보처리방침 및 광고 설정 페이지를 참고하세요. 사용자는 브라우저 설정에서
            쿠키 저장을 거부하거나 Google 광고 설정에서 맞춤 광고를 끌 수 있습니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">4. 제3자 제공 및 국외 이전</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            본 서비스는 사용자 사냥 기록을 제3자에게 판매·제공하지 않습니다. Google AdSense 등
            광고·분석 서비스가 쿠키를 통해 수집하는 정보는 해당 사업자의 정책에 따르며, 당사
            서버에는 저장되지 않습니다.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold text-maple-accent">5. 문의</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            개인정보 관련 문의: contact@example.com (운영자 이메일 — 실제 연락처로 교체 예정)
          </p>
        </section>

        <p className="text-xs text-maple-muted">시행일: 2026년 5월 24일</p>
      </article>
    </main>
  );
}
