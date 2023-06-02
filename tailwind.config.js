// tailwind.config.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  plugins: [FormKitVariants],

  theme: {
    extend: {
      colors: {
        'lightblue': '#C9D9E9',
        'green': '#92D1A4',
        'greenmedium': '#629642',
        'primarygreen': '#587B47',
        'red': '#E86D84',
        'orange': '#F5C745',
        'backgroundgray': '#F6FBFC',
        'bodybackgroundgray': '#fafafa',
      },
    },
  },

}