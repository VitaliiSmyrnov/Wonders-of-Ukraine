/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".any-class": {
      transform: "rotateY(0deg)",
    }
  });
});

export default {
  content: ["./index.html", "./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1440px",
        xl: "1920px",
        "md-img": "400px",
        "lg-img": "800px",
        "xl-img": "1600px",
        "xxl-img": "2000px",
        dpr: {
          raw: "screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)",
        },
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#1B1D1B",
        secondary: "#202321",
        accent: "#5B86A1",
        light: "#F7FBFB",
        grey: "#A3A5A3",
        backdrop: "rgba(0, 0, 0, 0.2)",
        dark_70: "rgba(32, 35, 33, 0.70)",
      },
      dropShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        14: ["14px", { lineHeight: "17px" }],
        16: ["16px", { lineHeight: "20px" }],
        "16l": ["16px", { lineHeight: "22px" }],
      },
      backgroundImage: {
        "hero-mob":
          "url('./images/mobile/hero_mob-min.jpg'), var(--bg-gradient)",
        "hero-mob2x":
          "url('./images/mobile/hero_mob-min@2x.jpg'), var(--bg-gradient)",
      },
    },
  },
  plugins: [Myclass],
};
