// 9. На страничке есть две кнопки "все появить" и "все спрятать" и таблица.
// Таблица должна появляться и исчезать по нажатии на кнопку.

window.addEventListener(
    "load",
    (event) => {
        main_func()
    }
  
)

function main_func() {
    let table = create_table()
    show_hide(table)
}

function show_hide(table) {
    let show = document.querySelector("#show")
    let hide = document.querySelector("#hide")


    show.addEventListener(
        "click",
        function() {
            table.style.display = "table"
        }
    )

    hide.addEventListener(
        "click",
        function() {
            table.style.display = "none"
        }
    )
}

function create_table() {
    let body = document.body
    let tbl = document.createElement("table")
    body.appendChild(tbl)

    for (let row = 0; row < 10; row++) {
        let tr = document.createElement("tr")
        tbl.appendChild(tr)

        for (let col = 0; col < 10; col++) {
            let td = document.createElement("td")
            tr.appendChild(td)
            td.textContent = (col + 1) * (row + 1)
        }
    
    }
    return tbl
}