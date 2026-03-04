/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      colors: {
        'brand-yellow': '#ffd370',
        'brand-orange': '#d87355',
        'brand-dark':   '#333333',
        'brand-gray':   '#9f9a91',
      },
      backgroundImage: {
        'half-yellow': 'linear-gradient(175deg, #ffd370 60%, #fff 40%)',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
      },
      boxShadow: {
        'todo': '0 0 15px 0 rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'todo': '10px',
      },
    },
  },
  plugins: [],
};
