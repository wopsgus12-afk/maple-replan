import Link from "next/link";
import { getRelatedGuides } from "@/lib/relatedGuides";
import { guidePath } from "@/lib/site";

type Props = {
  currentSlug: string;
};

export function RelatedGuides({ currentSlug }: Props) {
  const related = getRelatedGuides(currentSlug, 3);
  if (related.length === 0) return null;

  return (
    <section
      aria-label="연관 가이드"
      className="mx-auto mt-10 max-w-2xl border-t border-maple-border/50 px-4 pt-6"
    >
      <h2 className="mb-3 text-sm font-semibold text-maple-gold">연관 가이드</h2>
      <ul className="divide-y divide-maple-border/40 rounded-lg border border-maple-border/70">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={guidePath(post.slug)}
              className="block truncate px-3 py-2.5 text-sm text-gray-100 hover:bg-maple-panel/60 hover:text-maple-gold"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-xs">
        <Link href="/guide/" className="text-maple-muted hover:text-maple-gold hover:underline">
          가이드 목록으로 →
        </Link>
      </p>
    </section>
  );
}
