const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: colors.white,
      gray: colors.warmGray,
      rose: colors.rose,
      'minnmax-prime': '#ff5030',
    },
    fontWeight: {
      hairline: 100,
      light: 300,
      normal: 400,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
