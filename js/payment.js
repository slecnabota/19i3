// Получаем все радио-кнопки с атрибутом name="radioGroup"
const radioButtons = document.querySelectorAll('input[name="radioGroup"]');

// Добавляем обработчик события change для каждой радио-кнопки
radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        // Сброс цвета для всех меток
        const labels = document.querySelectorAll('.custom-radio label');
        labels.forEach(function (label) {
            label.style.color = '';
        });

        // Установка цвета для метки текущей радио-кнопки
        if (this.checked) {
            const label = this.parentElement;
            label.style.color = 'black'; // Измените цвет на желаемый
        }
    });
});
