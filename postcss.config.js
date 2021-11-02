var tailwindcss = require('tailwindcss')
var autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), autoprefixer]
}
