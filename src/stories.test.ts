import { describe, expect, it } from 'vitest';
import { load, entries } from './routes/work/[slug]/+page';
import { workStories } from './lib/stories';
import type { PageLoadEvent } from './routes/work/[slug]/$types';

describe('work story routes', () => {
	it('resolves every generated route to its own story', async () => {
		const routes = await entries();
		expect(routes).toHaveLength(workStories.length);
		for (const { slug } of routes) {
			const result = await load({ params: { slug } } as PageLoadEvent);
			expect(result).toEqual({ story: workStories.find((story) => story.slug === slug) });
		}
	});
	it('returns a 404 for an unknown story', () => {
		expect(() => load({ params: { slug: 'missing' } } as PageLoadEvent)).toThrow();
		try {
			load({ params: { slug: 'missing' } } as PageLoadEvent);
		} catch (error) {
			expect(error).toMatchObject({ status: 404 });
		}
	});
});
