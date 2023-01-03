/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonblue: "#3342E8",
        noblack: "#121212",
        lightdark: "#1C1C1C",
        grey: "#868686",
      },
      dropShadow: {
        aura: "0px 0px 50px rgba(255, 255, 255, 0.2)",
      },
      transitionDelay: {
        450: "450ms",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
