/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'custom-grey': '#252b2d',
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
