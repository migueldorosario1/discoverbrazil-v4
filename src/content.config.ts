import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		wp_id: z.number().optional(),
		tags: z.array(z.string()).optional(),
		lang: z.enum(['pt-br', 'en', 'es']).optional(),
		categoria_macro: z.string().optional(),
		hero_credit: z.string().optional(),
		hero_license: z.enum(['cc-by', 'cc-by-sa', 'public-domain', 'press-kit', 'own', 'ai-generated']).optional(),
		hero_source_url: z.string().url().optional(),
		alt: z.string().optional(),
		source_name: z.string().optional(),
		source_url: z.string().url().optional(),
		author: z.string().optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { blog };
