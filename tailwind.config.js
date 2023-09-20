/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "light-white": "rgba(255,255,255,0.17)"
      },
      'mulish': ["Mulish", "sans-serif"],
      'nunito': ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
}

