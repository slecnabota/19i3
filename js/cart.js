const mainSwiper = new Swiper('#mainSwiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#mainNext',
        prevEl: '#mainPrev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});

//
const deliveryButtons = document.querySelectorAll('.delivery-request');
const circles = document.querySelectorAll('.circle');

deliveryButtons.forEach(deliveryButton => {
    deliveryButton.addEventListener('click', () => {
        circles.forEach(circle => {
            circle.classList.toggle("clicked");
            document.querySelector(".cart-right__del1").classList.toggle("active");
            document.querySelector(".cart-right__del2").classList.toggle("active");
        });
        document.querySelector(".cart-right__del1").classList.toggle("active");
        document.querySelector(".cart-right__del2").classList.toggle("active");
        deliveryButton.classList.toggle('clicked');
    });
});
