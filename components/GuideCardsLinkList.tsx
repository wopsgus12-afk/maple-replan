import Link from "next/link";
import { GUIDE_POSTS } from "@/lib/seoPosts";
import { guidePath } from "@/lib/site";

/** Server-friendly guide list linking to static /guide/[slug] pages. */
export function GuideCardsLinkList() {
  return (
    <section aria-label="재획 가이드 목록" className="mt-6">
      <h2 className="mb-2 text-sm font-semibold text-maple-accent">
        주제별 심화 가이드
      </h2>
      <ul className="space-y-2">
        {GUIDE_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={guidePath(post.slug)}
              className="block w-full rounded-lg border border-maple-border bg-maple-panel/60 p-3 text-left transition hover:border-maple-gold/60 hover:bg-maple-panel"
            >
              <h3 className="text-base font-semibold leading-snug text-maple-gold">
                {post.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-maple-muted">
                {post.description}
              </p>
              <span className="mt-2 inline-block text-[10px] text-maple-accent">
                자세히 읽기 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
