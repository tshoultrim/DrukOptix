# DrukOptix — AI for Optical Excellence

Modern corporate website for DrukOptix, an AI solutions company for the optical
and vision care industry.

## Tech stack

- **Framework:** TanStack Start v1 (React 19 + Vite 7, file-based routing, SSR)
- **Styling:** Tailwind CSS v4 + shadcn/ui, Inter font, custom blue/white design tokens
- **Animations:** Framer Motion (subtle fade-ins)
- **Forms:** react-hook-form + Zod validation
- **Backend:** Supabase (Postgres + Auth + RLS)
- **Auth:** Email/password + Google OAuth
- **Deploy target:** Cloudflare Workers (via Wrangler)

> Note: this project was originally specced for Next.js + Prisma + SQLite +
> NextAuth. It was rebuilt on TanStack Start + Supabase so the same site runs
> on edge infrastructure with no local DB to manage. Functionality is identical.

## Pages

| Route        | Description                                                     |
|--------------|-----------------------------------------------------------------|
| `/`          | Hero, services, about snippet, stats                            |
| `/services`  | Detailed service descriptions                                   |
| `/about`     | Mission, team, project abstract                                 |
| `/contact`   | Validated form → saved to `contact_submissions`                 |
| `/login`     | Email + password / Google OAuth                                 |
| `/register`  | Account creation                                                |
| `/dashboard` | Protected. Admins see all contact submissions.                  |
| `/privacy`   | Placeholder privacy policy                                      |
| `/terms`     | Placeholder terms of service                                    |

## Database schema

All tables are managed via SQL migrations in `supabase/migrations/`.

- **`profiles`** — `id (uuid, FK to auth.users)`, `email`, `full_name`, `created_at`. Auto-created on signup.
- **`user_roles`** — `id`, `user_id`, `role` (`'admin' | 'user'`), `created_at`. Roles live in their own table (security best practice — never on profiles).
- **`contact_submissions`** — `id`, `name`, `email`, `company?`, `message`, `created_at`.

Row-Level Security:
- Anyone can submit the contact form (length-validated at the DB layer).
- Only admins can read submissions.
- Users can read/update their own profile; admins can read all.
- Only admins can mutate `user_roles`.

A `has_role(uuid, app_role)` SECURITY DEFINER function is used inside RLS to
prevent recursive policy errors.

---

## Run locally

### 1. Prerequisites

- [Bun](https://bun.sh) ≥ 1.1 (or Node ≥ 20 + npm)
- A Supabase project (free tier is fine). You can either:
  - **Reuse the Lovable Cloud project** that's already provisioned for this app
    (recommended — schema, RLS, and auth are already set up), or
  - **Create your own** Supabase project and run the SQL migrations from
    `supabase/migrations/` in order via the Supabase SQL editor.

### 2. Install

```bash
bun install
# or: npm install
```

### 3. Configure environment

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Where to get the values:
- **Lovable Cloud users:** open the Cloud panel in Lovable → Settings → API, or
  open the linked Supabase dashboard → Project Settings → API.
- **Self-hosted Supabase users:** Project Settings → API → "Project URL" and
  "anon public" key.

Both `VITE_*` and unprefixed variants must be set — the `VITE_*` ones are
inlined into the browser bundle by Vite, the unprefixed ones are read by the
SSR server.

### 4. (If using your own Supabase project) Apply the schema

In the Supabase SQL editor, run the files inside `supabase/migrations/` in
chronological order. They create the enum, tables, RLS policies, and the
`handle_new_user` trigger that auto-creates a profile on signup.

### 5. Configure auth providers

In Supabase → Authentication → Providers:
- **Email**: enabled by default. For faster local testing, disable
  "Confirm email" so signups log in immediately.
- **Google** (optional): turn it on. Lovable Cloud manages the OAuth client
  for you; on a self-hosted Supabase you'll need a Google Cloud OAuth client
  with redirect URI `https://<project-ref>.supabase.co/auth/v1/callback`.

In Authentication → URL Configuration, add `http://localhost:3000` to the
**Site URL** and **Redirect URLs** so OAuth callbacks resolve locally.

### 6. Start the dev server

```bash
bun run dev
# or: npm run dev
```

Open <http://localhost:3000>.

### 7. Make yourself admin

Sign up at `/register`, then in the Supabase SQL editor run:

```sql
insert into public.user_roles (user_id, role)
values ('<paste-your-user-id-here>', 'admin')
on conflict do nothing;
```

(Find your user id under Authentication → Users.) Refresh `/dashboard` — you'll
now see all contact submissions.

### 8. Production build

```bash
bun run build     # outputs to .output/
bun run start     # runs the built server
```

Deploy with Wrangler (`wrangler.jsonc` is included) or any Node host that can
run the built server.

## Project structure

```
src/
  routes/                 # File-based routing (TanStack Router)
    __root.tsx            # Root layout (Navbar + Footer + Toaster)
    index.tsx             # Home
    about.tsx
    services.tsx
    contact.tsx
    login.tsx
    register.tsx
    dashboard.tsx         # Protected (admin-only data)
    privacy.tsx
    terms.tsx
  components/
    site/                 # Navbar, Footer, Container, FadeIn
    ui/                   # shadcn/ui components
  integrations/supabase/  # Auto-generated Supabase client + types
  lib/
    auth.ts               # useAuth() hook (session + isAdmin)
    utils.ts
  styles.css              # Tailwind + design tokens (oklch)
  router.tsx              # createRouter() factory
supabase/
  migrations/             # SQL schema migrations (run in order)
```

## Future-ready notes

The architecture is intentionally modular so an "AI Demo Playground" can be
added later as a new route under `src/routes/` (e.g. `playground.tsx`) backed
by a `createServerFn` handler that calls the Lovable AI Gateway.
