/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          light: '#ddf1f0', // Latar belakang lebih terang
          DEFAULT: '#abdbe3', // Latar belakang utama
          dark: '#063970' // Warna tombol
        },
        'custom-brown': {
          DEFAULT: '#4d4848ff' // Warna teks
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