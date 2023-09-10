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
// Получаем элементы
const headerSearch = document.querySelector('.header-search');
const searchContainer = document.querySelector('.search-container');
const searchInner = document.querySelector('.search-inner');

// Добавляем обработчик события для открытия/закрытия при клике на headerSearch
headerSearch.addEventListener('click', function (e) {
    e.stopPropagation(); // Остановить всплытие события, чтобы предотвратить закрытие при клике на headerSearch
    if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none'; // Закрыть
    } else {
        searchContainer.style.display = 'block'; // Открыть
    }
});

// Добавляем обработчик события для закрытия при клике вне search-container
document.addEventListener('click', function (e) {
    if (searchContainer.style.display === 'block' && e.target !== searchInner && !searchInner.contains(e.target)) {
        searchContainer.style.display = 'none'; // Закрыть
    }
});

const open = document.querySelector(".header-modal")
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-close");

open.addEventListener("click", function(){
  modal.classList.toggle("active")
})
close.addEventListener("click", function(){
  modal.classList.toggle("active")
})