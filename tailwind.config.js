/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        midnightGreen: '#014E56',
        lightColor: '#f67e7e',
        raptureBlue: '#79c8c7',
        policBlue: '#2c6269',
        deepGreen: '#004047',
        stateGreen: '#012f34',
        darkGreen: '#002529',
      },
    },
  },
  plugins: [],
}
