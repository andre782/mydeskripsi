/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          bodyFont: ["Poppins",  "sans-serif"],
          titleFont: ["Montserrat", "sans-serif"]
      },
      colors: {
        bodyColor: "#191919",
        textColor: "rgba(225, 225, 225, 0.85)",
        designColor: "#edff20",
        titleRoundBg: "linear-gradient(135deg,rgba(120,204,109,.15)) 0%,rgba(120,204,109,1%) 100%)"
      },
        animation:{
          "spin-slow": "spin 15s linear infinite",
          "reverse-spin": "reverse-spin 15% linear infinite",
        },

        keyframes: {
          "reverse-spin": {
            from: {
              Transform: "rotate(360deg)",
            },
          },
        },
        
        boxShadow:{
          greenShadow: "0px 0px 188px -14px rgba(237,255,32,1)",
          testShadow: "11px 0px 13px -15px rgb(0,0,0,1),"
        },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

