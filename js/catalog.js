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
    // 
    const newUrl = window.location.pathname + `?filter=${currentFilter}`;
    window.history.pushState({}, '', newUrl);

    // Удаление класса "active" у всех кнопок и добавление его к текущей
    document.querySelectorAll('.main-filter button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${filterType}`).classList.add('active');
}

document.querySelectorAll('.main-filter button').forEach(button => {
    button.addEventListener('click', () => filterButtonClickHandler(button.classList[0]));
});
// Функция для извлечения параметров из URL
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Функция для фильтрации карточек на странице каталога
function filterCardsByParameter() {
    const filterParam = getUrlParameter('filter');
    if (filterParam) {
        filterButtonClickHandler(filterParam);
    }
}

// Вызов функции для фильтрации карточек при загрузке страницы
filterCardsByParameter();

// По умолчанию показываем все карточки
hideAllCards();
showCardsByType(currentFilter, currentPage);
filterCardsByParameter(); // Вызов после определения getUrlParameter
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
//swiper
const popupSwiper = new Swiper('#popupSwiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '#popupNext',
        prevEl: '#popupPrev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        768:{
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20
        }
    }
});





const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const colorSelect = document.getElementById("color-select");
const sizeSelect = document.getElementById("size-select");

function openPopup() {
    popup.style.display = "flex";
    document.body.classList.toggle('lock');
}

function closePopupFunc() {
    popup.style.display = "none";
    document.body.classList.toggle('lock');
}

const cards = document.querySelectorAll(".item.card");
cards.forEach((card) => {
    card.addEventListener("click", function () {
        const productIdAttr = card.getAttribute("data-product-id");
        if (productIdAttr !== null) {
            const productId = parseInt(productIdAttr);
            openPopup();
        }
    });
});

closePopup.addEventListener("click", closePopupFunc);



function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();










//   
var swiper = new Swiper('.swiper-container2', {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
    spaceBetween: 0
},);

var mySwiper = new Swiper('.swiper-container', {
    thumbs: {
        swiper: swiper,
    },
},)

//

// Получаем все варианты цветов
const colorOptions = document.querySelectorAll('.color-option');

// Элемент, в котором будет отображаться выбранный цвет
const selectedColorElement = document.getElementById('selected-color');

// Функция для обработки выбора цвета
function handleColorSelection(event) {
    // Сбрасываем стиль для всех вариантов цвета
    colorOptions.forEach(option => option.classList.remove('selected'));

    // Устанавливаем стиль для выбранного варианта
    const selectedColor = event.target.getAttribute('data-color');
    event.target.classList.add('selected');

    // Отображаем выбранный цвет
    selectedColorElement.textContent = `Выбран цвет: ${selectedColor}`;
}

// Добавляем обработчик события для каждого варианта цвета
colorOptions.forEach(option => {
    option.addEventListener('click', handleColorSelection);
});
