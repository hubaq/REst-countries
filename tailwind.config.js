/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
      },
      fontSize: {
        '2rem': '2rem',         // 32px
        '1rem': '1rem',         // 16px
        '0.875rem': '0.875rem', // 14px
        '0.75rem': '0.75rem',   // 12px
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        'dark-gray': '#1B1D1F',
        'charcoal': '#282B30',
        'bright-blue': '#4E80EE',
        'steel-gray': '#6C727F',
        'light-gray': '#D2D5DA',
      },
    },
  },
  plugins: [],
}

