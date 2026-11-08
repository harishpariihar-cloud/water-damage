/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D6E2F0',
          200: '#AFC6E0',
          300: '#7FA3CB',
          400: '#4D7DB0',
          500: '#2E5F93',
          600: '#1F4A78',
          700: '#173858',
          800: '#10284A',
          900: '#0B2545',
          950: '#071A33',
        },
        ocean: {
          50: '#EAF6FD',
          100: '#CFEBFA',
          200: '#9ED6F5',
          300: '#5FBBEB',
          400: '#2F9ADB',
          500: '#1A7FC4',
          600: '#1266A3',
          700: '#0F5283',
          800: '#0E4069',
          900: '#0C3556',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(103, 232, 249, 0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(103, 232, 249, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(103, 232, 249, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
