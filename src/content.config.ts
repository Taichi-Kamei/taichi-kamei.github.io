import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    priority: z.number().default(0),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    priority: z.number().default(0),
  }),
});

export const collections = { projects, work };
