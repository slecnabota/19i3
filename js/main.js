const noveltySwiper = new Swiper('#noveltySwiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#noveltyNext',
        prevEl: '#noveltyPrev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.45,
            spaceBetween: 10
        },
        535:{
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 3.15,
            spaceBetween: 20
        }
    }
});

const saleSwiper = new Swiper('#saleSwiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#saleNext',
        prevEl: '#salePrev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        475:{
            slidesPerView: 3,
            spaceBetween: 10
        },
        768:{
            slidesPerView: 4,
            spaceBetween: 20
        },
        1023:{
            slidesPerView: 5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 6,
            spaceBetween: 20
        }
    }
});

const hatsSwiper = new Swiper('#hatsSwiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#hatsNext',
        prevEl: '#hatsPrev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.45,
            spaceBetween: 10
        },
        535:{
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 3.15,
            spaceBetween: 20
        }
    }
});
const hoodieSwiper = new Swiper('#hoodieSwiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#hoodieNext',
        prevEl: '#hoodiePrev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.45,
            spaceBetween: 10
        },
        535:{
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 3.15,
            spaceBetween: 20
        }
    }
});