/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#D9D9D9',
        'primary': '#CD092C',
        'border': '#797979',
      },
      fontFamily: {
        'inter': ['"Inter"'],
      }
    },
  },
  plugins: [],
}
