/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#ebe8e1',
        ink: '#11110f',
        ash: '#6f6c66',
        line: '#cbc6ba',
        wine: '#5b1720',
      },
      fontFamily: {
        sans: ['Oswald', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
        serif: ['Oswald', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
