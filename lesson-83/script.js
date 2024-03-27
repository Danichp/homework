'use strict'

//  1, 2
const user = {
    name: 'Danil',
    age: 23,
    height: 179,
    weight: 81,
    sayHello(name) {
        console.log(`Hello ${name}`);
    }
}


user.sayHello('Vlad')

// 3
console.log('---------------------------------------');



const users = [
    {
        name: 'Anton',
        isAdmin: true,
        age: 12,
    },
    {
        name: 'Dima',
        isAdmin: false,
        age: 25,
    },
    {
        name: 'Vlad',
        isAdmin: false,
        age: 87,
    },
    {
        name: 'Masha',
        isAdmin: true,
        age: 30,
    },
    {
        name: 'Petr',
        isAdmin: false,
        age: 23,
    },
    {
        name: 'Sasha',
        isAdmin: false,
        age: 65,
    },
    {
        name: 'Danil',
        isAdmin: false,
        age: 44,
    },
]

let usualUsers = null

for(let i = 0; i < users.length; i++){
    if(!users[i].isAdmin){
        usualUsers++
    }
}

console.log(usualUsers);