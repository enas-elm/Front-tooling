/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html',
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#027b80',
      'primaryLight': '#B3ECEC',
      'primaryDark': '#00484F',

      'secondary': '#af4d4d',
      'secondaryLight': '#EBC6C6',
      'secondaryDark': '#7D0000',

      'tertiary': '#A2CF8C',
      'tertiaryLight': '#e3fad8',
      'tertiaryDark': '#5C8149',

    },
    screens: {
      xs: '480px',
    },
  },
  plugins: [],
};
