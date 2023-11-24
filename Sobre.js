

var switch = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay {
        delay: 7500,
        disableOnInteraction: false
    },

    breakpoints: {
        0: {
            sliderPerView: 1,
        },
        768: {
            sliderPerView: 2,
        },
        1020: {
            sliderPerView: 3,
        },
    }
});