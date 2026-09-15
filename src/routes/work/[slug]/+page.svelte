<script lang="ts">
	import { resolve } from '$app/paths';
	import WorkSequence from '../../../components/WorkSequence.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: story = data.story;
	$: canonical = `https://jasonweber.me/work/${story.slug}`;
	$: socialImage = `https://jasonweber.me${story.image?.src ?? '/og.png'}`;
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: story.title,
		description: story.summary,
		url: canonical,
		image: socialImage,
		author: { '@type': 'Person', name: 'Jason Weber', url: 'https://jasonweber.me/' }
	};
</script>

<svelte:head>
	<title>{story.client}: {story.title} | Jason Weber</title>
	<meta name="description" content={story.summary} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${story.client} | Jason Weber`} />
	<meta property="og:description" content={story.summary} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={socialImage} />
	<meta
		property="og:image:alt"
		content={story.image?.alt ?? 'Jason Weber — Technology, Operations, Software'}
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${story.client} | Jason Weber`} />
	<meta name="twitter:description" content={story.summary} />
	<meta name="twitter:image" content={socialImage} />
	<svelte:element this={"script"} type="application/ld+json"
		>{JSON.stringify(structuredData)}</svelte:element
	>
</svelte:head>

<main id="top" class="story-page">
	<header class="story-hero shell">
		<a class="text-link back-link" href={resolve('/work')}>← All work</a>
		<p class="eyebrow">{story.category} / {story.client}</p>
		<h1>{story.title}</h1>
		<p class="story-deck">{story.summary}</p>
		<dl class="story-facts">
			<div>
				<dt>My role</dt>
				<dd>{story.role}</dd>
			</div>
			<div>
				<dt>The work</dt>
				<dd>{story.proof}</dd>
			</div>
		</dl>
	</header>
	{#if story.image}
		<figure class="story-image shell">
			<img src={story.image.src} alt={story.image.alt} width="1440" height="1000" />
			<figcaption>{story.image.caption}</figcaption>
		</figure>
	{/if}
	{#if story.steps}<div class="story-sequence shell"><WorkSequence steps={story.steps} /></div>{/if}
	<div class="story-body shell">
		<aside>
			<p class="eyebrow">A closer look</p>
			<p>Jason Weber<br />Technology & operations</p>
		</aside>
		<div>
			{#each story.sections as section, index (section.title)}
				<section class="story-section" aria-labelledby={`chapter-${index}`}>
					<span class="chapter-number">0{index + 1}</span>
					<h2 id={`chapter-${index}`}>{section.title}</h2>
					<p>{section.body}</p>
				</section>
			{/each}
			{#if story.externalUrl}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- External project URL. -->
				<a class="button button-dark" href={story.externalUrl} target="_blank" rel="noreferrer"
					>Explore {story.client} <span aria-hidden="true">↗</span></a
				>
			{/if}
		</div>
	</div>
	<section class="story-contact shell">
		<p class="eyebrow">Put this experience to work</p>
		<h2>What are you working through?</h2>
		<div class="actions">
			<a class="button button-dark" href={resolve('/?inquiry=consulting#contact')}
				>Discuss a project <span aria-hidden="true">↗</span></a
			>
			<a class="text-link" href={resolve('/?inquiry=leadership#contact')}
				>Discuss a leadership role <span aria-hidden="true">↗</span></a
			>
		</div>
	</section>
</main>
