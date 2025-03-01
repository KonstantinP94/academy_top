function creative() {
    // Здесь начало вашего решения
    // Прикрепить к телу страницы кнопку
    let my_td = document.createElement('td');
    let my_elem = document.querySelector("#iacheika");
    my_elem.appendChild(my_td);
    my_td.textContent = "Ячейка 1"
    // Здесь конец вашего решения
}

window.addEventListener(
    'load',
    creative
);