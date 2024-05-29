/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/*.{html,js,jsx}",
    "./src/components/*.{html,js,jsx}",
    "./src/components/navbar_components/*.{html,js,jsx}",
    "./src/components/result_tiles/*.{html,js,jsx}",
    "./src/components/resultStates/*.{html,js,jsx}",
  ],
  theme: {
    colors: {
      white: "#FEFFD2",
      peach: "#FFEEA9",
      topaz: "#FFBF78",
      orange: "#FF7D29",
      black: "#0b0c10",
      gray: "#0b0c10AA", // 80% transparent is defined by CC
      cyan: "#66fcf1",
    },
    extend: {},
  },
  plugins: [],
};
