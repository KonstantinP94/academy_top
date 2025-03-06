// 2. Написать функцию, которая создает на пустой странице 18 кнопок с надписью
// "Готово". Выполнить функцию по загрузке страницы

window.addEventListener(
    "load",
    func
)

function func() {
    let body = document.body

    for (let i = 0; i < 19; i++) {
        let btn = document.createElement("button")
        body.appendChild(btn)
        btn.textContent = "Готово"

    }
}
