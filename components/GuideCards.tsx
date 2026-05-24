import Link from "next/link";
import { GUIDE_POSTS } from "@/lib/seoPosts";

type Props = {
  compact?: boolean;
};

export function GuideCards({ compact }: Props) {
  return (
    <section aria-label="재획 가이드 목록">
      {!compact && (
        <h2 className="mb-4 text-2xl font-bold text-maple-gold sm:text-3xl">재획 가이드</h2>
      )}
      <ul className={`space-y-2 ${compact ? "" : "max-h-[60vh] overflow-y-auto pr-1"}`}>
        {GUIDE_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/guide/${post.slug}`}
              className="block rounded-lg border border-maple-border bg-maple-panel/60 p-3 transition hover:border-maple-gold/60 hover:bg-maple-panel"
            >
              <h3 className="text-base font-semibold leading-snug text-maple-gold">{post.title}</h3>
              <p className="mt-1.5 line-clamp-2 text-base leading-relaxed text-maple-muted">
                {post.description}
              </p>
              <span className="mt-2 inline-block text-[10px] text-maple-accent">자세히 읽기 →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
