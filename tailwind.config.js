/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        display: ['Playfair Display', 'serif'],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
