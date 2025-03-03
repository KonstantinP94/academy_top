// 5. Напишите страничку и два поля ввода типа number
// Чтобы получить значение нужно использовать 
// valueAsNumber вместо обычного number
// Выведите в консоль сумму, разность и произведение введенных чисел.
// Отчетность: страничка html, файл js из 5-10 строк.

function najal() {
    let num1 = document.querySelector("#first")
    let num2 = document.querySelector("#second")

    let num1Value = parseInt(num1.value)
    let num2Value = parseInt(num2.value)

    let summa = num1Value + num2Value
    let raznost = num1Value - num2Value
    let umnojenie = num1Value * num2Value

    console.log(summa, raznost, umnojenie)
}