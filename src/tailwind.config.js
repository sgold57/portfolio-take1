
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mob-s': '320px',
      'mob-m': '375px',
      'mob-l': '425px',
      ...defaultTheme.screens,
    },
  },
}
