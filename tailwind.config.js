/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')"
      },
      colors: {
        "logo-green": "#08FD0C"
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}