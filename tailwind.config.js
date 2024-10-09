/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      yellow: colors.yellow,
      cyan: colors.cyan[700],
      green: colors.green[400],
      lime: colors.green[400],
      red: colors.red[500],
      purple: colors.purple[500],
      orange: colors.orange[400],
      midnight: {
        50:  "#EBEFFC",
        100: "#D4D8E5",
        200: "#BDC1CE",
        300: "#A6AAB7",
        400: "#8E929F",
        500: "#606471",
        600: "#606471",
        700: "#494D5A",
        800: "#323643",
        900: "#1B1F2C",
      },
    },
    /*colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },*/
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
