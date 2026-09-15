<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import ContactForm from './ContactForm.svelte';
	import { experience, education } from '$lib/profile';
	import WorkHighlights from './WorkHighlights.svelte';
	export let turnstileSiteKey = '';
	export let initialTopic = '';
	let selectedTopic = initialTopic;
	$: selectedTopic = initialTopic;
</script>

<main id="top">
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-layout shell">
			<div class="hero-copy">
				<p class="eyebrow hero-eyebrow"><span class="small-rule"></span> Technology & operations</p>
				<h1 id="hero-title">Better systems.<br />Stronger <em>operations.</em></h1>
				<p class="hero-intro">
					I’m Jason Weber. I help organizations improve how work gets done—with practical technology
					decisions, clearer processes, and useful software.
				</p>
				<div class="actions">
					<a class="button button-rust" href="#work"
						>Explore my work <span aria-hidden="true">↓</span></a
					><a class="text-link" href="#work-together"
						>Work with me <span aria-hidden="true">↗</span></a
					>
				</div>
				<p class="hero-footnote">Business experience. Technical curiosity. Hands-on ownership.</p>
			</div>
			<figure class="hero-portrait">
				<div class="portrait-frame">
					<img
						src="/images/jason-canyon-800.webp"
						srcset="/images/jason-canyon-480.webp 480w, /images/jason-canyon-800.webp 800w, /images/jason-canyon-1200.webp 1200w"
						sizes="(max-width: 760px) calc(100vw - 48px), 40vw"
						width="2208"
						height="2944"
						fetchpriority="high"
						alt="Jason Weber smiling during a canyon expedition"
					/><span class="portrait-corner" aria-hidden="true">JW /</span>
				</div>
				<figcaption>
					<span>Curiosity carries into the field.</span><a href="#about">A little about me ↗</a>
				</figcaption>
			</figure>
		</div>
	</section>
	<section class="selected-work shell" id="work" aria-labelledby="work-title">
		<div class="work-heading">
			<div>
				<p class="eyebrow">01 / Selected work</p>
				<h2 id="work-title">A few examples.</h2>
			</div>
			<a class="text-link" href={resolve('/work')}
				>View all work <span aria-hidden="true">↗</span></a
			>
		</div>
		<WorkHighlights />
	</section>
	<section class="work-together section-pad" id="work-together" aria-labelledby="together-title">
		<div class="shell">
			<div class="section-heading">
				<div>
					<p class="eyebrow">02 / Work with me</p>
					<h2 id="together-title">Good work starts<br />with a conversation.</h2>
				</div>
				<p>
					A role to take ownership of, or a specific problem to work through. Here’s where my
					experience can help.
				</p>
			</div>
			<div class="engagement-grid">
				<article>
					<span class="engagement-number">01</span>
					<p class="eyebrow">For organizations hiring</p>
					<h3>Technology &<br />operations leadership.</h3>
					<p>Connecting business needs, technical decisions, and the people doing the work.</p>
					<ul>
						<li>Day-to-day systems and process improvement</li>
						<li>Technology planning and implementation</li>
						<li>Clear communication across technical and operational teams</li>
					</ul>
					<a
						class="button button-light"
						href="#contact"
						on:click={() => (selectedTopic = 'Leadership opportunity')}
						>Discuss a leadership role <span aria-hidden="true">↗</span></a
					>
					<a class="text-link resume-link" href={asset('/Jason-Weber-Resume.pdf')} download
						>Download my résumé <span>PDF ↓</span></a
					>
				</article>
				<article>
					<span class="engagement-number">02</span>
					<p class="eyebrow">For a specific challenge</p>
					<h3>Consulting &<br />practical software.</h3>
					<p>Bring a workflow, an aging system, or an idea that needs a useful next step.</p>
					<ul>
						<li>Workflow review → priorities and a practical plan</li>
						<li>Systems assessment → options and recommendations</li>
						<li>Focused software → a tool built around the actual work</li>
					</ul>
					<a
						class="button button-light"
						href="#contact"
						on:click={() => (selectedTopic = 'Consulting or collaboration')}
						>Discuss a project <span aria-hidden="true">↗</span></a
					>
				</article>
			</div>
		</div>
	</section>
	<section class="about section-pad shell" id="about" aria-labelledby="about-title">
		<div class="about-layout">
			<div>
				<p class="eyebrow">03 / A little background</p>
				<h2 id="about-title">An unconventional path.<br />A practical <em>perspective.</em></h2>
				<p class="about-lead">
					I’ve worked in kitchens, classrooms, investment technology, and industrial operations.
					Each setting taught me something about people, systems, and taking responsibility.
				</p>
				<p>
					Running a private-chef business meant owning the whole process, from the first
					conversation to the final invoice. Teaching philosophy meant making difficult ideas
					understandable. Today, I bring that same attention to technology and operations.
				</p>
				<p>
					Outside work, I explore deserts, make photographs, write, and build tools for the field.
					That work lives at <a
						class="inline-link"
						href="https://mrcrowmeister.com"
						target="_blank"
						rel="noreferrer">Mr. Crowmeister ↗</a
					>.
				</p>
			</div>
			<aside class="approach-note" id="approach">
				<p class="eyebrow">How I approach the work</p>
				<ol>
					<li>
						<h3>Understand what’s happening.</h3>
						<p>Trace the bottlenecks and unclear ownership before choosing a tool.</p>
					</li>
					<li>
						<h3>Make the next step clear.</h3>
						<p>Turn technical detail into decisions a team can act on.</p>
					</li>
					<li>
						<h3>Leave it in good hands.</h3>
						<p>Build for the next person, with useful documentation and maintainable systems.</p>
					</li>
				</ol>
			</aside>
		</div>
		<div class="experience-block" id="experience">
			<div class="subsection-heading">
				<h3>Experience</h3>
				<a
					class="text-link"
					href="https://www.linkedin.com/in/jason-weber-data/"
					target="_blank"
					rel="noreferrer">Connect on LinkedIn ↗</a
				>
			</div>
			{#each experience as item (item.company)}<article class="experience-row">
					<p class="experience-date">{item.period}</p>
					<div>
						<h4>{item.role}</h4>
						<p class="experience-company">{item.company}</p>
					</div>
					<p>{item.description}</p>
				</article>{/each}
		</div>
		<details class="education">
			<summary>Education & field training <span aria-hidden="true">+</span></summary>
			<div class="education-grid">
				{#each education as item (item.title)}<article>
						<p class="eyebrow">{item.year}</p>
						<h4>{item.title}</h4>
						<p>{item.institution}</p>
					</article>{/each}
			</div>
		</details>
	</section>
	<section class="contact section-pad" id="contact" aria-labelledby="contact-title">
		<div class="contact-layout shell">
			<div class="contact-intro">
				<p class="eyebrow">04 / Let’s talk</p>
				<h2 id="contact-title">Tell me what<br />you have <em>in mind.</em></h2>
				<p>
					A leadership opportunity, a system that needs attention, or a useful thing you’d like to
					build.
				</p>
				<p>Share a little context and we can work out the next step.</p>
				<a
					class="text-link"
					href="https://www.linkedin.com/in/jason-weber-data/"
					target="_blank"
					rel="noreferrer">Connect on LinkedIn ↗</a
				>
				<a class="contact-email" href="mailto:Jason@JasonWeber.me">Jason@JasonWeber.me ↗</a>
				<p class="location-note">
					Based in St. Charles, Illinois.<br />Open to remote work and relocation to the western
					U.S.
				</p>
			</div>
			<ContactForm siteKey={turnstileSiteKey} bind:topic={selectedTopic} />
		</div>
	</section>
</main>
