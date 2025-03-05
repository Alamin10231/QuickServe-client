/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', ...fontFamily.sans],
        source: ['Source Sans 3', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

