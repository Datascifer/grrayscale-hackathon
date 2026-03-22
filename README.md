# FitFin AI

FitFin AI is a planned financial wellness app that treats money management like habit-building training. The product is designed around a simple message: **One goal. Two pillars.** Users define one meaningful life goal, then build toward it through two connected systems:

1. **Fitness pillar:** routines, streaks, accountability, and personal momentum.
2. **Finance pillar:** budgets, linked accounts, savings progress, and spending awareness.

The long-term vision is to combine AI coaching, account aggregation, and progress-oriented UX so users can see how daily habits affect both physical wellness and financial outcomes. The current repository is still early-stage, so this README documents the planned architecture and contributor expectations before the full product scaffold lands.

## Product overview

### One goal. Two pillars.

FitFin AI centers the experience around a single user-defined goal, such as:

- Build a three-month emergency fund.
- Save for a race, trip, or major life event.
- Reduce discretionary spending while improving personal consistency.

From there, the app reinforces that goal through two complementary pillars:

- **Fitness:** encourages repeatable habits, progress tracking, and coaching-style nudges.
- **Finance:** connects the user to their money data, surfaces insights, and turns budgets into measurable milestones.

The product direction assumes that people are more likely to improve their finances when the experience feels motivating, visual, and habit-driven rather than purely accounting-focused.

## Planned tech stack

The intended implementation plan uses the following tools and services:

| Area | Planned choice | Notes |
| --- | --- | --- |
| App framework | **Next.js 14** | App Router application for web delivery and deployment. |
| Language | **TypeScript** | Shared types for app code, API routes, and integrations. |
| Styling | **Tailwind CSS** | Utility-first styling aligned with the FitFin design language. |
| Component library | **shadcn/ui** | Accessible UI primitives and composable application components. |
| Backend/data | **Supabase** | Auth, Postgres, storage, and server-side data access. |
| AI | **OpenAI API** | Insight generation, coaching prompts, and goal-aware recommendations. |
| Financial aggregation | **Plaid** | Account linking, balances, and transaction ingestion. |
| Data fetching/state | **React Query** | Client-side async state, caching, and mutation flows. |
| Charts | **Recharts** | Progress, streak, budget, and trend visualizations. |

## Local development

### Requirements

Until the application scaffold is committed, contributors should assume the following baseline environment:

- **Node.js 20.11+** recommended.
- **npm 10+** recommended.
- A Supabase project for auth/data testing.
- OpenAI and Plaid credentials for feature-complete local development.

### Setup

1. Install the required Node.js version.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the example environment file and fill in values:

   ```bash
   cp .env.local.example .env.local
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

### Local commands

Use these commands once the Next.js app scaffold is present:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

If additional scripts are introduced later, this section should be updated to match `package.json` exactly.

## Environment variables

The planned build expects local secrets and public configuration to live in `.env.local`. Start from the checked-in example file:

```bash
cp .env.local.example .env.local
```

### Planned variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_APP_URL` | Canonical base URL for the web app in local or deployed environments. |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL exposed to the client. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client-safe Supabase anon key. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only Supabase service role key for protected operations. |
| `OPENAI_API_KEY` | Server-side OpenAI API access for AI-generated insights and coaching flows. |
| `PLAID_CLIENT_ID` | Plaid application client ID. |
| `PLAID_SECRET` | Plaid secret for the configured environment. |
| `PLAID_ENV` | Plaid environment name such as `sandbox`, `development`, or `production`. |
| `PLAID_WEBHOOK_URL` | Optional webhook endpoint used when Plaid webhooks are enabled. |

> If the implementation plan adds or renames variables later, update both this README and `.env.local.example` in the same change.

## Roadmap

The intended build order is phased so contributors can work against a shared sequence instead of parallelizing unfinished dependencies.

### Phase 1: Foundation

- Scaffold the Next.js 14 app with TypeScript, Tailwind, and shadcn/ui.
- Establish FitFin branding, layout primitives, and core navigation.
- Configure Supabase project access and environment handling.

### Phase 2: Auth and profile setup

- Add Supabase authentication flows.
- Capture the user’s primary goal and profile preferences.
- Introduce onboarding that explains the “One goal. Two pillars.” model.

### Phase 3: Financial data integration

- Integrate Plaid Link for account connection.
- Sync balances and transactions into Supabase.
- Define initial budget and cash-flow summaries.

### Phase 4: AI coaching and insights

- Add OpenAI-powered coaching prompts and summaries.
- Generate goal-aware financial wellness insights.
- Introduce habit-driven recommendation modules and notifications.

### Phase 5: Analytics and progress surfaces

- Build dashboards with Recharts.
- Show streaks, spending trends, goal progress, and milestone tracking.
- Refine caching, loading states, and optimistic updates with React Query.

### Phase 6: Polish, demos, and launch readiness

- Add seed data, demo accounts, and scripted local setup helpers.
- Finalize deployment settings and environment parity.
- Tighten accessibility, observability, and production safeguards.

## Deployment notes

The production target is expected to be a standard Next.js deployment platform such as Vercel, with server-side access to Supabase, OpenAI, and Plaid secrets.

Planned deployment assumptions:

- **Application hosting:** Vercel or another Node-compatible platform that supports Next.js 14 server features.
- **Database and auth:** Supabase manages Postgres and authentication.
- **Secrets management:** production secrets should be configured through the deployment provider, not committed to the repo.
- **Webhook support:** Plaid webhooks will need a stable HTTPS endpoint in non-local environments.

## Planned data and demo assumptions

These implementation notes are intentionally forward-looking so contributors know what to add once the corresponding files exist:

- **Supabase schema:** once migrations are added, this README should link to the canonical schema or migration directory and summarize the core tables used for users, goals, linked accounts, transactions, and generated insights.
- **Demo users:** once demo credentials exist, document safe non-production accounts here, including how to reset them and which Plaid environment they target.
- **Seed scripts:** once seed or bootstrap scripts exist, add the exact commands for seeding development data and recreating demo scenarios.

Until those artifacts exist in the repository, treat this README as the source of intent rather than a finalized operations manual.

## Current repository status

This repository currently contains early project assets rather than the full application scaffold. As the app is implemented, contributors should keep this README in sync with:

- the actual `package.json` scripts,
- the committed environment template,
- the Supabase migrations/schema,
- the deployment target and runtime assumptions, and
- any local demo or seeding workflows.
