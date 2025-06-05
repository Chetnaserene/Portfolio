/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'light-blue': '#ADD8E6',
        'light-blue-50': '#E6F3FA',
        'rani-pink': '#C71585',
        'rani-pink-50': '#F5D0E5',
        'gray-800': '#333333',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};