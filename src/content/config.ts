import { z } from 'zod';
import { defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  date: z.string(), // stored as ISO string
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
});

export const collections = {
  blog: defineCollection({
    schema: blogSchema,
  }),
};
