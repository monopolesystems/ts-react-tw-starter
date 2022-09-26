const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      ...defaultTheme,
    },
  },
  plugins: [],
}
