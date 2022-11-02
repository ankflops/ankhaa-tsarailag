/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
      5: ".05",
      25: ".25",
      75: ".75",
    },
    extend: {
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
      inset: {
        "1/2": "50%",
      },
      fontFamily: {
        main: ["Montserrat"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      colors: {
        dark: "#181818",
        primary: "#d29e0e",
        secondary: "#e5001c",
      },
      spacing: {
        72: "18rem",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
    },
  },
  plugins: [],
};
