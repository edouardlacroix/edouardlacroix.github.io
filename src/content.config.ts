import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { toolSchema } from './lib/tools';

const tools = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/tools' }),
  schema: toolSchema,
});

export const collections = { tools };
