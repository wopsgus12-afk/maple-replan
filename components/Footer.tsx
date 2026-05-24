import Link from "next/link";
import { DonationAccountBox } from "./DonationAccountBox";
import { GUIDE_POSTS } from "@/lib/seoPosts";

/** Legal links — rendered at the bottom of every main tab. */
export function GlobalFooter() {
  return (
    <footer className="mt-6 border-t border-maple-border/50 pt-4">
      <nav
        className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs"
        aria-label="법적 고지"
      >
        <a
          href="/privacy"
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          개인정보처리방침
        </a>
        <span className="hidden text-maple-border sm:inline" aria-hidden>
          |
        </span>
        <a
          href="/terms"
          className="font-medium text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
        >
          이용약관
        </a>
      </nav>
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
                href={`/guide/${post.slug}`}
                className="block rounded border border-maple-border/60 bg-maple-panel/40 px-3 py-2 text-[11px] leading-snug text-maple-muted transition hover:border-maple-gold/50 hover:text-maple-gold"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <DonationAccountBox />
    </footer>
  );
}
