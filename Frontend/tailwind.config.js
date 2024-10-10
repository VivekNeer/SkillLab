const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sixtyfour: ['Sixtyfour Convergence', 'sans-serif'],
        protest: ['"Protest Strike"', 'cursive'],
        exo: ['"Exo 2"', 'sans-serif'],
        honk: ['Honk', 'sans-serif'], 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}