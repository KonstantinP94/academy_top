// 8. На страничке изначально пусто, но создается таблица джаваскриптом, содержащая
// квадраты целых чисел от 1 до 10.


    
window.addEventListener(
    "load", 
    create_table
)

function create_table() {
    const tbl = document.createElement("table")
    document.body.appendChild(tbl)

    for (let rowi = 0; rowi < 10; rowi++) {
        const tr = document.createElement('tr')
        tbl.appendChild(tr)
        
        for (let coli = 0; coli < 10; coli++) {
            const td = document.createElement('td')
            tr.appendChild(td)
            td.textContent = (rowi + 1) * (coli + 1)
        }
    }
}
