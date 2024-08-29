/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'dl': '870px',
      'gd': '920px',
      'lg': '1024px',
      'xg': '1155px',
      'xl': '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
      '3xl': '1680px',
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
      'g': '#42b400',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

