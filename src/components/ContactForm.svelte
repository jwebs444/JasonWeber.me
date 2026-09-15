<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { resolve } from '$app/paths';
	import { inquiryTopics } from '$lib/inquiry';
	export let siteKey = '';
	export let topic = '';
	let state: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
	let message = '';
	let securityState: 'loading' | 'ready' | 'error' = 'loading';
	let securityMessage = 'Preparing a security check…';
	let widgetId: string | undefined;
	let successHeading: HTMLHeadingElement;
	let statusElement: HTMLParagraphElement;
	function resetSecurity() {
		if (widgetId === undefined) return;
		securityState = 'loading';
		securityMessage = 'Preparing a new security check…';
		window.turnstile?.reset(widgetId);
	}
	onMount(() => {
		if (!siteKey) return;
		let cancelled = false;
		let attempts = 0;
		let timer: ReturnType<typeof setTimeout> | undefined;
		const render = () => {
			if (cancelled) return;
			if (!window.turnstile?.render) {
				if (++attempts >= 150) {
					securityState = 'error';
					securityMessage =
						'The security check could not load. Refresh the page or contact me on LinkedIn.';
					return;
				}
				timer = setTimeout(render, 100);
				return;
			}
			try {
				widgetId = window.turnstile.render('#inquiry-turnstile', {
					sitekey: siteKey,
					action: 'portfolio-inquiry',
					theme: 'light',
					size: 'flexible',
					appearance: 'interaction-only',
					callback: () => {
						securityState = 'ready';
						securityMessage = 'Security check complete.';
					},
					'error-callback': () => {
						securityState = 'error';
						securityMessage = 'The security check failed. Please retry or contact me on LinkedIn.';
					},
					'expired-callback': resetSecurity,
					'timeout-callback': resetSecurity
				});
			} catch {
				securityState = 'error';
				securityMessage =
					'The security check could not load. Refresh the page or contact me on LinkedIn.';
			}
		};
		render();
		return () => {
			cancelled = true;
			if (timer) clearTimeout(timer);
			if (widgetId !== undefined) window.turnstile?.remove(widgetId);
		};
	});
	async function submitInquiry(event: SubmitEvent) {
		event.preventDefault();
		if (state === 'submitting') return;
		if (securityState !== 'ready') {
			state = 'error';
			message = 'Please wait for the security check to complete, then send your message again.';
			return;
		}
		const form = event.currentTarget as HTMLFormElement;
		state = 'submitting';
		message = '';
		try {
			const response = await fetch(resolve('/api/inquiry'), {
				method: 'POST',
				body: new FormData(form)
			});
			const result = (await response.json()) as { ok: boolean; message: string };
			message = result.message;
			state = response.ok && result.ok ? 'success' : 'error';
			if (state === 'success') {
				if (widgetId !== undefined) window.turnstile?.remove(widgetId);
				widgetId = undefined;
				await tick();
				successHeading?.focus();
			}
		} catch {
			state = 'error';
			message =
				'Your message could not be sent. Please try again shortly or contact me on LinkedIn.';
		} finally {
			if (state !== 'success') {
				resetSecurity();
				await tick();
				statusElement?.focus();
			}
		}
	}
</script>

{#if state === 'success'}
	<div class="inquiry-success" role="status">
		<span class="success-mark" aria-hidden="true">✓</span>
		<p class="eyebrow">Message received</p>
		<h3 tabindex="-1" bind:this={successHeading}>Thanks for getting in touch.</h3>
		<p>{message} I’ll respond as soon as I can.</p>
	</div>
{:else}
	<form
		class="inquiry-form"
		method="POST"
		action={resolve('/api/inquiry')}
		on:submit={submitInquiry}
		aria-busy={state === 'submitting'}
	>
		<div class="form-field">
			<label for="inquiry-name">Your name</label><input
				id="inquiry-name"
				name="name"
				autocomplete="name"
				maxlength="100"
				required
			/>
		</div>
		<div class="form-field">
			<label for="inquiry-email">Email address</label><input
				id="inquiry-email"
				name="email"
				type="email"
				autocomplete="email"
				maxlength="254"
				required
			/>
		</div>
		<div class="form-field">
			<label for="inquiry-topic">I’d like to discuss <span>optional</span></label><select
				id="inquiry-topic"
				name="topic"
				bind:value={topic}
				><option value="">Choose a topic</option>{#each inquiryTopics as option (option)}<option
						value={option}>{option}</option
					>{/each}</select
			>
		</div>
		<div class="form-field">
			<label for="inquiry-organization">Organization <span>optional</span></label><input
				id="inquiry-organization"
				name="organization"
				autocomplete="organization"
				maxlength="120"
			/>
		</div>
		<div class="form-field form-wide">
			<label for="inquiry-message">What do you have in mind?</label><textarea
				id="inquiry-message"
				name="message"
				rows="4"
				minlength="20"
				maxlength="4000"
				aria-describedby="message-hint"
				required></textarea>
			<p class="field-hint" id="message-hint">
				A little about the role, project, or problem. 20–4,000 characters.
			</p>
		</div>
		<div class="bot-trap" aria-hidden="true">
			<label for="inquiry-website">Website</label><input
				id="inquiry-website"
				name="website"
				tabindex="-1"
				autocomplete="off"
			/>
		</div>
		{#if siteKey}
			<div class="security-check form-wide">
				<div id="inquiry-turnstile"></div>
				<p class:error-text={securityState === 'error'} role="status">{securityMessage}</p>
				{#if securityState === 'error' && widgetId !== undefined}<button
						type="button"
						class="text-button"
						on:click={resetSecurity}>Retry security check</button
					>{/if}
			</div>
		{:else}
			<p class="form-wide error-text" role="status">
				The form is temporarily unavailable. You can reach me on <a
					href="https://www.linkedin.com/in/jason-weber-data/">LinkedIn</a
				>.
			</p>
		{/if}
		<div class="form-footer form-wide">
			<p>Your details are used only to reply.</p>
			<button class="button button-dark" type="submit" disabled={state === 'submitting' || !siteKey}
				>{state === 'submitting' ? 'Sending…' : 'Send message'}
				<span aria-hidden="true">↗</span></button
			>
		</div>
		{#if message}<p
				class="form-wide form-status error-text"
				role="alert"
				tabindex="-1"
				bind:this={statusElement}
			>
				{message}
			</p>{/if}
		<noscript
			><p class="form-wide">
				JavaScript is needed for the security check. You can also contact me on LinkedIn.
			</p></noscript
		>
	</form>
{/if}
