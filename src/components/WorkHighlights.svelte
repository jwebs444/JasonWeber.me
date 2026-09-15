<script lang="ts">
	import { resolve } from '$app/paths';
	import { selectedWork } from '$lib/stories';
</script>

<div class="work-highlights">
	{#each selectedWork as story (story.slug)}
		<article class="work-preview">
			<p class="eyebrow">{story.client}</p>
			<h3>
				<a href={resolve('/work/[slug]', { slug: story.slug })}
					>{story.title}<span aria-hidden="true"> ↗</span></a
				>
			</h3>
			<p>{story.summary}</p>
		</article>
	{/each}
</div>
