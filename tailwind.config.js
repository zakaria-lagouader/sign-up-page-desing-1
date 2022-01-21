module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      }
    },
    colors: {
      "dark-blue": "hsl(228deg 8% 12%)",
      "gray": "hsl(220deg 5% 23%)",
      "light-gray": "hsl(0deg 0% 89%)",
      "purple": "hsl(232deg 88% 64%)",
      "muted": "hsl(200deg 2% 61%)",
      white: "white"
    }
  },
  plugins: [],
}
