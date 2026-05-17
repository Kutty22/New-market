/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        dark: '#0B0E14',
        primary: '#0066FF',
        accent: '#FF6B00',
      }
    },
  },
  plugins: [],
}
