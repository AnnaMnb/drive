var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      // dynamicBullets: true,
      type: "progressbar",
    },
    mousewhell: true,
    keyboard: true,
    speed: 1000,
    
    breakpoints: {
      320: {
        spaceBetween: 8,
        slidesPerView: 1,
      },
      480: {
        spaceBetween: 18,
        slidesPerView: 1.5,
      },
      660: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      710: {
        spaceBetween: 22,
        slidesPerView: 2,
      },
      980: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
    }
  });