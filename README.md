# FitFin Phase 0 Foundation

This repository now contains the root scaffold for a **Next.js 14 App Router** application with **strict TypeScript**, **Tailwind CSS**, and a first-pass FitFin design-system landing page.

## Included in Phase 0

- Next.js 14 app at the repository root.
- Strict TypeScript configuration with `@/` absolute imports.
- Tailwind CSS and PostCSS wiring.
- Initial application structure under `app/`, `components/`, `lib/`, `types/`, `services/`, `db/`, and `scripts/`.
- Migrated FitFin design-system showcase rendered from the App Router entrypoint.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` — start the development server.
- `npm run build` — produce a production build.
- `npm run start` — run the production server.
- `npm run lint` — lint with Next.js ESLint rules.
- `npm run typecheck` — run TypeScript without emitting files.
- `npm run check` — run lint + typecheck.
- `npm run verify:imports` — confirm the root app is using `@/` imports.

## Project Structure

- `app/` — App Router layout, entry page, and global styles.
- `components/` — reusable UI and feature components.
- `lib/` — shared utility and domain modules.
- `types/` — shared TypeScript contracts.
- `services/` — app-level service functions.
- `db/` — database configuration and data access entry points.
- `scripts/` — lightweight repository scripts and checks.
