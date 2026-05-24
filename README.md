# Define AI — Studio site

The website for **Define AI**, a senior advisory studio that figures out what
AI should actually do for a business, then designs, builds, and hands over the
systems that ship it.

Built as a design-forward, content-real studio site — warm "Liquid Light" theme
on the canonical `/` route, a retained `/v2` design experiment for the cool
glass-on-water theme, real case studies, a working admin-driven Journal, and
all the SEO surfaces a real studio site needs.

## Stack

- **Next.js 16** (App Router, React 19) — using Next 16's new `proxy.ts`
  convention for the admin gate.
- **Tailwind v4** — CSS-first config with OKLCH design tokens.
- **motion** (Framer Motion successor) + custom WebGL2 caustics shader.
- **Lenis** for smooth scroll.
- **Supabase** for journal storage (single `journal_posts` table).
- **react-markdown** for journal post rendering.

## Routes

| Route                  | What it is                                                 |
| ---------------------- | ---------------------------------------------------------- |
| `/`                    | Canonical homepage — Define AI, warm Liquid Light theme.   |
| `/work`                | Six case-study index.                                      |
| `/work/[slug]`         | Individual case-study page.                                |
| `/studio`              | Studio principles, engagement shapes, founder.             |
| `/journal`             | Public journal index (Supabase-backed).                    |
| `/journal/[slug]`      | Public journal post detail.                                |
| `/admin/login`         | Single-password admin gate.                                |
| `/admin/journal`       | Authenticated post list.                                   |
| `/admin/journal/new`   | New post editor with live markdown preview.                |
| `/admin/journal/[id]`  | Edit existing post.                                        |
| `/api/journal`         | `GET` list, `POST` create (auth).                          |
| `/api/journal/[id]`    | `GET`, `PATCH` (auth), `DELETE` (auth).                    |
| `/api/admin/login`     | `POST` to sign in, `DELETE` to sign out.                   |
| `/v2`                  | Retained design experiment — cool Liquid theme.            |

## Environment variables

Create `.env.local` for local development:

```bash
# Required for the Journal (admin + public)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJh…

# Required to enable /admin/* — pick something strong
ADMIN_PASSWORD=some-long-strong-password

# Optional — used by sitemap.xml + robots.txt
NEXT_PUBLIC_SITE_URL=https://defineai.studio
```

Without `SUPABASE_*`, the Journal renders an empty state and `/admin/journal`
shows a configuration banner.
Without `ADMIN_PASSWORD`, the admin gate redirects to `/admin/login?reason=disabled`.

## Develop

```bash
npm install
npm run dev
```

Site serves on `http://localhost:3000`.

## Deploy

This repo is wired to Vercel under the personal scope `shawonmajids-projects`.

```bash
vercel deploy --prod --scope shawonmajids-projects
```

Set the env vars in the Vercel project settings before the build runs, or the
journal endpoints will return 500s.

## Notes for future agents

- `proxy.ts` (Next 16 replacement for `middleware.ts`) gates `/admin/*`.
- The water shader (`components/water-canvas.tsx`) auto-detects the nearest
  `[data-theme]` ancestor — wrap a route in `<div data-theme="v2">` to swap
  palettes without any other code changes.
- All case study content lives in `lib/work.ts`. Edit there to change the
  homepage tiles, the `/work` index, and the `/work/[slug]` detail pages —
  they all read from the same module.
- The journal admin uses a single password + HMAC cookie pattern (see
  `lib/auth.ts` and `proxy.ts`). It's intentionally lightweight; for a real
  multi-author setup, swap to NextAuth or Cognito.
