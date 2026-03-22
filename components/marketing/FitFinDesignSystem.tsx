import React from 'react';

type Surface = {
  name: string;
  value: string;
  usage: string;
  textColor: string;
};

type ComponentSpec = {
  name: string;
  description: string;
  anatomy: string[];
};

export const fitFinDesignTokens = {
  brand: {
    name: 'FitFin',
    mission:
      'Help people build healthy money habits with the clarity, energy, and consistency of a strong fitness routine.',
    personality: ['focused', 'encouraging', 'trustworthy', 'modern'],
  },
  colors: {
    ink: '#0F172A',
    slate: '#334155',
    cloud: '#E2E8F0',
    mist: '#F8FAFC',
    emerald: '#10B981',
    mint: '#D1FAE5',
    sky: '#0EA5E9',
    blueTint: '#E0F2FE',
    amber: '#F59E0B',
    amberTint: '#FEF3C7',
    rose: '#F43F5E',
    roseTint: '#FFE4E6',
  },
  typography: {
    display: '700 48px/56px Inter, system-ui, sans-serif',
    heading: '700 32px/40px Inter, system-ui, sans-serif',
    title: '600 24px/32px Inter, system-ui, sans-serif',
    body: '400 16px/24px Inter, system-ui, sans-serif',
    caption: '500 14px/20px Inter, system-ui, sans-serif',
    mono: '500 14px/20px "SFMono-Regular", Consolas, monospace',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },
  radii: {
    sm: 8,
    md: 14,
    lg: 20,
    pill: 999,
  },
  shadows: {
    soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
    focus: '0 0 0 4px rgba(14, 165, 233, 0.2)',
  },
} as const;

const surfaces: Surface[] = [
  {
    name: 'Primary',
    value: fitFinDesignTokens.colors.emerald,
    usage: 'Primary actions, positive balances, and progress states.',
    textColor: '#FFFFFF',
  },
  {
    name: 'Secondary',
    value: fitFinDesignTokens.colors.sky,
    usage: 'Charts, links, and supporting calls to action.',
    textColor: '#FFFFFF',
  },
  {
    name: 'Success tint',
    value: fitFinDesignTokens.colors.mint,
    usage: 'Low-emphasis celebration and success surfaces.',
    textColor: fitFinDesignTokens.colors.ink,
  },
  {
    name: 'Warning tint',
    value: fitFinDesignTokens.colors.amberTint,
    usage: 'Budget alerts and caution messaging.',
    textColor: fitFinDesignTokens.colors.ink,
  },
  {
    name: 'Danger tint',
    value: fitFinDesignTokens.colors.roseTint,
    usage: 'Overspending flags and destructive states.',
    textColor: fitFinDesignTokens.colors.ink,
  },
];

const principles = [
  'Show financial momentum the same way a fitness app shows streaks and progress.',
  'Keep important actions obvious with one primary CTA per surface.',
  'Use reassuring language and strong contrast to make money decisions feel safe.',
];

const components: ComponentSpec[] = [
  {
    name: 'KPI Card',
    description: 'Headline metric card for balances, savings streaks, or monthly spending targets.',
    anatomy: ['Label', 'Value', 'Delta chip', 'Optional sparkline'],
  },
  {
    name: 'Habit CTA Button',
    description: 'Primary button for high-value actions like linking an account or setting a goal.',
    anatomy: ['44px min height', 'Pill radius', 'Strong shadow on focus'],
  },
  {
    name: 'Insight Banner',
    description: 'Contextual guidance module for recommendations, reminders, and nudges.',
    anatomy: ['Status icon', 'Title', 'Support copy', 'Inline action'],
  },
];

const pageStyles: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  background: `linear-gradient(180deg, ${fitFinDesignTokens.colors.mist} 0%, #ffffff 100%)`,
  color: fitFinDesignTokens.colors.ink,
  padding: fitFinDesignTokens.spacing['2xl'],
};

const cardStyle: React.CSSProperties = {
  background: '#FFFFFF',
  border: `1px solid ${fitFinDesignTokens.colors.cloud}`,
  borderRadius: fitFinDesignTokens.radii.lg,
  boxShadow: fitFinDesignTokens.shadows.soft,
  padding: fitFinDesignTokens.spacing.lg,
};

const sectionTitleStyle: React.CSSProperties = {
  font: fitFinDesignTokens.typography.title,
  margin: 0,
};

function Swatch({ name, value, usage, textColor }: Surface) {
  return (
    <div style={{ ...cardStyle, padding: fitFinDesignTokens.spacing.md }}>
      <div
        style={{
          background: value,
          borderRadius: fitFinDesignTokens.radii.md,
          color: textColor,
          minHeight: 96,
          padding: fitFinDesignTokens.spacing.md,
          display: 'flex',
          alignItems: 'flex-end',
          font: fitFinDesignTokens.typography.caption,
        }}
      >
        {value}
      </div>
      <div style={{ marginTop: fitFinDesignTokens.spacing.md }}>
        <div style={{ font: fitFinDesignTokens.typography.caption, color: fitFinDesignTokens.colors.slate }}>
          {name}
        </div>
        <div style={{ font: fitFinDesignTokens.typography.body }}>{usage}</div>
      </div>
    </div>
  );
}

