import type { ReactNode } from 'react';
import Link from 'next/link';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backdropFilter: 'blur(14px)',
          background: 'rgba(248, 250, 252, 0.88)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <Link href="/" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
            FitFin
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#475569' }}>
            <Link href="/design-system">Design system</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
