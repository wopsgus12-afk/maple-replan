import Link from "next/link";
import type { GuidePost } from "@/lib/seoPosts";

export function GuideArticle({ post }: { post: GuidePost }) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-8">
      <nav className="mb-6">
        <Link href="/" className="text-xs text-maple-muted hover:text-maple-gold">
          ← 메인으로
        </Link>
      </nav>
      <header className="mb-8 border-b border-maple-border/50 pb-6">
        <h1 className="text-2xl font-bold leading-snug text-maple-gold sm:text-3xl">
          {post.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-maple-muted">{post.description}</p>
      </header>
      <div className="space-y-8">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 text-xl font-bold text-maple-accent sm:text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-3 text-base leading-loose text-gray-200">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
