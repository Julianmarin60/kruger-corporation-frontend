/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUi],
  daisyui: {
    themes: ["light", "dark", "bumblebee"],
  },
}
