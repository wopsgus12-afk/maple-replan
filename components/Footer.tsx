import Link from "next/link";
import { buildAppHref } from "@/lib/appTab";
import { DonationAccountBox } from "./DonationAccountBox";
import { FOOTER_LEGAL_SNIPPET, LEGAL_LAST_UPDATED } from "@/lib/legalContent";
import { GUIDE_POSTS } from "@/lib/seoPosts";

/** Legal links — rendered at the bottom of every main tab. */
export function GlobalFooter() {
  return (
    <footer className="mt-6 border-t border-maple-border/50 pt-4">
      <p className="mb-3 text-center text-[11px] leading-relaxed text-maple-muted">
        {FOOTER_LEGAL_SNIPPET}
      </p>
      <nav
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs"
        aria-label="법적 고지"
      >
        <Link
          href="/privacy/"
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          개인정보처리방침
        </Link>
        <span className="hidden text-maple-border sm:inline" aria-hidden>
          |
        </span>
        <Link
          href="/terms/"
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          이용약관
        </Link>
      </nav>
      <p className="mt-3 text-center text-[10px] text-maple-muted/80">
        © {new Date().getFullYear()} wopsgame · 비공식 팬 도구 · 법적 문서 최종 개정: {LEGAL_LAST_UPDATED}
      </p>
    </footer>
  );
}

/** Guide links and donations — 재획 정산 tab only. */
export function SettlementFooter() {
  return (
    <footer className="mt-6 space-y-4 border-t border-maple-border/50 pt-4">
      <section aria-label="재획 가이드 링크">
        <h2 className="mb-2 text-xs font-semibold text-maple-gold">재획 가이드</h2>
        <ul className="grid gap-2">
          {GUIDE_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={buildAppHref({ tab: "guides", article: post.slug })}
                className="block rounded border border-maple-border/60 bg-maple-panel/40 px-3 py-2 text-[11px] leading-snug text-maple-muted transition hover:border-maple-gold/50 hover:text-maple-gold"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <nav
        className="flex flex-wrap gap-x-3 gap-y-1 text-[10px]"
        aria-label="정산 탭 법적 링크"
      >
        <Link href="/privacy/" className="text-maple-muted hover:text-maple-gold hover:underline">
          개인정보처리방침
        </Link>
        <span className="text-maple-border" aria-hidden>
          |
        </span>
        <Link href="/terms/" className="text-maple-muted hover:text-maple-gold hover:underline">
          이용약관
        </Link>
      </nav>

      <DonationAccountBox />
    </footer>
  );
}
