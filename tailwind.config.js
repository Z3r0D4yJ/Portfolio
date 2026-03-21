/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#080b0f',
        surface: '#0d1117',
        surface2: '#131920',
        border: '#1c2733',
        accent: '#00e5b0',
        blue: '#2f88ff',
        warn: '#ff4757',
        dim: '#4a6274',
        muted: '#8ba3b5',
        bright: '#e8f4ff',
        purple: '#8b5cf6'
      },
      animation: {
        'skill-fill': 'skillFill 1.6s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        skillFill: {
          from: { width: '0%' },
        },
      },
    },
  },
  plugins: [],
}
