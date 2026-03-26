/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#F0F0F0',
        'charcoal': '#333333',
        'accent': '#93E9BE',
      },
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-x-180': {
          transform: 'rotateX(180deg)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

