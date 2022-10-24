import Swiper, { Navigation, Pagination, EffectCube } from 'swiper';
Swiper.use([Navigation, Pagination, EffectCube]);

const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const contactSlider = new Swiper('.contact-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const blogSlider = new Swiper('.blog-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




