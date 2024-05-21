// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        xl: "0 4px 10px 0 rgba(189, 208, 223, .25);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
