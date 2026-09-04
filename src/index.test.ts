import { describe, expect, it } from 'vitest';

import { featuredProjects, projectGroups } from '$lib/projects';

describe('featured projects', () => {
	it('presents the five selected portfolio projects in the approved order', () => {
		expect(featuredProjects.map(({ title }) => title)).toEqual([
			'Roost Atlas',
			'PerchPoints',
			'Mr. Crowmeister',
			'Canyon Rain',
			'DungeonCrawler'
		]);
	});

	it('keeps the related public systems distinct from the focused software builds', () => {
		expect(projectGroups.map(({ id }) => id)).toEqual(['public-systems', 'software-builds']);
		expect(featuredProjects.filter(({ group }) => group === 'public-systems')).toHaveLength(3);
		expect(featuredProjects.filter(({ group }) => group === 'software-builds')).toHaveLength(2);
	});

	it('publishes verifiable details for every featured project', () => {
		for (const project of featuredProjects) {
			expect(project.href).toMatch(/^https:\/\//);
			expect(project.linkLabel).toMatch(/open|view/i);
			expect(project.highlights.length).toBeGreaterThanOrEqual(3);
			expect(project.technologies.length).toBeGreaterThanOrEqual(2);
			expect(project.proof.length).toBeGreaterThan(20);
		}
	});

	it('publishes the current PerchPoints facts and canonical destination', () => {
		const perchPoints = featuredProjects.find(({ title }) => title === 'PerchPoints');

		expect(perchPoints?.href).toBe('https://perchpoints.com');
		expect(perchPoints?.summary).toContain('429 photographs at 100 reviewed PerchPoints');
		expect(perchPoints?.summary).toContain('seven daylight-aware road trips');
		expect(perchPoints?.highlights).toContain(
			'Estimates road-trip driving time using speed limits and road geometry, alongside time planned for outings.'
		);
		expect(perchPoints?.proof).toBe('429 photographs · 100 reviewed pins · 7 Flyways');
	});
});
