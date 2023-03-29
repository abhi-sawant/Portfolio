/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Readex Pro', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-bg.svg')",
      },
      keyframes: {
        bganim: {
          '0%': { 'background-position-y': '0' },
          '50%': { 'background-position-y': '50%' },
          '100%': { 'background-position-y': '100%' },
        },
      },
      animation: {
        bganim: 'bganim 60s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      });
    },
  ],
};
