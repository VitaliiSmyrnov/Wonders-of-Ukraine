/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".any-class": {
      transform: "rotateY(0deg)",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "834px",
        lg: "1440px",
        "md-img": "400px",
        "lg-img": "900px",
        "xlg-img": "1500px",
        dpr: {
          raw: "screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx)",
        },
      },
      fontFamily: {
        jomolhari: ["Jomolhari", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        bg: "#141A19",
        but: "#394014",
        "back-menu-mobile": "#141A1A",
      },
      dropShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        18: ["18px", { lineHeight: "25.2px", letterSpacing: "0.18px" }],
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
