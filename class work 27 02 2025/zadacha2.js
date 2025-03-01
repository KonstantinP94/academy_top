function creative() {
    // Здесь начало вашего решения
    // Прикрепить к телу страницы кнопку
    let my_li = document.createElement('li');
    let my_elem = document.body;
    my_elem.appendChild(my_li);
    my_li.textContent = "Я опять все понял"
    // Здесь конец вашего решения
}

window.addEventListener(
    'load',
    creative
);