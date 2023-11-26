/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'laranja': '#FF6A3A',
        'rosa': '#FF5478'
      },
    },
  },
  plugins: [],
}
