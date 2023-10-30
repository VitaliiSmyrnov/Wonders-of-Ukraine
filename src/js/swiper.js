import Swiper from "swiper";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
});
