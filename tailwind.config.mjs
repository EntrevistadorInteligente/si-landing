/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animationDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      animationDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      colors: {
        primary: {
          50: '#f5f6fd',
          100: '#e3e8fc',
          200: '#cdd5f8',
          300: '#aeb9f3',
          400: '#8e94eb',
          500: '#6464df',
          600: '#6157d4',
          700: '#5248ba',
          800: '#443c97',
          900: '#3a3778',
          950: '#232046',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'fluid-sm': 'clamp(1rem, 1.5vw, 1.5rem)',
        'fluid-base': 'clamp(1.375rem, calc(0.95rem + 1.25vw), 1.75rem)',
        'fluid-lg': 'clamp(1.575rem, calc(1.05rem + 1.50vw), 2.25rem)',
        'fluid-xl': 'clamp(1.775rem, calc(1.15rem + 1.75vw), 2.75rem)',
        'fluid-2xl': 'clamp(1.875rem, 8vw, 5rem)',
        'fluid-md': 'clamp(1.225rem, calc(0.875rem + 1.375vw), 1.525rem)',
        'fluid-3xl': 'clamp(1.975rem, calc(1.25rem + 2.00vw), 3.25rem)',
        'fluid-4xl': 'clamp(2.075rem, calc(1.35rem + 2.25vw), 3.50rem)',
        'fluid-5xl': 'clamp(2.175rem, calc(1.45rem + 2.50vw), 3.75rem)',
      },
      boxShadow: {
        hover: '0 0 0 5px var(--tw-shadow-color, hsla(0, 0%, 9%, 10%))',
        button: '0 2px 6px 0 var(--tw-shadow-color, hsla(0, 0%, 9%, 15%))',
      },

      screens: {
        xs: '500px',
      },

      transitionTimingFunction: {
        elastic:
          'linear(0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077,1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,0.997 69.8%, 1.003 76.9%, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
