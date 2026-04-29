// Координаты Митинского Дворца бракосочетания
// г. Москва, ул. Дубравная, 48А
const ZAGS_LAT = 55.840649;
const ZAGS_LON = 37.348302;
const ZAGS_NAME = "Митинский Дворец бракосочетания";

// Функция загрузки карты (без изменений)
function initYandexMap() {
    if (typeof ymaps === 'undefined') {
        console.log('Ждем загрузки Яндекс.Карт...');
        setTimeout(initYandexMap, 500);
        return;
    }

    ymaps.ready(function () {
        var map = new ymaps.Map('map', {
            center: [ZAGS_LAT, ZAGS_LON],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        var placemark = new ymaps.Placemark([ZAGS_LAT, ZAGS_LON], {
            balloonContent: ZAGS_NAME
        }, {
            preset: 'islands#redIcon',
            balloonPanelMaxMapArea: 0
        });

        map.geoObjects.add(placemark);

        if (window.innerWidth < 768) {
            map.behaviors.disable('drag');
        }
    });
}

document.getElementById('openMapBtn').addEventListener('click', function () {
    var url = `https://yandex.ru/maps/?pt=${ZAGS_LON},${ZAGS_LAT}&z=17&l=map`;
    window.open(url, '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
    initYandexMap();
});