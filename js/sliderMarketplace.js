new Swiper('.marketplace-swiper', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 66,
    centeredSlides: true,
    

  
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


    breakpoints: {
      768: {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
}},

   
  });