<script lang="ts">
	export let steps: string[];
</script>

<ol class="work-sequence" aria-label="Sequence of work">
	{#each steps as step, index (step)}<li>
			<span aria-hidden="true">0{index + 1}</span><strong>{step}</strong>
		</li>{/each}
</ol>
