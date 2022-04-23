const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./app/**/*.html","./assets/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['"Poppins"','sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      blackblue : '#05060A',
      bodyL:'#FBFEFF', 
      sectionBg:'#FBFEFF',
      heroBg : '#ECF3FF',
      grayBlue : '#5D616F',
      primary : '#3E82FC',
      red : '#FE2C54',
      
    },
    extend: {
      dropShadow: {
        'costum': '0px 4px 60px rgba(62, 130, 252, 0.35)',
      },
      boxShadow:
      {
        'costum': ' 0px 54px 104px rgba(0, 0, 0, 0.04)',
      },
      zIndex:{
        100:'100'
      }
    },
  },
  plugins: [],
}
