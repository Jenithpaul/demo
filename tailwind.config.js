/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fff',
          beige: '#f3f0e5',
          brown: '#b3824a',
          walnut: '#4e342e',
          sand: '#8d6e63',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Poppins', 'serif'],
        body: ['Inter', 'Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
