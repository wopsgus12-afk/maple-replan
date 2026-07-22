import { GUIDE_POSTS, type GuidePost } from "@/lib/seoPosts";
import { EN_GUIDE_POSTS } from "@/lib/enSeoPosts";
import type { Locale } from "@/lib/locale";

function postsFor(locale: Locale): GuidePost[] {
  return locale === "en" ? EN_GUIDE_POSTS : GUIDE_POSTS;
}

/** Adjacent guides in list order (exclude current). Prefer prev/next, pad to count. */
export function getRelatedGuides(
  slug: string,
  count = 3,
  locale: Locale = "ko"
): GuidePost[] {
  const posts = postsFor(locale);
  const index = posts.findIndex((post) => post.slug === slug);
  if (index < 0) return posts.slice(0, count);

  const picked: GuidePost[] = [];
  const tryAdd = (i: number) => {
    const post = posts[i];
    if (!post || post.slug === slug) return;
    if (picked.some((p) => p.slug === post.slug)) return;
    picked.push(post);
  };

  tryAdd(index - 1);
  tryAdd(index + 1);
  tryAdd(index - 2);
  tryAdd(index + 2);
  tryAdd(index - 3);
  tryAdd(index + 3);

  for (let i = 0; i < posts.length && picked.length < count; i++) {
    tryAdd(i);
  }

  return picked.slice(0, count);
}
