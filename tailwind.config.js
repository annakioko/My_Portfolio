/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2b363b",
        white: "#f8f9fa",
        suede: "#c59f6d",
        brown: "#efdcc3",
      },
    },
  },
  plugins: [],
};

