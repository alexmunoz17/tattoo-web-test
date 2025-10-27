/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9333EA',
        'primary-dark': '#7C22CC',
        secondary: '#2A5EEF',
        accent: '#D7263D',
        'bg-dark': '#0B0B0F',
        'text-primary': '#F7F7F7',
        'text-secondary': '#AFAFB4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9333EA 0%, #7C22CC 50%, #D7263D 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(11, 11, 15, 0.9) 0%, rgba(147, 51, 234, 0.3) 100%)',
      },
    },
  },
  plugins: [],
}
