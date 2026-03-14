/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surface2: 'rgb(var(--color-surface2) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        blue: 'rgb(var(--color-blue) / <alpha-value>)',
        warn: 'rgb(var(--color-warn) / <alpha-value>)',
        dim: 'rgb(var(--color-dim) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        bright: 'rgb(var(--color-bright) / <alpha-value>)',
        purple: 'rgb(var(--color-purple) / <alpha-value>)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'hex-spin': 'hexSpin 25s linear infinite',
        'hex-spin-rev': 'hexSpin 18s linear infinite reverse',
        'skill-fill': 'skillFill 1.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'particle': 'particle linear infinite',
        'blink': 'blink 1s step-end infinite',
        'glitch-slice': 'glitchSlice 0.07s steps(1) infinite',
        'glitch-slice-fast': 'glitchSlice 0.08s steps(1) infinite',
        'glitch-slice-slow': 'glitchSlice 0.1s steps(1) infinite',
        'hint-arrow': 'hintArrow 1.2s ease-in-out infinite',
        'hint-dot': 'hintDot 1.2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,229,176,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(0,229,176,0.3)' },
        },
        hexSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        skillFill: {
          from: { width: '0%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glitchSlice: {
          '0%': { clipPath: 'inset(0 0 85% 0)', transform: 'translate(-4px, 0)' },
          '20%': { clipPath: 'inset(40% 0 40% 0)', transform: 'translate(4px, 0)' },
          '40%': { clipPath: 'inset(70% 0 5% 0)', transform: 'translate(-2px, 0)' },
          '60%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(3px, 0)' },
          '80%': { clipPath: 'inset(55% 0 20% 0)', transform: 'translate(-3px, 0)' },
          '100%': { clipPath: 'inset(0 0 85% 0)', transform: 'translate(0, 0)' },
        },
        particle: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) translateX(20px)', opacity: '0' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        hintArrow: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.6' },
          '50%': { transform: 'translateY(-4px)', opacity: '1' },
        },
        hintDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
