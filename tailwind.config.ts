/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        "martian-mono": ['"Martian Mono"', "monospace"],
        "satoshi": ['Satoshi', 'sans-serif']
      },
      colors: {
        'custom-bg': '#191A1F', 
        'custom-them': '#F65930', 
      },
    },
  },
  plugins: [],
};
