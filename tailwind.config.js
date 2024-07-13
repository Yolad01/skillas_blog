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
      screens: {
        'xs': '400px',  // Custom extra small breakpoint
        'sm': '640px',  // Small devices (default)
        'md': '768px',  // Medium devices (default)
        'lg': '1024px', // Large devices (default)
        'xl': '1280px', // Extra large devices (default)
        '2xl': '1536px', // Custom extra large breakpoint
      },
    },
  },
  plugins: [],
};