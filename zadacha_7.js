// 7. На страничке изначально пусто, а при загрузке всплывает сообщение:
// "введите число". Появляется столько заголовков h1 с надписью
// "Это тоже цикл и гадский промпт на входе!", сколько ввели
window.addEventListener(
    "load", 
    main_func
)

function main_func() {
    let number = +prompt("Введите число:");
    func_cycle(number);
}

function func_cycle(number) {
    let body = document.body;
    
    for (let i = 0; i < number; i++) {
        let zagolovok = document.createElement("p");
        zagolovok.textContent = "Это тоже цикл и гадский промпт на входе!";
        body.appendChild(zagolovok);
    }
}
