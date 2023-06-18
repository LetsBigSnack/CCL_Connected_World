/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode:`media`,
  theme: {
    colors: {
      primary_bcc: "#00FFBB",
      secondary_bcc: "#00BD9D",
      tertiary_bcc: "#007A7F",
      background_bcc: "#011420",
      component_primary_bcc: "#014750",
      component_secondary_bcc: "#012e38",
      content_text:"#f8f8f2"
    },
    fontFamily: {
      'display': ['BigSpace'],
      'test': ['RedHatDisplay'],
      'navbar':['Monoserrat-Medium'],
      'main_content':['Monoserrat-Regular']
    },
    extend: {},
  },
  plugins: [ require('flowbite/plugin'),require("tw-elements/dist/plugin.cjs")],
}
