const menuContainer = document.querySelector('.menu-container');

menuContainer.addEventListener('touchstart', (e) => {
    const touchStartX = e.touches[0].clientX;
    
    menuContainer.addEventListener('touchmove', (e) => {
        const touchEndX = e.touches[0].clientX;
        const scrollX = touchStartX - touchEndX;
        menuContainer.scrollLeft += scrollX;
    });
    
    menuContainer.addEventListener('touchend', () => {
        menuContainer.removeEventListener('touchmove', (e) => {});
        menuContainer.removeEventListener('touchend', () => {});
    });
});

const arrowBurger = document.querySelector('.burger-menu');
const bodyBurger = document.querySelector('.header-mobile');
const closeBurger = document.querySelector(".header-mobile__close");

arrowBurger.addEventListener('click', function (e) {
  document.body.classList.toggle('lock');
  arrowBurger.classList.toggle('active');
  bodyBurger.classList.toggle('active');
});
closeBurger.addEventListener('click', function (e) {
  document.body.classList.toggle('lock');
  arrowBurger.classList.toggle('active');
  bodyBurger.classList.toggle('active');
});
