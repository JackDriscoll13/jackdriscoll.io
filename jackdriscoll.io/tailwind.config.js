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
    },
  },
  plugins: [],
}

