const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 3000,
  slidesPerView: 2,
  breakpoints: {
    600: {
      slidesPerView: 4,
    },
  },
});
