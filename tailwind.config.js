/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF90',
          600: '#D4AF00',
        },
      },
    },
  },
  plugins: [],
}
