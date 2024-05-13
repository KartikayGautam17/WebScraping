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
    extend: {},
  },
  plugins: [],
};
