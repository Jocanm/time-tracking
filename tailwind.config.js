const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'sm':'1001px'
    },
    colors:{
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      amber: colors.amber,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      orange: colors.orange,
      purple: colors.purple,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      // cyan: colors.cyan,
      sky: colors.sky,
      white: colors.white,
      indigo: colors.indigo,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      tk:{
        purple: 'hsl(246, 80%, 60%)',
        orange: 'hsl(15, 100%, 70%)',
        softblue:'hsl(195, 74%, 62%)',
        lightRed:'hsl(348, 100%, 68%)',
        green:'hsl(145, 58%, 55%)',
        violet:'hsl(264, 64%, 52%)',
        yellow:'hsl(43, 84%, 65%)',
        blue:{
          darkest:'hsl(226, 43%, 10%)',
          dark:'hsl(235, 46%, 20%)',
          desaturated:'hsl(235, 45%, 61%)',
          pale:'hsl(236, 100%, 87%)'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}