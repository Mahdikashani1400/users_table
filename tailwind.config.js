/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ["./src/*.{html,js}"],

  theme: {
    container: {
      center: "true"
    },
    extend: {
      backgroundColor: {
        black: {

          'dark': '#2A2C38',
        }
      },
      colors: {

        blue: {

          "primary": "#696CFF"
        },

      }
    },

  },

  plugins: [],

}
