/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        milo: {
          yellow: '#fcd34d',
          orange: '#fb923c',
          pink: '#f472b6',
          purple: '#c084fc',
          green: '#4ade80'
        }
      },
      fontFamily: {
        comic: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px rgba(0, 0, 0, 0.9)',
        'comic-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.9)',
        'comic-lg': '6px 6px 0px 0px rgba(0, 0, 0, 0.9)',
        'comic-hover': '2px 2px 0px 0px rgba(0, 0, 0, 0.9)',
      },
      spacing: {
        '4.5': '1.125rem',
      }
    },
  },
  plugins: [],
};
