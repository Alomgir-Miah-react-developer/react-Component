/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '65px',
    },
    fontFamily: {
      'Poppins': ["Poppins", "sans-serif"],
      "roboto" : ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}