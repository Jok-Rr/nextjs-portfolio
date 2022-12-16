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
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
