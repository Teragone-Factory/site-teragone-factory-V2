import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#12121A',
        card: '#1C1C28',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        cyan: '#06B6D4',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
}

export default config
