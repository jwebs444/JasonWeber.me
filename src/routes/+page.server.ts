import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ platform, url }) => {
	const runtimeEnv = platform?.env as Record<string, string | undefined> | undefined;

	return {
		turnstileSiteKey: runtimeEnv?.PUBLIC_TURNSTILE_SITE_KEY ?? '',
		inquiryTopic:
			url.searchParams.get('inquiry') === 'leadership'
				? 'Leadership opportunity'
				: url.searchParams.get('inquiry') === 'consulting'
					? 'Consulting or collaboration'
					: ''
	};
};
