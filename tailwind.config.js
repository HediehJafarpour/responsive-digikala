/** @type {import('tailwindcss').Config} */
export default {
  content: [ './*.html',       
    './src/**/*.js'],
  theme: {
    extend: {},
    screens: {
      sm: "350px", // تغییر sm به 350px
      md: "768px", // مقدار پیش‌فرض md
      lg: "1024px", // مقدار پیش‌فرض lg
      xl: "1280px", // مقدار پیش‌فرض xl
      "2xl": "1536px", // مقدار پیش‌فرض 2xl
    },
    
   
  },
  plugins: [],
}
