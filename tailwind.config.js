/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#E18633',
      },
      backgroundImage: {
        'restaurant-cover': "url('../src/assets/images/cover_image.png')",
      }
    },
  },
  plugins: [],
};
