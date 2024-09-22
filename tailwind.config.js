/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#1A2135',
        customBlack: '#252937',
        customGray2: '#32394E',
        customBlue: '#2A3759',
        customWhite: '#DDDFEF',
        heroBlack:'#050812',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}