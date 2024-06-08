/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxsm: "332px",
      xsm: "432px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
      "2xl": "1536px",
      'custom-md': '1122px',
      'custom-lg': '1300px',
    },
    extend: {},
  },
  plugins: [],
};
