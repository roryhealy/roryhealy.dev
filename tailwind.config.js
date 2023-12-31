/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey-1': '#252b2d',
        'custom-grey-2': '#374043',
        'custom-grey-3': '#404B4F',
        'custom-blue-1': '#507dbc',
        'custom-blue-2': '#a1c6ea',
        'custom-blue-3': '#bbd1ea',
        'custom-white': '#dae3e5'
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans']
      }
    }
  }
}
