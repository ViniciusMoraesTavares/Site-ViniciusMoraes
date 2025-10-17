/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#84cc16',
          dark: '#65a30d',
        },
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        dark: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
          border: '#334155',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
