import type { CSSProperties, ReactNode } from 'react';
import { CheckCircle2, Layers3, Palette, Ruler } from 'lucide-react';

import { fitFinComponents, fitFinDesignTokens, principles, surfaces } from '@/lib/fitfin-design-system';
import { cn } from '@/lib/utils';
import type { FitFinSurface } from '@/types/design-system';
import type { FoundationStatus } from '@/types/foundation';

interface FitFinDesignSystemProps {
  foundation: FoundationStatus;
}

interface SectionCardProps {
  className?: string;
  children: ReactNode;
}

const pageStyles: CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  background: `linear-gradient(180deg, ${fitFinDesignTokens.colors.mist} 0%, #ffffff 100%)`,
  color: fitFinDesignTokens.colors.ink
};

const cardStyle: CSSProperties = {
  background: '#FFFFFF',
  border: `1px solid ${fitFinDesignTokens.colors.cloud}`,
  borderRadius: fitFinDesignTokens.radii.lg,
  boxShadow: fitFinDesignTokens.shadows.soft
};

function SectionCard({ className, children }: SectionCardProps) {
  return (
    <div className={cn('rounded-[20px] border border-fitfin-cloud bg-white p-6 shadow-soft', className)} style={cardStyle}>
      {children}
    </div>
  );
}

function Swatch({ name, value, usage, textColor }: FitFinSurface) {
  return (
    <SectionCard className="p-4">
      <div
        className="flex min-h-24 items-end rounded-xl p-4 text-sm font-medium"
        style={{ background: value, color: textColor }}
      >
        {value}
      </div>
      <div className="mt-4">
        <div className="text-sm font-medium text-fitfin-slate">{name}</div>
        <div className="text-base">{usage}</div>
      </div>
    </SectionCard>
  );
}

export function FitFinDesignSystem({ foundation }: FitFinDesignSystemProps) {
  return (
    <main style={pageStyles} className="min-h-screen px-6 py-12 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8">
        <SectionCard className="p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fitfin-blueTint px-3 py-1.5 text-sm font-medium text-fitfin-sky">
            <CheckCircle2 className="h-4 w-4" />
            FitFin design system
          </div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-fitfin-ink">
            Financial wellness with the energy of a fitness coach.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-fitfin-slate">
            This foundation packages the FitFin-themed design system reference into the new Next.js App Router
            architecture so the product can evolve from a clean, typed baseline.
          </p>
        </SectionCard>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionCard>
            <div className="mb-4 flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-fitfin-sky" />
              <h2 className="text-2xl font-semibold">Brand principles</h2>
            </div>
            <p className="mb-4 text-fitfin-slate">{fitFinDesignTokens.brand.mission}</p>
            <ul className="grid gap-2 pl-5">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard>
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-fitfin-emerald" />
              <h2 className="text-2xl font-semibold">Voice attributes</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {fitFinDesignTokens.brand.personality.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full bg-fitfin-mint px-3 py-2 text-sm font-medium text-fitfin-ink"
                >
                  {trait}
                </span>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="grid gap-4">
          <div className="flex items-center gap-3">
            <Palette className="h-5 w-5 text-fitfin-sky" />
            <h2 className="text-2xl font-semibold">Color system</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {surfaces.map((surface) => (
              <Swatch key={surface.name} {...surface} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <SectionCard>
            <div className="mb-4 flex items-center gap-3">
              <Ruler className="h-5 w-5 text-fitfin-sky" />
              <h2 className="text-2xl font-semibold">Spacing, radius, and typography</h2>
            </div>
            <div className="grid gap-4">
              {Object.entries(fitFinDesignTokens.spacing).map(([token, size]) => (
                <div key={token} className="grid grid-cols-[72px_1fr] items-center gap-3">
                  <div className="text-sm font-medium text-fitfin-slate">{token}</div>
                  <div className="h-4 rounded-full bg-fitfin-sky" style={{ width: size * 4 }} />
                </div>
              ))}
              <div className="border-t border-fitfin-cloud pt-4">
                <div className="mb-3 text-sm font-medium text-fitfin-slate">Corner radii</div>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(fitFinDesignTokens.radii).map(([token, radius]) => (
                    <div key={token} className="text-center">
                      <div
                        className="h-14 w-14 border border-fitfin-sky bg-fitfin-blueTint"
                        style={{ borderRadius: radius }}
                      />
                      <div className="mt-2 text-sm font-medium">{token}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-fitfin-cloud pt-4">
                <div className="mb-3 text-sm font-medium text-fitfin-slate">Typography tokens</div>
                <div className="grid gap-3">
                  {Object.entries(fitFinDesignTokens.typography).map(([token, font]) => (
                    <div key={token}>
                      <div style={{ font }} className="capitalize">
                        {token} sample
                      </div>
                      <div className="font-mono text-sm text-fitfin-slate">{font}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard>
            <h2 className="text-2xl font-semibold">Foundation status</h2>
            <div className="mt-4 grid gap-3 text-fitfin-slate">
              <p>
                <span className="font-semibold text-fitfin-ink">Current phase:</span> {foundation.phase}
              </p>
              <p>
                <span className="font-semibold text-fitfin-ink">App Router:</span>{' '}
                {foundation.appRouter ? 'enabled' : 'disabled'}
              </p>
              <p>
                <span className="font-semibold text-fitfin-ink">TypeScript mode:</span>{' '}
                {foundation.strictTypeScript ? 'strict' : 'non-strict'}
              </p>
              <p>
                <span className="font-semibold text-fitfin-ink">Absolute imports:</span> {foundation.absoluteImports}
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-fitfin-ink">Root architecture</h3>
              <ul className="mt-3 grid gap-2 pl-5 text-fitfin-slate">
                {foundation.directories.map((directory) => (
                  <li key={directory}>{directory}/</li>
                ))}
              </ul>
            </div>
          </SectionCard>
        </section>

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Core components</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fitFinComponents.map((component) => (
              <SectionCard key={component.name}>
                <div className="text-2xl font-semibold">{component.name}</div>
                <p className="mt-3 text-fitfin-slate">{component.description}</p>
                <ul className="mt-3 grid gap-1 pl-5 text-sm text-fitfin-slate">
                  {component.anatomy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SectionCard>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
