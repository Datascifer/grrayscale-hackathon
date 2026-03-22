import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Home',
  description: 'Landing page for the FitFin marketing shell and design system reference.',
};

export default function MarketingHomePage() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '96px 24px',
        display: 'grid',
        gap: 24,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          width: 'fit-content',
          padding: '6px 12px',
          borderRadius: 999,
          background: '#d1fae5',
          color: '#065f46',
          fontWeight: 600,
        }}
      >
        FitFin marketing shell
      </span>
      <div style={{ display: 'grid', gap: 16, maxWidth: 760 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
          Train better money habits with the clarity of a fitness coach.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#475569' }}>
          The standalone design-system component now lives inside the app as a marketing reference page so the
          team can review tokens, principles, and reusable UI guidance in-context.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        <Link
          href="/design-system"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 48,
            padding: '0 20px',
            borderRadius: 999,
            background: '#10b981',
            color: '#ffffff',
            fontWeight: 700,
          }}
        >
          Open design system
        </Link>
      </div>
    </section>
  );
}
