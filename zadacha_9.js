// 9. На страничке есть две кнопки "все появить" и "все спрятать" и таблица.
// Таблица должна появляться и исчезать по нажатии на кнопку.



window.addEventListener(
    "load",
    main_func
)

function main_func() {
    const table = create_table()
    btnShowHide(table)
}

function btnShowHide(table) {
    let btnShow = document.querySelector("#show")
    let btnHide = document.querySelector("#hide")

    btnShow.addEventListener("click", function() {
        table.style.display = 'table'
    })

    btnHide.addEventListener("click", function() {
        table.style.display = 'none'
    })
}

function create_table() {
    let tbl = document.createElement("table")
    document.body.appendChild(tbl)

    for (let row = 0; row < 10; row++) {
        let tr = document.createElement("tr")
        tbl.appendChild(tr)

        for (let col = 0; col < 10; col++) {
            let td = document.createElement("td")
            tr.appendChild(td)
            td.textContent = "Текст" // Заполняем ячейку текстом
        }
    }
    return tbl // Возвращаем созданную таблицу
}