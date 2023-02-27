/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        darkBeige: '#e2ddd3',
        lightBeige: '#efeade',
        basicRed: '#cd412e',
        basicYellow: '#e7ab4b',
        basicOrange: '#e0883d',
        cvYellow: '#FDFDC6',
        cvBlue: '#8EBBBD',
        transparent: 'transparent'
      },
      fontFamily: {
        savete: "savete",
        macherie: "macherie"
      },
      boxShadow: {
        standard: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    
    
  },
  plugins: [],
}