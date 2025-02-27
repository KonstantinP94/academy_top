function creative() {
    // Здесь начало вашего решения
    // Прикрепить к телу страницы кнопку
    let my_li = document.createElement('li');
    let my_elem = document.querySelector("#spisok");
    my_elem.appendChild(my_li);
    my_li.textContent = "Хорошо, что на этот раз не в тело, а то надоело"
    // Здесь конец вашего решения
}

window.addEventListener(
    'load',
    creative
);