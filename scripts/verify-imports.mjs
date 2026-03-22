import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');

const requiredImports = [
  "@/components/fitfin/FitFinDesignSystem",
  "@/services/foundation"
];

const missing = requiredImports.filter((value) => !page.includes(value));

if (missing.length > 0) {
  console.error('Missing expected absolute imports:', missing.join(', '));
  process.exit(1);
}

console.log('Absolute import verification passed.');
