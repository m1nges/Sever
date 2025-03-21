const btn = document.querySelector(".header-content-wrap__a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const isMobile = window.innerWidth <= 530;

  if (isMobile && scrollY > 80) {
    btn.classList.add("compact");
  } else {
    btn.classList.remove("compact");
  }
});

//swiper slider integration
const swiper = new Swiper(".sample-slider", {
  speed: 900,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 100,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper.autoplay.stop();
