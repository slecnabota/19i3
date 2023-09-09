document.addEventListener('DOMContentLoaded', function () {
    const textInputs = document.querySelectorAll('.account-text');
    const changeButtons = document.querySelectorAll('.changeButton');

    // Initialize a variable to keep track of the currently active input
    let activeInput = null;

    changeButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Disable the previously active input (if any)
            if (activeInput) {
                activeInput.setAttribute('disabled', true);
                activeInput.classList.remove('active');
            }

            // Enable the current input
            textInputs[index].removeAttribute('disabled');
            textInputs[index].classList.add('active');
            textInputs[index].focus();

            // Update the active input
            activeInput = textInputs[index];
        });

        textInputs[index].addEventListener('blur', function () {
            textInputs[index].setAttribute('disabled', true);
            textInputs[index].classList.remove('active');
            // Clear the activeInput variable when the input loses focus
            activeInput = null;
        });
    });
});


//

const accountSlider1 = new Swiper('#accountSlider1', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#accountNext1',
        prevEl: '#accountPrev1',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3.6,
            spaceBetween: 5
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});

const accountSlider2 = new Swiper('#accountSlider2', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#accountNext2',
        prevEl: '#accountPrev2',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3.6,
            spaceBetween: 5
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});
//
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
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});