import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

import {
  getBlogPath,
  sortBlogPostsByDateDesc,
} from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sortedPosts = [...posts].sort(sortBlogPostsByDateDesc);

  return rss({
    description:
      'Frontend development insights and career updates',
    items: sortedPosts.map((post) => ({
      description: post.data.description,
      link: getBlogPath(post),
      pubDate: post.data.date,
      title: post.data.title,
    })),
    site: context?.site ?? 'https://joseph-turner.github.io',
    title: "Joseph's Blog",
    trailingSlash: false,
  });
}
