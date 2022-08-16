new Swiper('.gallery__swiper', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,



    breakpoints: {
        // when window width is >= 360px
        //360: {
       //     slidesPerView: 2,
       //     spaceBetween: 16,
      //  },
      
        // when window width is >= 768px
      768: {
            slidesPerView: 3,
           spaceBetween: 26
        }
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
     
    }
});



