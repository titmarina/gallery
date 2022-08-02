new Swiper('.gallery__swiper', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,



    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
    pagination: {
        el: '.swiper-pagination',
    }
});



