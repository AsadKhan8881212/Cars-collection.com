// Now swiper coding start

let swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
      slideShadows: false,
      rotate: 40,
      depth: 300,
    },
  });