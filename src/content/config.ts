import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**\/*.md", base: "./src/pages/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      draft: z.boolean().optional()
    }),
  });
  
const work = defineCollection({
    schema: z.object({
      company: z.string(),
      role: z.string(),
      dateStart: z.coerce.date(),
    }),
  });

  export const collections = {
    blog,
    work
  };

