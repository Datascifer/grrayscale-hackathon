import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fitfin: {
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
          roseTint: '#FFE4E6'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        focus: '0 0 0 4px rgba(14, 165, 233, 0.2)'
      },
      borderRadius: {
        fitfin: '20px'
      }
    }
  },
  plugins: []
};

export default config;
