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

// Получаем элементы из DOM
const circle = document.getElementById('circle');
const deliveryButton = document.querySelector('.delivery-request');

deliveryButton.addEventListener('click', () => {
    circle.classList.toggle("clicked")
    document.querySelector(".cart-right__del1").classList.toggle("active")
    document.querySelector(".cart-right__del2").classList.toggle("active")
    deliveryButton.classList.toggle('clicked');

});
