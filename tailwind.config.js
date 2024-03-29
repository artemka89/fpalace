export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E2E2E",
        secondary: "#3F3232",
        orange: "#FF9401",
        lihgt: "#FFFEFC",
        soft: "#fff9f0",       
      },
      boxShadow: {
        '3xl': '0px 20px 40px 0px rgba(255, 151, 2, 0.15)',
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }     
    },
  },
  plugins: [],
}

