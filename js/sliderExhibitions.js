const swiper = new Swiper('.exhibitions-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 21,
    
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

    breakpoints: {
      768: {
    slidesPerView: 2,
    spaceBetween: 20,
}},

  });