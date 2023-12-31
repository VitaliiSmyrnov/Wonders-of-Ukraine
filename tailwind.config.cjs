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
        grey: "#5A5959",
      },
      fontSize: {
        12: ["12px", { lineHeight: "16.8px", letterSpacing: "0.12px" }],
        16: ["16px", { lineHeight: "22.4px", letterSpacing: "0.16px" }],
        18: ["18px", { lineHeight: "25.2px", letterSpacing: "0.18px" }],
        20: ["20px", { lineHeight: "28.0px", letterSpacing: "0.2px" }],
        24: ["24px", { lineHeight: "33.6px", letterSpacing: "0.24px" }],
        32: ["32px", { lineHeight: "44.8px", letterSpacing: "0.32px" }],
        40: ["40px", { lineHeight: "56.0px", letterSpacing: "0.4px" }],
        48: ["48px", { lineHeight: "67.2px", letterSpacing: "0.48px" }],
        64: ["64px", { lineHeight: "89.6px", letterSpacing: "0.64px" }],
        128: ["128px", { lineHeight: "179.2px", letterSpacing: "1.28px" }],
      },
      backgroundImage: {
        mirror: "var(--bg-hero-mirror)",
        modal: "url('../images/mob/mob-reviews.jpg'), var(--bg-modal)",
        modal2x: "url('../images/mob/mob-reviews@2x.jpg'), var(--bg-modal)",
        "hero-mob": "url('../images/mob/mob-hero.jpg'), var(--bg-hero)",
        "hero-mob2x": "url('../images/mob/mob-hero@2x.jpg'), var(--bg-hero)",
        "hero-tab": "url('../images/tab/tab-hero.jpg'), var(--bg-hero)",
        "hero-tab2x": "url('../images/tab/tab-hero@2x.jpg'), var(--bg-hero)",
        "hero-desk": "url('../images/desk/desk-hero.jpg'), var(--bg-hero)",
        "hero-desk2x": "url('../images/desk/desk-hero@2x.jpg'), var(--bg-hero)",
        "about-mob": "url('../images/mob/mob-about.png')",
        "about-mob2x": "url('../images/mob/mob-about@2x.png')",
        "about-tab": "url('../images/tab/tab-about.png')",
        "about-tab2x": "url('../images/tab/tab-about@2x.png')",
        "about-desk": "url('../images/desk/desk-about.png')",
        "about-desk2x": "url('../images/desk/desk-about@2x.png')",
        "tours-back": "url('../images/desk/desk-tours-back.png')",
        "tours-back2x": "url('../images/desk/desk-tours-back@2x.png')",
        "reviews-mob": "url('../images/mob/mob-reviews.jpg'), var(--bg-modal)",
        "reviews-mob2x":
          "url('../images/mob/mob-reviews@2x.jpg'), var(--bg-modal)",
        "reviews-tab": "url('../images/tab/tab-reviews.jpg'), var(--bg-modal)",
        "reviews-tab2x":
          "url('../images/tab/tab-reviews@2x.jpg'), var(--bg-modal)",
        "reviews-desk":
          "url('../images/desk/desk-reviews.jpg'), var(--bg-modal)",
        "reviews-desk2x":
          "url('../images/desk/desk-reviews@2x.jpg'), var(--bg-modal)",
        "travel-mob": "url('../images/mob/mob-travel.jpg'), var(--bg-form)",
        "travel-mob2x":
          "url('../images/mob/mob-travel@2x.jpg'), var(--bg-form)",
        "travel-tab": "url('../images/tab/tab-travel.jpg'), var(--bg-form)",
        "travel-tab2x":
          "url('../images/tab/tab-travel@2x.jpg'), var(--bg-form)",
        "travel-desk": "url('../images/desk/desk-travel.jpg'), var(--bg-form)",
        "travel-desk2x":
          "url('../images/desk/desk-travel@2x.jpg'), var(--bg-form)",
      },
    },
  },
  plugins: [Myclass],
};
