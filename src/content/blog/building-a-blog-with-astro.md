---
title: 'Building a Blog with Astro'
date: '2025-09-17'
tags: ['astro', 'frontend', 'tutorial', 'content-collections']
description: 'Learn how to build a fully functional blog with Astro using content collections, Markdown, and a custom layout.'
slug: 'building-a-blog-with-astro'
---

Astro makes it surprisingly easy to build fast, content-driven sites — and that includes blogs. In this article, I’ll walk you through how I set up a simple, flexible blog using Astro’s Content Collections, Markdown, and a custom layout.

By the end, you’ll have:
• A /blog page that lists posts with title, date, and description
• A dynamic [slug].astro page that renders each post
• A reusable BlogPost.astro layout
• A nice developer experience with type safety from astro:content

---

## Step 1: Define the Blog Collection

Astro’s content/config.ts lets you define structured content collections. This is where we tell Astro what fields each post should have and what shape of data we expect.

```ts
// src/content/config.ts
import { z } from 'zod';
import { defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  date: z.string(), // ISO date string
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
});

export const collections = {
  blog: defineCollection({ schema: blogSchema }),
};
```

This schema gives us type-safe access to each post’s frontmatter and guarantees we won’t accidentally forget a title or date.

---

## Step 2: Create Your First Post

Astro supports Markdown and MDX. Here’s a sample hello-world.md:

```md
---
title: 'Hello, world'
date: '2025-09-17'
tags: ['intro', 'astro']
description: 'An introduction to the blog and what to expect'
slug: 'hello-world'
---

Welcome to my new blog! I'll be sharing notes about front-end development...

Each post lives under src/content/blog/. The slug is optional, but it gives you control over the final URL.
```

---

## Step 3: Build the Blog Index

The main /blog page fetches all posts from the collection, sorts them by date, and lists them:

```astro
---
// src/pages/blog.astro
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import Layout from '@layouts/Layout.astro';

const posts = (await getCollection(
  'blog'
)) as CollectionEntry<'blog'>[];
posts.sort(
  (a, b) =>
    new Date(b.data.date).getTime() -
    new Date(a.data.date).getTime()
);
---

<Layout>
  <section class="mx-auto max-w-4xl px-4 py-16">
    <h1 class="text-5xl font-extrabold">Blog</h1>

    <div class="space-y-6">
      {
        posts.map((post) => (
          <article class="group">
            <a href={`/blog/${post.slug || post.id}`}>
              <h2 class="text-2xl font-semibold">
                {post.data.title}
              </h2>
              <p class="text-sm text-gray-500">
                {new Date(post.data.date).toLocaleDateString()}
              </p>
              <p>{post.data.description}</p>
            </a>
          </article>
        ))
      }
    </div>
  </section>
</Layout>
```

This gives you a clean, simple index page.

---

## Step 4: Create the Dynamic Post Page

Astro’s file-based routing makes this straightforward:

```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';
import BlogPost from '@layouts/BlogPost.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => {
    const raw = post.data.slug ?? post.slug ?? post.id;
    const s = String(raw)
      .replace(/\.(md|mdx)$/, '')
      .split('/')
      .pop();
    return { params: { slug: s } };
  });
}

const { slug } = Astro.params;
const posts = await getCollection('blog');
const post = posts.find((p) => {
  const raw = p.data.slug ?? p.slug ?? p.id;
  const entrySlug = String(raw)
    .replace(/\.(md|mdx)$/, '')
    .split('/')
    .pop();
  return entrySlug === slug;
});

if (!post) throw new Error(`Post not found: ${slug}`);

const rendered = await (post as any).render();
const Content = rendered.Content;
---

<BlogPost frontmatter={post.data} Content={Content} />
```

This handles URL generation and fetches the right post data.

---

## Step 5: Create a Reusable Layout

Finally, a simple layout to render post content:

```astro
---
// src/layouts/BlogPost.astro
import Layout from './Layout.astro';
const { frontmatter, Content } = Astro.props;
---

<Layout>
  <article class="mx-auto max-w-3xl px-4 py-16">
    <header class="mb-6">
      <a href="/blog" class="text-sm hover:underline"
        >← Back to blog</a
      >
      <h1 class="text-4xl font-extrabold">
        {frontmatter.title}
      </h1>
      <time class="text-sm text-gray-500">
        {new Date(frontmatter.date).toLocaleDateString()}
      </time>
    </header>

    <div class="prose max-w-none dark:prose-invert">
      <Content />
    </div>
  </article>
</Layout>
```

This keeps your post pages consistent and easy to style.

---

## Why This Setup Works

- Type safety: Astro’s schema validation prevents broken builds.
- Clean URLs: Slugs ensure nice, predictable routes.
- Separation of concerns: The layout handles styling, leaving [slug].astro to focus on data fetching.
- Future-proof: Adding tags, pagination, or RSS later is straightforward.

---

## Next Steps

- Add pagination for longer blogs
- Generate an RSS feed
- Use astro:content collections to build tag/category pages
- Enhance SEO with structured data

Astro’s content collections make this kind of workflow not just possible, but delightful. If you’re looking to add a blog to an Astro site, this approach is a great foundation.

---
