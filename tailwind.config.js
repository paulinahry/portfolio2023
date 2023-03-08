/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        details: '#4ff7b2',
      },
      fontFamily: {
        savete: "savete",
        macherie: "macherie",
        oswald: ["Oswald", "sans-serif"]
      },
      boxShadow: {
        standard: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        expand: "0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(88, 50, 200, 0.1), 0 0 18px rgba(255, 255, 255, 1)"

      },
    },
    
    
  },
  plugins: [],
}