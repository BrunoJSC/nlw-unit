import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/fontFamily.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
