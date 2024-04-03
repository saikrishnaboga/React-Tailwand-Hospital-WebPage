/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
        "theme-blue": "#0057A6",
        "light-green": "#02ABA3",
        "border-light-green": "#02ABA3",
        "text-em": "#0057A6",
        "em-green": "#13BFB4"
      },
    },
  },
  plugins: [],
}