export function FitFinDesignSystem() {
  return (
    <div style={pageStyles}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gap: fitFinDesignTokens.spacing.xl,
        }}
      >
        <section style={{ ...cardStyle, padding: fitFinDesignTokens.spacing['2xl'] }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: fitFinDesignTokens.spacing.sm,
              background: fitFinDesignTokens.colors.blueTint,
              color: fitFinDesignTokens.colors.sky,
              borderRadius: fitFinDesignTokens.radii.pill,
              padding: '6px 12px',
              font: fitFinDesignTokens.typography.caption,
              marginBottom: fitFinDesignTokens.spacing.md,
            }}
          >
            FitFin design system
          </div>
          <h1 style={{ font: fitFinDesignTokens.typography.display, margin: 0 }}>
            Financial wellness with the energy of a fitness coach.
          </h1>
          <p
            style={{
              font: fitFinDesignTokens.typography.body,
              color: fitFinDesignTokens.colors.slate,
              maxWidth: 720,
              marginTop: fitFinDesignTokens.spacing.md,
              marginBottom: 0,
            }}
          >
            This component packages a FitFin-themed design system reference with brand intent, core visual
            tokens, and reusable UI guidance that a product team can extend into a fuller application.
          </p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: fitFinDesignTokens.spacing.xl }}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Brand principles</h2>
            <p style={{ font: fitFinDesignTokens.typography.body, color: fitFinDesignTokens.colors.slate }}>
              {fitFinDesignTokens.brand.mission}
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: fitFinDesignTokens.spacing.sm }}>
              {principles.map((principle) => (
                <li key={principle} style={{ font: fitFinDesignTokens.typography.body }}>
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Voice attributes</h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: fitFinDesignTokens.spacing.sm,
                marginTop: fitFinDesignTokens.spacing.md,
              }}
            >
              {fitFinDesignTokens.brand.personality.map((trait) => (
                <span
                  key={trait}
                  style={{
                    padding: '8px 12px',
                    borderRadius: fitFinDesignTokens.radii.pill,
                    background: fitFinDesignTokens.colors.mint,
                    color: fitFinDesignTokens.colors.ink,
                    font: fitFinDesignTokens.typography.caption,
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gap: fitFinDesignTokens.spacing.lg }}>
          <h2 style={sectionTitleStyle}>Color system</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: fitFinDesignTokens.spacing.md,
            }}
          >
            {surfaces.map((surface) => (
              <Swatch key={surface.name} {...surface} />
            ))}
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: fitFinDesignTokens.spacing.xl,
          }}
        >
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Typography scale</h2>
            <div style={{ display: 'grid', gap: fitFinDesignTokens.spacing.md, marginTop: fitFinDesignTokens.spacing.md }}>
              {Object.entries(fitFinDesignTokens.typography).map(([token, font]) => (
                <div key={token}>
                  <div style={{ font, textTransform: 'capitalize' }}>{token} sample</div>
                  <div style={{ font: fitFinDesignTokens.typography.mono, color: fitFinDesignTokens.colors.slate }}>
                    {font}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Spacing & radius</h2>
            <div style={{ display: 'grid', gap: fitFinDesignTokens.spacing.md, marginTop: fitFinDesignTokens.spacing.md }}>
              {Object.entries(fitFinDesignTokens.spacing).map(([token, size]) => (
                <div key={token} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', alignItems: 'center', gap: 12 }}>
                  <div style={{ font: fitFinDesignTokens.typography.caption, color: fitFinDesignTokens.colors.slate }}>
                    {token}
                  </div>
                  <div
                    style={{
                      height: 16,
                      width: size * 4,
                      background: fitFinDesignTokens.colors.sky,
                      borderRadius: fitFinDesignTokens.radii.pill,
                    }}
                  />
                </div>
              ))}
              <div
                style={{
                  paddingTop: fitFinDesignTokens.spacing.sm,
                  borderTop: `1px solid ${fitFinDesignTokens.colors.cloud}`,
                }}
              >
                <div
                  style={{
                    font: fitFinDesignTokens.typography.caption,
                    color: fitFinDesignTokens.colors.slate,
                    marginBottom: fitFinDesignTokens.spacing.sm,
                  }}
                >
                  Corner radii
                </div>
                <div style={{ display: 'flex', gap: fitFinDesignTokens.spacing.md, alignItems: 'flex-end' }}>
                  {Object.entries(fitFinDesignTokens.radii).map(([token, radius]) => (
                    <div key={token} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          background: fitFinDesignTokens.colors.blueTint,
                          borderRadius: radius,
                          border: `1px solid ${fitFinDesignTokens.colors.sky}`,
                        }}
                      />
                      <div style={{ font: fitFinDesignTokens.typography.caption, marginTop: fitFinDesignTokens.spacing.sm }}>
                        {token}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gap: fitFinDesignTokens.spacing.lg }}>
          <h2 style={sectionTitleStyle}>Core components</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: fitFinDesignTokens.spacing.md }}>
            {components.map((component) => (
              <div key={component.name} style={cardStyle}>
                <div style={{ font: fitFinDesignTokens.typography.title }}>{component.name}</div>
                <p style={{ font: fitFinDesignTokens.typography.body, color: fitFinDesignTokens.colors.slate }}>
                  {component.description}
                </p>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: fitFinDesignTokens.spacing.xs }}>
                  {component.anatomy.map((item) => (
                    <li key={item} style={{ font: fitFinDesignTokens.typography.caption }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
