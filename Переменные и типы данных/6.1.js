// 1. Написать функцию, которая из переданного ей массива создает новый, состоящий
// только из положительных чисел. Привести пример её работы. Студент должен сам
// подготовить массив.
function func_arr(arr) {
    let newArr = []

    arr.forEach(element => {
        if (element > 0) {
            newArr.push(element)
        }
    })
    return newArr
}

let arr = [1,2,-10,5,-2,6]

let result = func_arr(arr)

console.log(result)


