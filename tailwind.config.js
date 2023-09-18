/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E9ECFA', 
        'dark-blue': '#4C2FFD', 
        'dark-pink': '#E75480'
      }, 
    },
  },
  plugins: [require("daisyui")],
}

