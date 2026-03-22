import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fitness: 'var(--fitness)',
        finance: 'var(--finance)',
        'risk-high': 'var(--risk-high)',
        'risk-medium': 'var(--risk-medium)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        border: 'var(--border)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.875rem',
        lg: '1.25rem',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        focus: '0 0 0 4px rgba(99, 102, 241, 0.2)',
      },
      fontSize: {
        display: ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }],
        heading: ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        title: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        caption: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};

export default config;
