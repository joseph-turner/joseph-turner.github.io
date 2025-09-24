import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog'); // assumes you’re using content collections

  return rss({
    title: "Joseph's Blog",
    description: "Frontend development insights and career updates",
    site: context?.site ?? 'https://joseph-turner.github.io',
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
