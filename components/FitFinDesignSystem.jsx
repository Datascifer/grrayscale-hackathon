import React from 'react';

const colorTokens = [
  {
    name: 'fitness',
    value: '#10B981',
    usage: 'Primary coaching actions, progress states, and positive momentum.',
    swatchClassName: 'bg-fitness text-white',
  },
  {
    name: 'finance',
    value: '#6366F1',
    usage: 'Secondary actions, charts, and linked-account highlights.',
    swatchClassName: 'bg-finance text-white',
  },
  {
    name: 'risk-high',
    value: '#F43F5E',
    usage: 'Overspending alerts, destructive flows, and urgent debt messaging.',
    swatchClassName: 'bg-risk-high text-white',
  },
  {
    name: 'risk-medium',
    value: '#F59E0B',
    usage: 'Budget cautions, pending reminders, and attention states.',
    swatchClassName: 'bg-risk-medium text-slate-950',
  },
  {
    name: 'surface',
    value: '#0F172A',
    usage: 'Application shell, full-page backgrounds, and analytics canvas.',
    swatchClassName: 'bg-surface text-white',
  },
  {
    name: 'card',
    value: '#1E293B',
    usage: 'Elevated panels, KPI cards, and modular content containers.',
    swatchClassName: 'bg-card text-white',
  },
];

const typographyTokens = [
  { name: 'display', className: 'text-display', sample: 'Build healthy money momentum.' },
  { name: 'heading', className: 'text-heading', sample: 'Goals, streaks, and financial confidence.' },
  { name: 'title', className: 'text-title', sample: 'Title styles for cards and sections.' },
  { name: 'body', className: 'text-body', sample: 'Body copy supports product education and next steps.' },
  { name: 'caption', className: 'text-caption', sample: 'Caption styles clarify labels and metadata.' },
];

const spacingTokens = [
  { name: 'xs', widthClassName: 'w-4', value: '4px / 0.25rem' },
  { name: 'sm', widthClassName: 'w-8', value: '8px / 0.5rem' },
  { name: 'md', widthClassName: 'w-16', value: '16px / 1rem' },
  { name: 'lg', widthClassName: 'w-24', value: '24px / 1.5rem' },
  { name: 'xl', widthClassName: 'w-32', value: '32px / 2rem' },
  { name: '2xl', widthClassName: 'w-48', value: '48px / 3rem' },
];

const radiusTokens = [
  { name: 'sm', className: 'rounded-sm' },
  { name: 'md', className: 'rounded-md' },
  { name: 'lg', className: 'rounded-lg' },
  { name: 'pill', className: 'rounded-pill' },
];

const shadowTokens = [
  { name: 'soft', className: 'shadow-soft', description: 'Default elevated panel shadow.' },
  { name: 'focus', className: 'shadow-focus', description: 'Accessible focus ring treatment for interactive elements.' },
];

const principles = [
  'Show financial momentum with the same clarity a fitness app uses for streaks and milestones.',
  'Keep one primary CTA per surface so the next step feels obvious and coach-like.',
  'Use strong contrast and supportive language to make money decisions feel safe and actionable.',
];

export default function FitFinDesignSystem() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-10 text-foreground md:px-10 lg:px-12">
      <section className="token-card overflow-hidden p-8 md:p-12">
        <div className="token-chip bg-[#6366F126] text-finance ring-1 ring-inset ring-[#6366F166]">
          Task 0.2 · Design Tokens and Theme
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div className="space-y-4">
            <h1 className="max-w-4xl text-display text-white">
              FitFin now reads from canonical theme tokens instead of inline design constants.
            </h1>
            <p className="max-w-3xl text-body text-muted">
              This page documents the Tailwind and CSS-variable token system that powers the FitFin look and feel,
              including the plan-approved colors, DM Sans typography, and shadcn/ui-friendly surface styling.
            </p>
          </div>
          <div className="token-card bg-surface p-5">
            <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">Canonical sources</p>
            <ul className="mt-4 space-y-3 text-body text-muted">
              <li><span className="font-semibold text-white">tailwind.config.ts</span> for semantic theme keys</li>
              <li><span className="font-semibold text-white">app/globals.css</span> for CSS variables and shared primitives</li>
              <li><span className="font-semibold text-white">app/layout.tsx</span> for DM Sans font loading</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="token-card p-8">
          <h2 className="text-title text-white">Brand principles</h2>
          <p className="mt-4 text-body text-muted">
            FitFin combines the emotional clarity of a fitness coach with the trust required for financial guidance.
          </p>
          <ul className="mt-6 space-y-3 pl-5 text-body text-muted marker:text-fitness">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>

        <div className="token-card p-8">
          <h2 className="text-title text-white">Voice attributes</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {['focused', 'encouraging', 'trustworthy', 'modern'].map((trait) => (
              <span key={trait} className="token-chip bg-[#10B98126] text-fitness ring-1 ring-inset ring-[#10B9814D]">
                {trait}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-title text-white">Color system</h2>
          <p className="text-caption text-muted-foreground">Semantic token names mirror the plan and Tailwind config.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {colorTokens.map((token) => (
            <article key={token.name} className="token-card p-4">
              <div className={`flex min-h-28 items-end rounded-md p-4 text-caption font-semibold ${token.swatchClassName}`}>
                {token.value}
              </div>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">{token.name}</p>
                  <p className="text-body text-muted">{token.usage}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-2">
        <div className="token-card p-8">
          <h2 className="text-title text-white">Typography scale</h2>
          <div className="mt-6 space-y-5">
            {typographyTokens.map((token) => (
              <div key={token.name} className="space-y-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
                <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">{token.name}</p>
                <p className={`${token.className} text-white`}>{token.sample}</p>
                <p className="font-mono text-sm text-muted-foreground">DM Sans via next/font/google</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="token-card p-8">
            <h2 className="text-title text-white">Spacing scale</h2>
            <div className="mt-6 space-y-4">
              {spacingTokens.map((token) => (
                <div key={token.name} className="grid grid-cols-[72px_1fr] items-center gap-4">
                  <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">{token.name}</p>
                  <div className="flex items-center gap-4">
                    <div className={`h-4 rounded-pill bg-finance ${token.widthClassName}`} />
                    <span className="text-body text-muted">{token.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="token-card p-8">
            <h2 className="text-title text-white">Radius & shadow primitives</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">Radii</p>
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  {radiusTokens.map((token) => (
                    <div key={token.name} className="space-y-2 text-center">
                      <div className={`h-14 w-14 border border-[#6366F166] bg-[#6366F126] ${token.className}`} />
                      <p className="text-caption text-muted">{token.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-caption uppercase tracking-[0.2em] text-muted-foreground">Shadows</p>
                <div className="mt-4 space-y-4">
                  {shadowTokens.map((token) => (
                    <div key={token.name} className="space-y-2">
                      <div className={`rounded-lg border border-border bg-surface p-4 ${token.className}`}>
                        <p className="text-body text-white">{token.name}</p>
                      </div>
                      <p className="text-caption text-muted">{token.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
