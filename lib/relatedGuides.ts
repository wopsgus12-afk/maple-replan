import { GUIDE_POSTS, type GuidePost } from "@/lib/seoPosts";

/** Adjacent guides in list order (exclude current). Prefer prev/next, pad to count. */
export function getRelatedGuides(slug: string, count = 3): GuidePost[] {
  const index = GUIDE_POSTS.findIndex((post) => post.slug === slug);
  if (index < 0) return GUIDE_POSTS.slice(0, count);

  const picked: GuidePost[] = [];
  const tryAdd = (i: number) => {
    const post = GUIDE_POSTS[i];
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

  for (let i = 0; i < GUIDE_POSTS.length && picked.length < count; i++) {
    tryAdd(i);
  }

  return picked.slice(0, count);
}
