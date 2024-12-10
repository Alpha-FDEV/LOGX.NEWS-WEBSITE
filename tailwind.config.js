/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      keyframes: {
        scaleTranslate: {
          "0%, 100%": { transform: "scale(1) translateY(0)" },
          "50%": { transform: "scale(1.3) rotate(180deg)  translateY(-2%)" },
        },
      },
      animation: {
        "scale-translate": "scaleTranslate 4s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
