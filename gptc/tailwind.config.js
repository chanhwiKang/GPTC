/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#ffffff', // 배경색
        defaultBtnColor: '#8854F7',
        disableBtnColor: '#C4BEE2',
        defaultPlaceholder: '#1e1e1e',
        defaultNavBg: '#F7F7F5',
      },
      screens: {
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
};
