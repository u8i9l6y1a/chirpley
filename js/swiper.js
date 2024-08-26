export function swiper() {

  new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

}