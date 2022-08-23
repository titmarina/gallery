new Swiper('.gallery__swiper', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,



    breakpoints: {
        600:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        
        700: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        769: {
            slidesPerView: 4,
            spaceBetween: 26,
        }        
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,

    }


});



