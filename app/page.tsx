import { FitFinDesignSystem } from '@/components/fitfin/FitFinDesignSystem';
import { getFoundationStatus } from '@/services/foundation';

export default function HomePage() {
  const foundation = getFoundationStatus();

  return <FitFinDesignSystem foundation={foundation} />;
}
