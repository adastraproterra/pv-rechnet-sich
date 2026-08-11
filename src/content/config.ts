import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const artikel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artikel" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    about: z.array(z.string()).default([]),
  }),
});

export const collections = { artikel };
