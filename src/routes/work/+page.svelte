<script lang="ts">
	import { resolve } from '$app/paths';
	import WorkHighlights from '../../components/WorkHighlights.svelte';
	import ProjectCard from '../../components/ProjectCard.svelte';
	import { featuredProjects } from '$lib/projects';
</script>

<svelte:head>
	<title>Work | Jason Weber</title>
	<meta
		name="description"
		content="Business systems, data recovery, and independent software by Jason Weber. Read the case studies and explore the live projects."
	/>
	<link rel="canonical" href="https://jasonweber.me/work" />
	<meta property="og:title" content="Work | Jason Weber" />
	<meta
		property="og:description"
		content="Business systems, data recovery, and independent software. Explore Jason Weber’s case studies and live projects."
	/>
	<meta property="og:url" content="https://jasonweber.me/work" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://jasonweber.me/og.png?v=02c74beb9e6a" />
</svelte:head>

<main id="top" class="work-index shell">
	<header class="work-index-heading">
		<a class="text-link" href={resolve('/')}>← Back to home</a>
		<h1>Work.</h1>
		<p>Business systems, recovered data, and software built around real needs.</p>
	</header>
	<section aria-labelledby="case-studies-title">
		<h2 class="work-index-label" id="case-studies-title">Case studies</h2>
		<WorkHighlights />
	</section>
	<section class="project-archive" aria-labelledby="projects-title">
		<div class="subsection-heading">
			<h2 id="projects-title">Independent projects</h2>
			<p>More software, photography, and work from the field.</p>
		</div>
		{#each featuredProjects.slice(1) as project (project.title)}<ProjectCard {project} />{/each}
	</section>
</main>
