/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f2fdf3",
          70: "#edfcef",
          100: "#e4fce7",
          200: "#bdf5c6",
          300: "#89ec9a",
          400: "#4eda67",
          500: "#27c042",
          600: "#18922e",
          700: "#187d2b",
          800: "#186327",
          900: "#165122",
          950: "#062d0f",
          975: "#010a02",
        },
      },
    },
  },
  plugins: [],
};
