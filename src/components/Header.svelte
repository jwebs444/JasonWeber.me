<script lang="ts">
	let sectionMenu: HTMLDetailsElement;
</script>

<a class="skip-link" href="#top">Skip to content</a>
<header class="site-header">
	<div class="site-header__inner">
		<a class="wordmark" href="#top" aria-label="Jason Weber home">
			<span class="wordmark__mark" aria-hidden="true">JW</span>
			<span class="wordmark__text">
				<strong>Jason Weber</strong>
				<small>Technology · Operations · Software</small>
			</span>
		</a>

		<nav aria-label="Primary navigation">
			<a href="#work">Work</a>
			<a href="#experience">Experience</a>
			<a href="#approach">Approach</a>
		</nav>

		<details class="section-menu" bind:this={sectionMenu}>
			<summary>Menu</summary>
			<nav aria-label="Section navigation">
				<a href="#work" on:click={() => (sectionMenu.open = false)}>Work</a>
				<a href="#experience" on:click={() => (sectionMenu.open = false)}>Experience</a>
				<a href="#approach" on:click={() => (sectionMenu.open = false)}>About / how I work</a>
			</nav>
		</details>
		<a class="header-cta" href="#contact">Contact <span aria-hidden="true">↘</span></a>
	</div>
</header>
