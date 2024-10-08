/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('images/HorizontalBorder.svg')",
        'bgHeroImg': "url(images/bg-hero.jpg)"
      }
    },
  },
  plugins: [],
}

