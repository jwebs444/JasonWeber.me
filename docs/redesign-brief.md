# Portfolio redesign — review brief

## Purpose

Support both technology/operations leadership opportunities and consulting engagements. Explain Jason's responsibility, judgment, and results through concrete work. Preserve the personal field identity and the ink/paper/rust palette.

## Content and evidence

- **Kresl Power:** lead with operational continuity through the JD Edwards rollout. Source: Jason's supplied Business Systems résumé and direct clarification, September 15, 2026. Hundreds of thousands of dollars refers to order value protected from potential cancellation, not a measured cost saving. Eight people trained is the sum of two New Equipment employees, the president/CEO, and five other employees. No efficiency percentage is claimed.
- **Upstart LP:** use the résumé's current title, Independent Technology Contractor. Jason supplied the sequence: data backup, restored access, legacy environment in a VM, VM backups and updating checkpoints, then phase-out of the VM and migration to a new data format. No recovery duration, downtime, or invented technical procedure is claimed.
- **Roost Atlas:** existing portfolio descriptions and the existing September 4 screenshot support the product case study. Usage, revenue, and growth are not claimed.
- **Résumé:** the supplied PDF is copied unchanged to the local preview's downloadable asset. It includes the professional email, telephone number, and location present in the original. Review it with the site before publishing.
- **Other work:** the original four additional projects remain available on the work index. Homepage search metadata matches the three visible case-study previews.

## Homepage

Introduction → three compact selected-work previews → leadership/consulting paths → background and experience → contact. The evidence banner and long homepage case-study blocks have been removed. A separate work index provides access to all case studies and additional projects.

## Behavior

A work index links to all projects. Three case-study pages share a template and have individual metadata and sitemap entries. Leadership and consulting links select a contact topic; case-study links support this through a URL parameter. Name, email, and message are required; organization and topic are optional. Turnstile and server validation remain in place. A direct professional email and LinkedIn are alternatives.

## Review before publication

- Review the voice, case-study wording, consulting offerings, and the supplied résumé as public-facing material.
- Testimonials can be added later if Jason supplies recommendations and permission to publish them; no placeholders appear on the site.
- Work remains on `codex/portfolio-redesign`. A successful push to `main` triggers deployment, so publishing requires the final review described in the implementation plan.

## Verification

- Type checking, lint, formatting, 21 unit tests, and the Cloudflare production build pass.
- Browser review covers phone, tablet, desktop, and QHD layouts; overflow checks passed at 320, 390, 768, 1024, 1440, and 2560 pixels.
- Verified the mobile menu, both inquiry paths, return links from case studies, and the local Turnstile test widget.
- All three case-study routes and the homepage return 200 with valid JSON-LD; an unknown story returns 404. The résumé download matches the supplied PDF byte for byte.
- Email success/failure, challenge rejection, optional fields, and provider rate limiting are tested with mocked providers. No live email was sent. The local `.dev.vars` configuration contains only the public test site key and cannot deliver messages.
