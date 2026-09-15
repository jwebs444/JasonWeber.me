import { error } from '@sveltejs/kit';
import { findWorkStory, workStories } from '$lib/stories';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;
export const entries: EntryGenerator = () => workStories.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const story = findWorkStory(params.slug);
	if (!story) error(404, 'This work story could not be found.');
	return { story };
};
