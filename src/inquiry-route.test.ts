import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('$env/dynamic/private', () => ({
	env: {
		TURNSTILE_SECRET_KEY: 'unit-test-secret',
		CLOUDFLARE_ACCOUNT_ID: 'unit-test-account',
		CLOUDFLARE_EMAIL_API_TOKEN: 'unit-test-token'
	}
}));

import { POST } from './routes/api/inquiry/+server';

const fetchMock = vi.fn();
function requestEvent(changes: Record<string, string> = {}) {
	const body = new FormData();
	for (const [name, value] of Object.entries({
		name: 'Test Visitor',
		email: 'VISITOR@example.com',
		message: 'I would like to discuss a business systems project.',
		'cf-turnstile-response': 'unit-test-token',
		...changes
	}))
		body.set(name, value);
	return {
		request: new Request('http://localhost/api/inquiry', { method: 'POST', body }),
		getClientAddress: () => '127.0.0.1'
	} as Parameters<typeof POST>[0];
}

beforeEach(() => {
	fetchMock.mockReset();
	vi.stubGlobal('fetch', fetchMock);
	vi.spyOn(console, 'error').mockImplementation(() => {});
});
afterEach(() => {
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

describe('inquiry delivery boundary', () => {
	it('validates the challenge before delivering an inquiry with optional fields omitted', async () => {
		fetchMock
			.mockResolvedValueOnce(Response.json({ success: true, action: 'portfolio-inquiry' }))
			.mockResolvedValueOnce(Response.json({ success: true }));
		const response = await POST(requestEvent());
		expect(response.status).toBe(200);
		expect(await response.json()).toMatchObject({ ok: true });
		expect(fetchMock).toHaveBeenCalledTimes(2);
		expect(fetchMock.mock.calls[0][0]).toBe(
			'https://challenges.cloudflare.com/turnstile/v0/siteverify'
		);
		const envelope = JSON.parse(fetchMock.mock.calls[1][1].body);
		expect(envelope.from.address).toBe('inquiries@jasonweber.me');
		expect(envelope.to).toBe('jwebs444@gmail.com');
		expect(envelope.reply_to.address).toBe('visitor@example.com');
		expect(envelope.subject).toBe('Portfolio inquiry — Other');
	});

	it('does not send mail for a challenge belonging to another action', async () => {
		fetchMock.mockResolvedValueOnce(Response.json({ success: true, action: 'another-form' }));
		expect((await POST(requestEvent())).status).toBe(400);
		expect(fetchMock).toHaveBeenCalledTimes(1);
	});

	it('does not contact providers when validation fails', async () => {
		expect((await POST(requestEvent({ email: 'invalid' }))).status).toBe(400);
		expect((await POST(requestEvent({ 'cf-turnstile-response': '' }))).status).toBe(400);
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('silently accepts the honeypot without delivering mail', async () => {
		const response = await POST(requestEvent({ website: 'spam.example' }));
		expect(await response.json()).toMatchObject({ ok: true });
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('reports provider failure instead of claiming delivery', async () => {
		fetchMock
			.mockResolvedValueOnce(Response.json({ success: true, action: 'portfolio-inquiry' }))
			.mockResolvedValueOnce(Response.json({ success: false }, { status: 503 }));
		const response = await POST(requestEvent({ topic: 'Leadership opportunity' }));
		expect(response.status).toBe(502);
		expect(await response.json()).toMatchObject({ ok: false });
	});

	it('preserves rate-limit responses for retryable provider errors', async () => {
		fetchMock
			.mockResolvedValueOnce(Response.json({ success: true, action: 'portfolio-inquiry' }))
			.mockResolvedValueOnce(Response.json({ success: false }, { status: 429 }));
		expect((await POST(requestEvent())).status).toBe(429);
	});
});
