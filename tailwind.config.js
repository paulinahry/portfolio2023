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
        details: '#4ff7b2',
        transparent: 'transparent',
        'red-alpha': 'rgba(180, 58, 75, 0.866)',
        'red-beta': 'rgba(253, 29, 29, 0.813)',
        'yellow-gr': 'rgba(252, 176, 69, 0.846)',
      },
      fontFamily: {
        savete: "savete",
        macherie: "macherie",
        oswald: ["Oswald", "sans-serif"]
      },
      boxShadow: {
        standard: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    
    
  },
  plugins: [],
}