/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          400: "#7C7C8A",
          500: "#323238",
          600: "#202024",
          700: "#121214",
        },

        green: {
          100: "#00B37E",
          200: "#00875F",
          300: "#015F43",
        },

        red: {
          100: "#F03847",
          200: "#7A1921",
        },
      },
    },
  },
  plugins: [],
};
