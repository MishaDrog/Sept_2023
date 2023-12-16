
/*
ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 */
function rectangle(a,b) {
    return a+b;

}
console.log(rectangle(25, 37));




let footballPlayers = [
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

// стрілочна ф-я;
const rectangle2 = (a,b) =>  {
    return a+b;

}
console.log(rectangle2(15, 26));


/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
 */

let sRound = function (r) {
    return Math.PI * Math.pow(r,2 );
}

console.log(sRound(5));


/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
 */

function sCel(r,h) {
    return 2 * Math.PI * r * (r + h);
    
};

console.log(sCel(23,34));

/*
- створити функцію яка приймає масив та виводить кожен його елемент
 */

const fnArr = function (arr) {
    for (const item of arr) {
        console.log(item);

    }

};



fnArr(footballPlayers);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
 */

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 */


/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
 Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 */


/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 */

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.
 */


/*
- створити функцію яка повертає найменьше число з масиву
 */

/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 Приклад sum([1,2,10]) //->13
 */

/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 */


/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
 */


