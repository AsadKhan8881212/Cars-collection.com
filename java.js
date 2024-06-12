const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menuItemsContainer = document.querySelector(".menu-items-container");

menuIcon.addEventListener("click", () => {
    menuItemsContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    menuItemsContainer.classList.remove("active");
});

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