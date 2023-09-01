const itemsPerPage = 12; // Количество карточек на одной странице
let currentPage = 1; // Текущая страница
let currentFilter = 'all'; // Текущий фильтр

// Функция для скрытия всех карточек
function hideAllCards() {
    const cards = document.querySelectorAll('.item');
    cards.forEach(card => card.style.display = 'none');
}

// Функция для отображения карточек определенного типа
function showCardsByType(type, page) {
    const cards = document.querySelectorAll('.item');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let count = 0;

    cards.forEach((card, index) => {
        if (card.classList.contains(type) || type === 'all') {
            if (count >= startIndex && count < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
            count++;
        } else {
            card.style.display = 'none';
        }
    });
}

// Создайте функцию для отображения пагинации
function updatePagination() {
    const cards = document.querySelectorAll('.item');
    const filteredCards = Array.from(cards).filter(card => card.classList.contains(currentFilter) || currentFilter === 'all');
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage); // Calculate total pages based on filtered cards

    const pagination = document.getElementById('pagination');

    if (totalPages <= 1) {
        pagination.style.display = 'none'; // Скрываем пагинацию, если страница не нужна
        return; // Выходим из функции, чтобы не создавать пустую пагинацию
    }

    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'active' : ''; // Проверяем, активна ли страница
        paginationHTML += `<button class="page-link ${isActive}" onclick="changePage(${i})">${i}</button>`;
    }

    pagination.style.display = 'flex'; // Показываем пагинацию, если нужно
    pagination.innerHTML = paginationHTML;
}


// Создайте функцию для изменения текущей страницы
function changePage(page) {
    currentPage = page;
    showCardsByType(currentFilter, currentPage);
    updatePagination();
}

// Функция для обработчиков событий кнопок фильтрации
function filterButtonClickHandler(filterType) {
    currentFilter = filterType;
    currentPage = 1;
    hideAllCards();
    showCardsByType(currentFilter, currentPage);
    updatePagination();

    // Удаление класса "active" у всех кнопок и добавление его к текущей
    document.querySelectorAll('.main-filter button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${filterType}`).classList.add('active');
}

document.querySelectorAll('.main-filter button').forEach(button => {
    button.addEventListener('click', () => filterButtonClickHandler(button.classList[0]));
});

// По умолчанию показываем все карточки
hideAllCards();
showCardsByType(currentFilter, currentPage);
updatePagination();


//swiper
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