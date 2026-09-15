import { describe, expect, it } from 'vitest';
import appTemplate from './app.html?raw';
import pageSource from './routes/+page.svelte?raw';
import robots from '../static/robots.txt?raw';
import sitemap from '../static/sitemap.xml?raw';
import { workStories } from './lib/stories';

describe('search discovery contract', () => {
	it('publishes one consistent canonical profile URL', () => {
		expect(pageSource).toContain('<link rel="canonical" href="https://jasonweber.me/" />');
		expect(pageSource).toContain(
			'<meta name="robots" content="index, follow, max-image-preview:large" />'
		);
		expect(sitemap.match(/<loc>/g)).toHaveLength(2 + workStories.length);
		expect(sitemap).toContain('<loc>https://jasonweber.me/</loc>');
		expect(sitemap).toContain('<loc>https://jasonweber.me/work</loc>');
		for (const story of workStories) {
			expect(sitemap).toContain(`<loc>https://jasonweber.me/work/${story.slug}</loc>`);
		}
	});

	it('publishes cache-versioned JW tab and touch icons', () => {
		expect(appTemplate).toContain('favicon-jw.svg?v=20260915');
		expect(appTemplate).toContain('favicon-jw-32.png?v=20260915');
		expect(appTemplate).toContain('favicon-jw-16.png?v=20260915');
		expect(appTemplate).toContain('favicon.ico?v=20260915');
		expect(appTemplate).toContain('apple-touch-icon.png?v=20260915');
		expect(appTemplate).not.toContain('%sveltekit.assets%/favicon.png');
	});

	it('advertises the canonical sitemap without blocking public content', () => {
		expect(robots).toContain('Allow: /');
		expect(robots).toContain('Sitemap: https://jasonweber.me/sitemap.xml');
		expect(robots).not.toContain('Disallow: /');
	});

	it('describes the visible profile and accountable person with JSON-LD', () => {
		expect(pageSource).toContain("'@type': 'ProfilePage'");
		expect(pageSource).toContain("'@type': 'Person'");
		expect(pageSource).toContain("'@type': 'WebSite'");
		expect(pageSource).toContain("'@type': 'ItemList'");
		expect(pageSource).toContain("'https://jasonweber.me/#selected-work'");
		expect(pageSource).toContain('itemListElement: selectedWork.map');
	});
});
