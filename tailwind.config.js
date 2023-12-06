/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '200px':'200px',
        '100px': '100px',
        '10%': '10%',
        '20%': '20%',
        '90%': '90%',
        '80%': '80%',
        '250px': '250px',
        '300px': '300px',
        '100px': '100px',
        '150px': '150px',
      },
      height: {
        '300px': '300px',
        '200px': '200px',
        '250px': '200px',
        '350px': '350px',
        '400px': '400px',
        '100vh': '100vh',
        '180px': '180px',
        '100px': '100px',
        '150px': '150px',

      },
      margin: {
        '100px': '100px',
        '150px': '150px',
        '180px': '180px',
        '10%': '10%'
      },
      spacing: {
        '2/3': '66.66666%',
        '3/5': '60%',
      }, 
      backgroundColor : {
        '#FFFFFF': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

