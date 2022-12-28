/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "yellow-line": "#E3A008",
      "orage-line": "#FFC714",
      "grey-line": "#ccc",
      "black-line": "#000000",
      "purple-line": "#7460F5",
      "blue-line": "#76A9FA",
      "green-line": "#4BCC9B",
      "red-line": "#F98484",
      "blue-light": "#C3DDFD",
      "yellow-light": "#FCE96A",
      "green-light": "#BCF0DA",
      "red-light": "#FBD5D5",
      "purple-light": "#DEDFFD",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
