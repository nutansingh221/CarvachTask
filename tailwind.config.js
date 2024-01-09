/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: '0.8rem',
          sm: '0.8rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

