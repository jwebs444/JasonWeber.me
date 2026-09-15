# JasonWeber.me

SvelteKit portfolio for technology and operations leadership, consulting, and selected software work.

## Development

```sh
npm ci
npm run dev
```

For a local visual preview of the contact form, copy `.dev.vars.example` to `.dev.vars` and restart the dev server. The public Turnstile test key works on localhost; this configuration has no email credentials and cannot deliver messages. Production retains the key in `wrangler.jsonc` and the configured Cloudflare secrets.

## Checks

```sh
npm run check
npm run test -- --run
npm run lint
npm run build
```

## Content

- `src/lib/profile.ts`: career history and education.
- `src/lib/projects.ts`: independent products and software projects.
- `src/lib/stories.ts`: case-study content and route slugs.
- `static/sitemap.xml`: homepage and case-study URLs; tests check the list against the story data.
- `static/Jason-Weber-Resume.pdf`: supplied résumé, available as a download.
- `docs/redesign-brief.md`: content sources and review notes for the redesign.

GitHub Actions deploys successful `main` builds to Cloudflare Pages. The redesign remains on its review branch until publication is approved.
