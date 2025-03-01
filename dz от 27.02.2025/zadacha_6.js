// 6. На страничке есть поле ввода и кнопка. При нажатии на кнопку
// в консоль выводится сообщение: "Аааа, это цикл!" столько раз,
// какое число в поле ввода.



// СЧЕТЧИК ДЛЯ СЕБЯ ДОБАВИЛ, ВСПОМИНАЮ КАК ЦИКЛЫ РАБОТАЮТ

function najal() {
    let inp = document.querySelector("#cycle")
    let inpValue = parseInt(inp.value)
    let counter = 1


    for (let i = 1; i < inpValue; i++) {
        console.log(`'Аааа, это цикл! ${counter + 1}'`)
        counter++
    }
   
}