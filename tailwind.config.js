/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
        dimBlue: "#6A44F2",
        richBlue: "#1CBDDD",
        indigo: "#52378C",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      ss: "768px",
      sm: "1200px",
      md: "1440px",
    },
  },
  plugins: [],
};
