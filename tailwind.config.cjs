/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backdrop-hidden": {
      visibility: "hidden",
      opacity: 0,
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
        // background: linear-gradient(359deg, #141A19 7.33%, rgba(0, 0, 0, 0.00) 77.68%), linear-gradient(180deg, #141A19 3.18%, rgba(0, 0, 0, 0.00) 84.14%), url(<path-to-image>), lightgray -527.215px -213.685px / 368.495% 229.432% no-repeat;
        // modal:
        //   "linear-gradient(359deg, #141A19 7.33%, rgba(0, 0, 0, 0.00) 100%), url('./images/mob/mob-reviews.jpg'), var(--bg-modal)",
        modal: "url('./images/mob/mob-reviews.jpg'), var(--bg-modal)",
        modal2x: "url('./images/mob/mob-reviews@2x.jpg'), var(--bg-modal)",
        "hero-mob":
          "url('./images/mobile/hero_mob-min.jpg'), var(--bg-gradient)",
        "hero-mob2x":
          "url('./images/mobile/hero_mob-min@2x.jpg'), var(--bg-gradient)",
      },
    },
  },
  plugins: [Myclass],
};
