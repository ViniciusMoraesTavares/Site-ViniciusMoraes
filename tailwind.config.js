/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',    
        },
        accent: {
          DEFAULT: '#F9FAFB',
        },
        // Light theme colors
        light: {
          bg: '#FFFFFF',
          'bg-secondary': '#F8FAFC',
          card: '#FFFFFF',
          hover: '#F1F5F9',
          border: '#E2E8F0',
          text: {
            primary: '#1E293B',
            secondary: '#64748B',
          },
        },
        // Dark theme colors
        dark: {
          DEFAULT: '#0F0F0F',
          lighter: '#1F2937',
          border: '#374151',
          hover: '#374151',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
};