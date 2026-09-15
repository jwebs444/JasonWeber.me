<script lang="ts">
	import Main from '../components/Main.svelte';
	import { workStories, selectedWork } from '$lib/stories';
	import type { PageData } from './$types';

	export let data: PageData;

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': 'https://jasonweber.me/#website',
				url: 'https://jasonweber.me/',
				name: 'Jason Weber',
				inLanguage: 'en-US'
			},
			{
				'@type': 'ProfilePage',
				'@id': 'https://jasonweber.me/#profile',
				url: 'https://jasonweber.me/',
				name: 'Jason Weber | Technology, Operations & Software',
				description:
					'Jason Weber connects business operations, technology, and useful software. Explore his work in ERP workflows, legacy data recovery, and public web applications.',
				isPartOf: { '@id': 'https://jasonweber.me/#website' },
				mainEntity: { '@id': 'https://jasonweber.me/#jason-weber' },
				hasPart: { '@id': 'https://jasonweber.me/#selected-work' },
				inLanguage: 'en-US'
			},
			{
				'@type': 'ItemList',
				'@id': 'https://jasonweber.me/#selected-work',
				name: 'Selected work by Jason Weber',
				numberOfItems: selectedWork.length,
				itemListElement: selectedWork.map((project, index) => ({
					'@type': 'ListItem',
					position: index + 1,
					name: project.title,
					description: project.summary,
					url: `https://jasonweber.me/work/${project.slug}`
				}))
			},
			{
				'@type': 'Person',
				'@id': 'https://jasonweber.me/#jason-weber',
				name: 'Jason Weber',
				url: 'https://jasonweber.me/',
				image: 'https://jasonweber.me/images/jason-canyon.jpg',
				jobTitle: ['Technology & Operations Manager', 'Software Builder'],
				subjectOf: workStories.map((story) => ({
					'@type': 'Article',
					name: story.title,
					url: `https://jasonweber.me/work/${story.slug}`
				})),
				sameAs: ['https://www.linkedin.com/in/jason-weber-data/', 'https://github.com/jwebs444']
			}
		]
	};
</script>

<svelte:head>
	<title>Jason Weber | Technology, Operations & Software</title>
	<meta
		name="description"
		content="Jason Weber connects business operations, technology, and useful software. Explore his work in ERP workflows, legacy data recovery, and public web applications."
	/>
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta property="og:title" content="Jason Weber | Technology, Operations & Software" />
	<meta
		property="og:description"
		content="Business systems, practical software, and operations leadership. Explore Jason Weber’s work, from protecting orders through an ERP rollout to recovering legacy data."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Jason Weber" />
	<meta property="og:url" content="https://jasonweber.me/" />
	<meta property="og:image" content="https://jasonweber.me/og.png?v=02c74beb9e6a" />
	<meta property="og:image:width" content="1536" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:alt" content="Jason Weber — Technology, Operations, Software" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Jason Weber | Technology, Operations & Software" />
	<meta
		name="twitter:description"
		content="Business systems, practical software, and operations leadership. Explore Jason Weber’s work, from protecting orders through an ERP rollout to recovering legacy data."
	/>
	<meta name="twitter:image" content="https://jasonweber.me/og.png?v=02c74beb9e6a" />
	<link rel="canonical" href="https://jasonweber.me/" />
	<svelte:element this={"script"} type="application/ld+json">
		{JSON.stringify(structuredData)}
	</svelte:element>
	<link rel="preconnect" href="https://challenges.cloudflare.com" />
	<script
		src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
		defer
	></script>
</svelte:head>

<Main turnstileSiteKey={data.turnstileSiteKey} initialTopic={data.inquiryTopic} />
