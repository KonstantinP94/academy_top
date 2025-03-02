// 5. Напишите страничку и два поля ввода типа number
// Чтобы получить значение нужно использовать 
// valueAsNumber вместо обычного number
// Выведите в консоль сумму, разность и произведение введенных чисел.
// Отчетность: страничка html, файл js из 5-10 строк.

function najal() {
    let number1 = document.querySelector("#num1")
    let number2 = document.querySelector("#num2")

    let num1Value = parseInt(number1.value)
    let num2Value = parseInt(number2.value)

    let sum = num1Value + num2Value
    let difference = num1Value - num2Value
    let multiplication = num1Value * num2Value

    console.log(`Сумма: ${sum}; Разность: ${difference}; Произведение: ${multiplication}`)
    }
