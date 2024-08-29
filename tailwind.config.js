/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-50% center' },
          '100%': { backgroundPosition: '50% center' },
        },
      },
      animation: {
        shimmer: 'shimmer 9s linear infinite alternate',
      },
    },
  },
  plugins: [],
}

