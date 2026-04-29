// Координаты ЗАГСа (Нужно заменить на свои!)
// Пример: Дворец бракосочетания №1 в Москве (Тверская, 15)
// Замените широту и долготу на координаты вашего ЗАГСа!
const ZAGS_LAT = 55.840649;  // Широта (пример: центр Москвы)
const ZAGS_LON = 37.348302;  // Долгота
const ZAGS_NAME = "Дворец бракосочетания №1";

// Функция загрузки карты
function initYandexMap() {
    // Проверяем, загрузилось ли API
    if (typeof ymaps === 'undefined') {
        console.log('Ждем загрузки Яндекс.Карт...');
        setTimeout(initYandexMap, 500);
        return;
    }

    ymaps.ready(function () {
        // Создаем карту
        var map = new ymaps.Map('map', {
            center: [ZAGS_LAT, ZAGS_LON],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        // Добавляем метку
        var placemark = new ymaps.Placemark([ZAGS_LAT, ZAGS_LON], {
            balloonContent: ZAGS_NAME
        }, {
            preset: 'islands#redIcon',
            balloonPanelMaxMapArea: 0
        });

        map.geoObjects.add(placemark);

        // Если нужно, запрещаем перетаскивание на телефонах (опционально)
        if (window.innerWidth < 768) {
            map.behaviors.disable('drag');
        }
    });
}

// Кнопка "Открыть в Яндекс.Картах"
document.getElementById('openMapBtn').addEventListener('click', function () {
    // Создаем ссылку для Яндекс.Карт (мобильная или десктопная версия)
    var url = `https://yandex.ru/maps/?pt=${ZAGS_LON},${ZAGS_LAT}&z=17&l=map`;
    window.open(url, '_blank');
});

// Запускаем карту, когда страница загрузится
document.addEventListener('DOMContentLoaded', function () {
    initYandexMap();
});