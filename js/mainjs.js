let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  // 切换类名
  navbar.classList.toggle("nav-toggle");
  menu.classList.toggle("fa-close");
  menu.classList.toggle("fa-bars");
});

window.onscroll = () => {
  navbar.classList.remove("nav-toggle");
  if (menu.classList.contains("fa-close")) {
    menu.classList.toggle("fa-close");
    menu.classList.toggle("fa-bars");
  }
};

var mySwiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
