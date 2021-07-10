const colors = require('tailwindcss/colors') 
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:
    {
red:colors.red,
green:colors.green,
gray:colors.gray,
black:colors.black,
white:colors.white,
blue:colors.blue,
yellow:colors.yellow
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
