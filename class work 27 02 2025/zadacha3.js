function creative() {
    // Здесь начало вашего решения
    // Прикрепить к телу страницы кнопку
    let my_p = document.createElement('p');
    let my_elem = document.body;
    my_elem.appendChild(my_p);
    my_p.textContent = "А абзацы мы не проходили!"
    // Здесь конец вашего решения
}

window.addEventListener(
    'load',
    creative
);