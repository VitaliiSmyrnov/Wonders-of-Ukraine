// import Swiper from "swiper/bundle";

// import "swiper/css/bundle";

import Swiper from "swiper";
import { Navigation, Keyboard } from "swiper/modules";

const swiperTours = new Swiper("#swiper-tours", {
  // Optional parameters
  modules: [Navigation, Keyboard],
  direction: "horizontal",
  loop: false,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-next-1",
    prevEl: ".swiper-prev-1",
  },
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
});

const swiperGallery = new Swiper("#swiper-gallery", {
  // Optional parameters
  modules: [Navigation, Keyboard],
  direction: "horizontal",
  loop: false,
  breakpoints: {
    834: {
      slidesPerView: 2,
      spaceBetween: 16,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-next-2",
    prevEl: ".swiper-prev-2",
  },
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
});

const swiperReviews = new Swiper("#swiper-reviews", {
  // Optional parameters
  modules: [Navigation, Keyboard],
  direction: "horizontal",
  loop: false,
  breakpoints: {
    834: {
      slidesPerView: "auto",
      spaceBetween: 32,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,
      centeredSlides: false,
      centeredSlidesBounds: false,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-next-3",
    prevEl: ".swiper-prev-3",
  },
  spaceBetween: 16,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
});
