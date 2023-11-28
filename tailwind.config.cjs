/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#010309",
          secondary: "#eae0cf",
          tertiary: "#26180a",
          "black-100": "#150e07",
          "black-200": "#251a03",
          "white-100": "#f3f3f3",
          "important" : "#ffa32e",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };