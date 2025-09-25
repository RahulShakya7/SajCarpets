  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{html,js}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Open Sans"', 'sans-serif'],
        },
        colors: {
          primary: "#B23017",
          secondary: "#A0D5D3",
          accent: "#E91E63",
          // Add more custom colors as needed
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'), // optional
    ],
  };
