// 8. На страничке изначально пусто, но создается таблица джаваскриптом, содержащая
// квадраты целых чисел от 1 до 10.

window.addEventListener(
    "load",
    (event) => {
        create_table()
    }
)

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