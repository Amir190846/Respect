# Respect Hosting | ريسبكت هوستنق

Premium, bilingual (Arabic RTL / English) website for a hosting company: marketing landing page, client dashboard and admin dashboard, with a clean API integration layer ready to connect to a real backend.

> **Status: frontend complete, backend not included.**
> Without a configured backend (`VITE_API_URL` empty) the site runs in **Demo mode**: all data is sample data, "login" is a demo preview (not authentication), and no server control, payment or account operation really happens. Every dashboard shows a visible demo banner.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS 3 · Framer Motion · lucide-react · React Router 6

## Quick start

```bash
npm install
cp .env.example .env      # optional in demo mode
npm run dev               # http://localhost:5173
npm run build             # type-check + production build into dist/
npm run preview           # serve the production build locally
```

Requires Node 18+ (22 recommended).

## Project structure

```
src/
  config.ts              Public config from VITE_* env vars, demo-mode switch
  lib/api.ts             API layer: real fetch calls, or in-memory demo data
  data/plans.ts          SAMPLE plans/prices  (edit or load from backend)
  data/mock.ts           SAMPLE data + the response shapes the backend should return
  i18n/                  Arabic/English dictionaries, RTL handling, language switch
  auth/                  Auth context + UI route guards
  components/            Reusable UI, landing sections, dashboard shell
  pages/                 Home, Login, 404, legal, client/ and admin/ dashboards
backend/README.md        API contract + integration guide (Pterodactyl, WHMCS, Stripe, Discord)
docs/INTERNAL.md         Internal project notes (not for customers)
```

## Customising

| What | Where |
|---|---|
| Texts (AR/EN) | `src/i18n/dict.ts` |
| Plans, prices, resources | `src/data/plans.ts` (all sample values) |
| Colors / accent | `tailwind.config.js` (`accent`, `ink`) |
| Support email, Discord, status URL | `.env` (`VITE_SUPPORT_EMAIL`, `VITE_DISCORD_URL`, `VITE_STATUS_URL`) |
| Server locations page | Not shown. Enable `showLocations` in `src/config.ts` only when you have real locations |
| Terms / Privacy | Placeholder pages in `src/pages/Simple.tsx`. Add real legal text before launch |

## Connecting a real backend

1. Build the backend described in [`backend/README.md`](backend/README.md) and host it separately (GitHub Pages cannot run it).
2. Set `VITE_API_URL=https://api.your-domain.com` at build time. Demo mode switches off automatically.
3. Configure CORS on the backend for your frontend origin with credentials, and use **httpOnly, Secure, SameSite cookies** for sessions.
4. Keep all secrets (Pterodactyl, WHMCS, Stripe, Discord webhook, JWT) **only on the backend**. Anything prefixed `VITE_` is public in the browser.

Admin protection is enforced by the backend. The `RequireAuth` route guard in this repo is a convenience, not security.

## Deployment

**GitHub Pages** (frontend only)
1. Push to GitHub, then Settings → Pages → Source: *GitHub Actions*.
2. `.github/workflows/deploy.yml` builds with `VITE_BASE_PATH=/<repo-name>/` and copies `index.html` to `404.html` so deep links work.
3. Optional: set repository variable `VITE_API_URL`.

**Vercel / Netlify**: import the repo, build command `npm run build`, output `dist`. `vercel.json` / `netlify.toml` already include SPA rewrites. Leave `VITE_BASE_PATH` unset.

**Manual sub-path**: `VITE_BASE_PATH=/my-subpath/ npm run build`.

## Security notes

- No secrets in the frontend bundle. `.env.example` lists backend-only variables as comments.
- Inputs are validated client-side for UX; the backend must validate again.
- Network errors, loading, empty states and 404 are handled.
- The login page in demo mode offers preview access only and says so.

## What is and is not done

Done: landing page, AR/EN + RTL, client dashboard, admin dashboard UI, API layer with demo fallback, deployment configs, docs.
Not included: the backend, real authentication, payments, real server control, real data, real legal texts, and any claims about uptime or hardware. Add those through your backend and replace sample data.
