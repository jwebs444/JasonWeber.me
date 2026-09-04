<script lang="ts">
	import type { FeaturedProject } from '$lib/projects';

	export let project: FeaturedProject;
</script>

<article class="project-card">
	<header class="project-card__header">
		<p class="eyebrow">{project.category}</p>
		<h4>{project.title}</h4>
	</header>

	<p class="project-summary">{project.summary}</p>

	<ul class="project-highlights">
		{#each project.highlights as highlight (highlight)}
			<li>{highlight}</li>
		{/each}
	</ul>
	{#if project.image}
		<details class="project-proof">
			<summary>See the working map</summary>
			<figure>
				<img
					src={project.image.src}
					alt={project.image.alt}
					width="1440"
					height="1000"
					loading="lazy"
				/>
				<figcaption>{project.image.caption}</figcaption>
			</figure>
		</details>
	{/if}

	<footer class="project-card__footer">
		<p>{project.proof}</p>
		<!-- eslint-disable svelte/no-navigation-without-resolve -- URL is an external project link. -->
		<a
			href={project.href}
			target="_blank"
			rel="noreferrer"
			aria-label={`${project.linkLabel}: ${project.title}`}
		>
			{project.linkLabel} <span aria-hidden="true">↗</span>
		</a>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</footer>
</article>
