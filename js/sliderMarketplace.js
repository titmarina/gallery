new Swiper('.marketplace-swiper', {
  // Optional parameters
  loop: true,
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 19,
  centeredSlides: true,

  breakpoints: {
    600:
    {
      slidesPerView: 3,
      spaceBetween: 19,
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 38,
    },

    1440: {
      slidesPerView: 6,
      spaceBetween: 66,
    }
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },



  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,

  }


});