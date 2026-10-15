/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#07070b', 900: '#0b0b12', 800: '#11111a', 700: '#181824', 600: '#232333' },
        accent: { DEFAULT: '#8b5cf6', soft: '#a78bfa', glow: '#7c3aed', cyan: '#22d3ee' },
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        ar: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(139,92,246,.55)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseDot: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.35' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
