module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#AE163E",
        secondary: "#F0DEDA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ... and
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
