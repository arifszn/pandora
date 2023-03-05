/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#1DA74D',
        },
      },
    ],
  },
};
