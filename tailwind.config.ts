module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
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
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
    plugins: [],
  };
