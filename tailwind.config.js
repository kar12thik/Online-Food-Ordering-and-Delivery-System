/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E18633",
      },
      backgroundImage: {
        "restaurant-cover": "url('../src/assets/images/cover_image.png')",
        "order-now-background":
          "url('../src/assets/images/order_now_background.png')",
        "search-rest-background": "url('../src/assets/images/bg.jpg')",
        "rest-page-bg1": "url('../src/assets/images/rest-page-bg1.jpg')",
      },
    },
  },
  plugins: [],
};
