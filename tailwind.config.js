/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "shadow-[0_0_16px_4px_rgba(133,76,230,0.95),0_0_30px_10px_rgba(133,76,230,0.55)]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

