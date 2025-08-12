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
          DEFAULT: '#bfdbfe', // Latar belakang utama
          dark: '#063970' // Warna tombol
        },
        'custom-brown': {
          DEFAULT: '#4d4848ff' // Warna teks
        }
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'display': ['"Playfair Display"', 'serif'],
      },
      animation: {
        'wind-blow': 'wind-blow 0.1s ease-in-out infinite',
        'wind-blow-rotated': 'wind-blow-rotated 3s ease-in-out infinite',
      },
      keyframes: {
        'wind-blow': {
          '0%, 100%': {
            transform: 'rotate(-3deg) translateX(-4%)',
          },
          '50%': {
            transform: 'rotate(3deg) translateX(4%)',
          },
        },
        'wind-blow-rotated': {
          '0%, 100%': { transform: 'rotate(180deg) rotate(-1deg) translateX(-1%)' },
          '50%': { transform: 'rotate(180deg) rotate(2deg) translateX(1%)' },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}