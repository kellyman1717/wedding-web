/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': {
          light: '#FCE7F3', // Latar belakang lebih terang
          DEFAULT: '#FBCFE8', // Latar belakang utama
          dark: '#DB2777' // Warna tombol
        },
        'custom-brown': {
          DEFAULT: '#6d5d5d' // Warna teks
        }
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'display': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}