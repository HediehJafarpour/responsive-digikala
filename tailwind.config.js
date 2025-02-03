/** @type {import('tailwindcss').Config} */
export default {
  content: [ './*.html',       
    './src/**/*.js'],
  theme: {
    extend: {},
    screens: {
      sm: "370px", 
      md: "768px", 
      lg: "1340px", 
      // xl: "1280px",
      // "2xl": "1536px", 
    },
    
   
  },
  plugins: [],
}
