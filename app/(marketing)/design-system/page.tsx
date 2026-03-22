import type { Metadata } from 'next';
import { FitFinDesignSystem } from '@/components/marketing/FitFinDesignSystem';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'FitFin marketing design-system reference covering brand principles, visual tokens, and component guidance.',
};

export default function DesignSystemPage() {
  return <FitFinDesignSystem />;
}
