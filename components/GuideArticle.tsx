import Link from "next/link";
import type { GuidePost } from "@/lib/seoPosts";
import type { Locale } from "@/lib/locale";
import { guideIndexPath } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";
import { GuideSectionContent } from "./GuideSectionContent";
import { GuideRecommendButton } from "./GuideRecommendButton";

type Props = {
  post: GuidePost;
  locale?: Locale;
  backHref?: string;
  backLabel?: string;
  listCtaLabel?: string;
};

export function GuideArticle({
  post,
  locale = "ko",
  backHref,
  backLabel,
  listCtaLabel,
}: Props) {
  const t = ui(locale);
  const href = backHref ?? guideIndexPath(locale);
  const back = backLabel ?? t.guideBackList;
  const cta = listCtaLabel ?? t.guideListCta;

  return (
    <article className="mx-auto max-w-2xl px-4 py-8">
      <nav className="mb-6">
        <Link href={href} className="text-xs text-maple-muted hover:text-maple-gold">
          {back}
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
            <h2 className="mb-3 text-xl font-bold text-maple-accent sm:text-2xl">
              {section.heading}
            </h2>
            <GuideSectionContent section={section} />
          </section>
        ))}
      </div>
      <div className="mt-10 space-y-4 border-t border-maple-border/50 pt-6">
        <GuideRecommendButton slug={post.slug} locale={locale} />
        <div className="text-center">
          <Link
            href={href}
            className="inline-block rounded-lg border border-maple-gold/50 bg-maple-gold/10 px-4 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/20"
          >
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
