import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Bai viet la file Markdown hoac MDX trong src/content/blog/.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// Chu de, khong bat buoc. Slug phai co trong TOPICS o src/consts.ts.
		topic: z.enum(['quan-tri', 'ky-thuat', 'cong-nghe', 'sach']).optional(),
	}),
});

export const collections = { blog };
