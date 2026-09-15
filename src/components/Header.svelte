<script lang="ts">
	import { resolve, asset } from '$app/paths';
	let sectionMenu: HTMLDetailsElement;
</script>

<a class="skip-link" href="#top">Skip to content</a>
<header class="site-header">
	<div class="header-inner shell">
		<a class="wordmark" href={resolve('/')} aria-label="Jason Weber home"
			><img
				class="wordmark-icon"
				src={asset('/favicon-jw.svg')}
				width="52"
				height="52"
				alt=""
			/><span>Jason Weber<small>Technology & operations</small></span></a
		>
		<nav class="desktop-nav" aria-label="Primary navigation">
			<a href={resolve('/#work')}>Selected work</a><a href={resolve('/#about')}>About</a><a
				href={resolve('/#experience')}>Experience</a
			>
		</nav>
		<a class="header-cta" href={resolve('/#work-together')}
			>Work with me <span aria-hidden="true">↗</span></a
		>
		<details class="section-menu" bind:this={sectionMenu}>
			<summary>Menu <span aria-hidden="true">+</span></summary>
			<nav aria-label="Mobile navigation">
				<a href={resolve('/#work')} on:click={() => (sectionMenu.open = false)}>Selected work</a><a
					href={resolve('/#about')}
					on:click={() => (sectionMenu.open = false)}>About</a
				><a href={resolve('/#experience')} on:click={() => (sectionMenu.open = false)}>Experience</a
				><a href={resolve('/#work-together')} on:click={() => (sectionMenu.open = false)}
					>Work with me</a
				><a href={resolve('/#contact')} on:click={() => (sectionMenu.open = false)}>Contact</a>
			</nav>
		</details>
	</div>
</header>
