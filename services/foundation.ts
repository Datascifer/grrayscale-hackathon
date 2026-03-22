import type { FoundationStatus } from '@/types/foundation';

export function getFoundationStatus(): FoundationStatus {
  return {
    phase: 'Phase 0',
    appRouter: true,
    strictTypeScript: true,
    absoluteImports: '@/...',
    directories: ['app', 'components', 'lib', 'types', 'services', 'db', 'scripts']
  };
}
