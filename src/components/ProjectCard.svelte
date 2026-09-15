<script lang="ts">
	import type { FeaturedProject } from '$lib/projects';
	export let project: FeaturedProject;
</script>

<article class="project-row">
	<div>
		<p class="eyebrow">{project.category}</p>
		<h3>{project.title}</h3>
	</div>
	<p>{project.summary}</p>
	<!-- eslint-disable svelte/no-navigation-without-resolve -- External project URL. -->
	<a
		class="text-link"
		href={project.href}
		target="_blank"
		rel="noreferrer"
		aria-label={`${project.linkLabel}: ${project.title}`}
		>{project.linkLabel} <span aria-hidden="true">↗</span></a
	>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
</article>
