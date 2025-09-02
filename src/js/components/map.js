ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.675825, 47.911963],
        zoom: 5,
        controls: ['smallMapDefaultSet']
    });

    var tooltip = document.querySelector('.map-tooltip');

    // Кастомный макет иконки
    var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map-icon"></div>'
    );

    // Массив магазинов
    var shops = [
        { coords: [55.218278, 61.467783], city: 'Челябинск', name: 'Наш магазин в Челябинске', addres: '620086, г. Челябинск, ул. Гурзуфская, д. 48', phone: '+7 (343) 233-60-45, +7 (343) 233-60-44'},
        { coords: [55.806605, 49.191959], city: 'Казань', name: 'Фирменная точка в Казани', addres: '420086, г. Казань, ул. Казанская, д. 48', phone: '+7 (843) 233-60-45, +7 (843) 233-60-44'},
        { coords: [55.856072, 37.678287], city: 'Москва', name: 'Центральный офис в Москве', addres: '101000, г. Москва, ул. Московская, д. 48', phone: '+7 (495) 233-60-45, +7 (495) 233-60-44'}
    ];

    // Функция создания маркера
    function createPlacemark(shop, id) {
        var placemark = new ymaps.Placemark(shop.coords, {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/red_point.svg',
            iconImageSize: [17, 17],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

        // Клик по маркеру — показываем кастомную табличку
        placemark.events.add('click', function () {
            tooltip.innerHTML = `
                <h5 class="custom-balloon__city">${shop.city}</h5>
                <div class="custom-balloon__name">${shop.name}</div>
                <div class="custom-balloon__name">${shop.addres}</div>
                <div class="custom-balloon__name">${shop.phone}</div>
                <div class="map-tooltip--close"><img src='../img/close_cat.svg'></img></div>
            `;
            tooltip.dataset.id = id;
            tooltip.style.display = 'flex';

            var pixel = myMap.converter.coordinatesToGlobalPixel(shop.coords);
            tooltip.style.left = (pixel[0] + 10) + 'px';
            tooltip.style.top = (pixel[1] + 10) + 'px';
        });

        return placemark;
    }

    // Добавляем маркеры на карту
    shops.forEach((shop, index) => {
        myMap.geoObjects.add(createPlacemark(shop, index + 1));
    });

    // Закрытие таблички при клике вне маркера
    myMap.events.add('click', function () {
        tooltip.style.display = 'none';
    });
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const buttons = mutation.target.querySelectorAll('.map-tooltip--close');
                buttons.forEach(button => {
                    if (!button.dataset.bound) { // чтобы не добавлять обработчик дважды
                        button.dataset.bound = true;
                        button.addEventListener('click', () => {
                            tooltip.style.display = 'none';
                        });
                    }
                });
            }
        }
    });
    
    // Наблюдаем за всем телом документа
    observer.observe(document.body, { childList: true, subtree: true });

    // Подгоняем карту под все точки
    myMap.setBounds(myMap.geoObjects.getBounds(), {
        checkZoomRange: true,
        zoomMargin: 40
    });
   
    
}
