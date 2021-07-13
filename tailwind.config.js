const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobS': '320px',
      'mobM': '375px',
      'mobL': '425px',
      ...defaultTheme.screens,
    },
  },
}
