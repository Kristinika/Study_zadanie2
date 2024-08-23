/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'white' : '#FFFFFF',
      'gray-light': '#FBFBFB',    
      'gray': '#4B525B',
      'gray-dark': '#2E2E2E',
      'blue': '#1485EE',
      'blue-light': '#F0F4FF',
      'goluboi': '#75A4FF',
      'yellow': '#FFFBD4',
      'black': '#000000',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

