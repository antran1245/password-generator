/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'darkgrey': '#24232C',
      'grey': '#817D92',
      'white': '#E6E5EA',
      'black': '#18171F',
      'green': '#A4FFAF',
      'red': '#F64A4A',
      'orange': '#FB7C58',
      'yellow': '#F8CD65'
    },
    fontFamily: {
      'JetBrains' : ['JetBrains Mono', 'monospace']
    },
    spacing: {
      '19' : '19px',
      '32' : '32px'
    },
    extend: {},
  },
  plugins: [],
}
