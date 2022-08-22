const swiper = new Swiper('.exhibitions-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    
  breakpoints: {
    600:
    {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    650: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    770: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

    
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  
    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

   
  });