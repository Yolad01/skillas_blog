/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        inter: ['Inter']
      },
      colors: {
        darkGreen: '#002D38',
        grey: '#464646',
      },
    },
  },
  plugins: [],
};