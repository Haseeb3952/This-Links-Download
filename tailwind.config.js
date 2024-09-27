/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: ["tw-"],
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        fontOutfit: ["Outfit", "sans - serif"],
        fontExo: ['"Exo"', "sans-serif"],
      },
      backgroundColor: {
        greenBG: "#06C328",
      },
    },
  },
  plugins: [],
};
