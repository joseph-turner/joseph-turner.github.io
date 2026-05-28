import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

function getBlogSlug(post: BlogPost): string {
  const rawSlug = post.data.slug ?? post.slug ?? post.id;
  const slug = String(rawSlug)
    .replace(/\.(md|mdx)$/i, '')
    .split('/')
    .filter(Boolean)
    .pop();

  return slug ?? String(rawSlug);
}

export function getBlogPath(post: BlogPost): string {
  return `/blog/${getBlogSlug(post)}`;
}

export { getBlogSlug };

export function sortBlogPostsByDateDesc(
  a: BlogPost,
  b: BlogPost
): number {
  return b.data.date.getTime() - a.data.date.getTime();
}
