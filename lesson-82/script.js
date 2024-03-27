'use strict'


//  1

let userName = 'Danil'

function helloName (name) {
    console.log(`Hello ${name}`);
}


helloName(userName)

// 2

console.log('---------------------------------------------');

let arr = [324, 3, 23, 6, 12, 56, 3, 24, 9, 10]

function moreTen(arr) {
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

moreTen(arr)

//  3 

console.log('---------------------------------------------');

function calc(a, b, operator) {
    let result = null
    switch (operator) {
        case 'minus':
            result = a - b
            break;
        case 'plus':
            result = a + b
            break;
        case 'multiplication':
            result = a * b
            break;
        case 'division':
            result = a / b
            break;
    
        default:
           return console.log('Введены неверные данные');
    }

    return console.log(result);

}

calc(2,3,'minus')
calc(34,-6, 'plus')
calc(22, 11, 'multiplication')
calc(2, 1200, 'division')

