/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Open Sans", "sans-serif"],
        "serif": ["Merriweather", "serif"],
        'mono': ["Roboto Flex", "sans-serif"]
      },
      colors: {
        "primary": "#3098bb",
        "secondary": "#072d6e",
        "tertiary": "#3e90ab",
        "info": "#fdfbf2",
        "warning": "#febd59",
        "brown": "#67442d"
      },
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
};
