/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
             
     fontFamily:{
      inter: "'Inter',sans-serif",
      mohave: "'Mohave', sans-serif",
      oswald: "'Oswald', sans-serif",
      neon: "'Tilt Neon', sans-serif"
     },
     gridTemplateRows:{
      7: "repeat(7, minmax(0,1fr))",
      8: "repeat(8, minmax(0,1fr))",

     }

    },
  },
  plugins: [],
}

