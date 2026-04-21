# Vision AI Hub — Complete Vision AI Solutions

Modern corporate website built with TanStack Start, Tailwind CSS v4, and Supabase. Ready for Cloudflare Workers/Pages, GitHub Pages, Vercel/Netlify.

[![TanStack Start](https://img.shields.io/badge/TanStack%20Start-v1.0-blue?logo=react&logoColor=white)](https://tanstack.com/start/latest)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-FF5F00?logo=supabase&logoColor=white)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/npm-%3E%3D20-green?logo=npm)](https://nodejs.org/)

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 20 or [Bun](https://bun.sh/) ≥ 1.1
- Free [Supabase](https://supabase.com/) project

### 1. Clone & Install
```bash
git clone YOUR_GITHUB_REPO_URL vision-ai-hub
cd vision-ai-hub
npm ci
```

### 2. Setup Environment
```bash
cp .env.example .env
# Fill SUPABASE_URL & SUPABASE_ANON_KEY from Supabase dashboard → Settings → API
```

Apply migrations: Copy/paste `supabase/migrations/*.sql` into Supabase SQL editor (in order).

### 3. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000`.

**Admin setup**: Register → Insert into `user_roles` table (see docs below).

### 4. Build & Deploy
```bash
npm run build  # Outputs to .output/ or dist/
npm run preview
```
- **GitHub Pages**: `npm run deploy`
- **Cloudflare Pages/Workers**: `npx wrangler pages deploy .output/` or `wrangler deploy`
- **Vercel/Netlify**: Upload `dist/` or `.output/`

## 🌐 Features

| Route | Description |
|-------|-------------|
| `/` | Hero + services + stats |
| `/services`, `/about`, `/teams` | Content pages |
| `/contact` | Form → Supabase |
| `/login` / `/register` | Supabase Auth |
| `/dashboard` | Admin view (protected) |
| `/privacy` / `/terms` | Legal |

## 📊 Tech Stack
- **Frontend**: React 19 + TanStack Router/Start (SSR) + Vite 7 + TypeScript
- **UI**: shadcn/ui + Tailwind v4 + Framer Motion
- **Backend**: Supabase (Auth, Postgres, RLS)
- **Data**: TanStack Query

## 🗄️ Database Schema (Supabase)
Tables in `supabase/migrations/`:
- `profiles`, `user_roles`, `contact_submissions`
- Full RLS (admin-only reads)

## 📁 Structure
```
src/
├── routes/          # File-based routing
├── components/ui/   # shadcn
├── components/site/ # Custom
├── lib/auth.ts      # Hooks
└── integrations/supabase/
```

## Original Setup Notes (DrukOptix Reference)
*(Adapted from Loveable AI generation)*
- Detailed local setup in merged sections above.
- Make admin: `INSERT INTO user_roles (user_id, role) VALUES ('uuid', 'admin');`



