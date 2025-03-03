
// 7. На страничке изначально пусто, а при загрузке всплывает сообщение:
// "введите число". Появляется столько заголовков h1 с надписью
// "Это тоже цикл и гадский промпт на входе!", сколько ввели

window.addEventListener(
    "load",
    (event) => {
        number = +prompt("Введите число: "),
        txt(number)
    }
    
    
   
)

function txt(number) {
    let body = document.body

    for (let i = 0; i < number; i++) {
        let h1 = document.createElement("p")
        body.appendChild(h1)
        h1.textContent = "Привет"
    }
}
