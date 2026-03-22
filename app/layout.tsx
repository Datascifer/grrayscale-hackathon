import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fitfin.local'),
  title: {
    default: 'FitFin',
    template: '%s | FitFin',
  },
  description:
    'FitFin is a financial wellness experience with a marketing shell and design-system reference pages.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
