/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo": {
          DEFAULT: "#00df9a",
          "dark": "#00b37a"
        },
        "base": {
          DEFAULT: "#000300",
        }
      }
    },
  },
  plugins: [],
}

