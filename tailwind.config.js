/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gis-blue": "#214D81",
      },
    },
    fontFamily: {
      gis: ["Verdana", "sans-serif"],
    },
  },
  plugins: [],
};
