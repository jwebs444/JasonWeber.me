<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="site-footer">
	<div class="footer-inner shell">
		<div>
			<a class="footer-name" href={resolve('/')}>Jason Weber<span aria-hidden="true">↗</span></a>
			<p>Thoughtful systems. Useful work.</p>
		</div>
		<nav aria-label="Footer navigation">
			<a href={resolve('/#contact')}>Contact</a><a
				href="https://www.linkedin.com/in/jason-weber-data/"
				target="_blank"
				rel="noreferrer">LinkedIn ↗</a
			><a href="https://github.com/jwebs444" target="_blank" rel="noreferrer">GitHub ↗</a><a
				href="https://mrcrowmeister.com"
				target="_blank"
				rel="noreferrer">In the field ↗</a
			>
		</nav>
	</div>
</footer>
