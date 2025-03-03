// 6. На страничке есть поле ввода и кнопка. При нажатии на кнопку
// в консоль выводится сообщение: "Аааа, это цикл!" столько раз,
// какое число в поле ввода.

function najal() {
    let inp = document.querySelector("#result")
    let inpValue = parseInt(inp.value)
    let counter = 0

    for (let i = 0; i < inpValue; i++) {
        console.log(`eeee ${counter}`)
        counter++
    }
}