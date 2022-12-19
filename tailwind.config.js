/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "1px",
      3: "2px",
      4: "3px",
      6: "4px",
      8: "5px",
    },
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'"],
      },
      backgroundImage: {
        'mate': "url('/public/images/mate-bg.jpg')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        "slide-down": {
          "from": {transform: "translateY(-3rem)", opacity: 0},
          "to": {transform: "translateY(0)", opacity: 1}
        }
    },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        "slide-down": "slide-down 300ms ease-out"
      }
    },
  },
  plugins: [],
};
