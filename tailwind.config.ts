import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        surface: '#0a0a0a',
        surface2: '#111111',
        border: '#1a1a1a',
        text: '#e8e8e8',
        muted: '#4a4a4a',
        muted2: '#6b6b6b',
        accent: '#00ff88',
        'accent-dim': 'rgba(0, 255, 136, 0.08)',
        'accent-glow': 'rgba(0, 255, 136, 0.15)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-d1': 'fadeUp 0.6s 0.1s ease-out both',
        'fade-up-d2': 'fadeUp 0.6s 0.2s ease-out both',
        'fade-up-d3': 'fadeUp 0.6s 0.3s ease-out both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
