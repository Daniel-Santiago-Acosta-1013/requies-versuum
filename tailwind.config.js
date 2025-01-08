/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub colors
        github: {
          canvas: {
            DEFAULT: '#ffffff',
            dark: '#0d1117',
          },
          default: {
            DEFAULT: '#24292f',
            dark: '#c9d1d9',
          },
          subtle: {
            DEFAULT: '#6e7781',
            dark: '#8b949e',
          },
          muted: {
            DEFAULT: '#afb8c1',
            dark: '#484f58',
          },
          accent: {
            DEFAULT: '#0969da',
            dark: '#58a6ff',
          },
        },
      },
    },
  },
  plugins: [],
};