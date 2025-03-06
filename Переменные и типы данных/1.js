// 1. (1 балл) Написать код на JavaScript, который пишет в консоль цену проживания в
// отеле за ночь, запрашивает количество ночей, печатает сумму к оплате.

function najal() {
    let count = document.querySelector("#count_night")
    let price = document.querySelector("#price")

    let countValue = parseInt(count.value)
    let priceValue = parseInt(price.value)

    console.log(`Сумма к оплате за ${countValue} ночей = ${countValue * priceValue}`)
}
