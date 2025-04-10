/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily:{
            Rokkitt:["Rokkitt", "serif"]
        },
        container:{
            center:true,
            padding:{
                DEFAULT: '1 rem',
                sm:'2rem',
                lg:'4rem',
                '2xl' : '6rem'
            }
        },
        colors: {
          primary: '#FFBA41',
          secondary: '#00537B',
        },
      },
    },
    plugins: [],
  };
