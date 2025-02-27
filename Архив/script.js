function add() {
    let btn = document.querySelector('[type=button]');
    console.log(btn.value)
}

function add2() {
    
    let a2 = document.querySelector("#a")
    let b2 = document.querySelector("#b")

    let valueA2 = parseInt(a2.value)
    let valueB2 = parseInt(b2.value)

    console.log( `Ответ: ${valueA2 + valueB2} `)

}