/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "!src/**/*.{VideoPlayer, VideoPage}.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}