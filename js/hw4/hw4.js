
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
/*
let arr = [838, 'Neymar', true, {object: true}, [1,2,3,4,5,{},'87989', 'Samsung']];

let fnArr = function (arg) {
    console.log(arr);
}

fnArr(arr);
*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*

let fnParagraph = function (text) {
    document.write(`<div> <p> ${text} </p> <div>`);

}

fnParagraph('задаємо довільний текст');

*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*
let fnUlList = function (text) {
    document.write(`<ul> 
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

fnUlList('однаковий текст для 3 елементів li');
*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
     // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let fnUlrabdom = function (text, listItem) {
    document.write(`<ul>`);

    for (let i = 0; 1 < listItem; i++) {
        document.write(`<li> ${text}</li>>`)
    }
    document.write(`</ul>`);
};



console.log(fnUlrabdom('asdqwe', 7));



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

footballPlayers = [
    {id: 1, name: 'Heymar jr', age: 31, status: 'online'},
    {id: 2, name: 'Messi', age: 35, status: 'ofline'},
    {id: 3, name: 'C.Ronaldo', age: 37, status: 'online'},
    {id: 4, name: 'Mudryk', age: 25, status: 'ofline'},
    {id: 5, name: 'Lewandowski', age: 30, status: 'online'},
    {id: 6, name: 'Kross', age: 35, status: 'ofline'},
    {id: 7, name: 'Benzema', age: 34, status: 'online'},
    {id: 8, name: 'Mbape', age: 26, status: 'online'},
    {id: 9, name: 'Militao', age: 25, status: 'ofline'},
    {id: 10, name: 'Vinicius jr', age: 23, status: 'ofline'},
];

 let fnPlayers = function (players) {
     for (const player of players) {
         document.write(`<div class="player-block"> ${player.id} -- ${player.name} -- ${player.age} </div>>`)

     }

 };

fnPlayers(footballPlayers);
     
     
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


