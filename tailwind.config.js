const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        // sans: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#9BBFAE",
        secondary: "#3e2723",
      },
      width: {
        portrait: "320px",
        landscape: "768px",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
      fontSize: ["hover"],
      borderStyle: ["hover", "focus", "active"],
      borderWidth: ["hover", "focus", "active"],
      borderColor: ["hover", "focus", "active"],
      margin: ["first"],
      padding: ["first"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
