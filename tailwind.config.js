const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#202225",
      secondary: "#5865f2",
      gray: colors.gray,
    },
  },
  plugins: [],
};
