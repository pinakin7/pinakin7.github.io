import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Case studies are loaded from a single JSON array file.
// The `file()` loader uses each object's `id` field as the entry id,
// which maps directly onto the /case-studies/[id] dynamic route.
const caseStudies = defineCollection({
  loader: file('src/data/case_studies.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    priority: z.number(),
    homepage_featured: z.boolean(),
    one_liner: z.string(),
    problem: z.string(),
    solution: z.string(),
    impact: z.array(z.string()),
    technical_details: z.array(z.string()),
    skills: z.array(z.string()),
    suggested_visuals: z.array(z.string()),
    recruiter_angle: z.string(),
  }),
});

export const collections = { caseStudies };
