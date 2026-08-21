/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#6B1F22',
          maroonDark: '#521619',
          maroonLight: '#85292D',
          ivory: '#FDFBF7',
          ivoryDark: '#F7F2E9',
          gold: '#C5A880',
        }
      }
    },
  },
  plugins: [],
}