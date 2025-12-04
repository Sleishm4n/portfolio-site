/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        polyGreen: '#2C5530',
        rasin: '#191923',
        tang: '#FF9D5C',
        silver: '#CCCCCC',
        smoke: '#F2F2F2',
      },
    },
  },
  plugins: [],
}
