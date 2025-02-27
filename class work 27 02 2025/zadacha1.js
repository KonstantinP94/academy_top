function creative() {
    // Здесь начало вашего решения
    // Прикрепить к телу страницы кнопку
    let my_label = document.createElement('label');
    let my_elem = document.body;
    my_elem.appendChild(my_label);
    my_label.textContent = "Я все понял"
    // Здесь конец вашего решения
}

window.addEventListener(
    'load',
    creative
);