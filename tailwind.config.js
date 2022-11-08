/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: ["Helvetica", "Arial", "sans-serif"],
  },
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        prestige: "prestige"
      },
      animation: {
        "fade-in": "animation: fadeIn 5s infinite",
      },
      
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
