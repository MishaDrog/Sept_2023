
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



const Logger = (arr) => {
    for (const item of arr) {
        console.log('item : ', item);

    }
}

Logger ([23,43,'qwe', 0, null]);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
 */

function createPar (text) {
    document.write(`<p>${text}</p>`)

}
createPar('bulshit is mf');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 */

let createUl = function (text) {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);

};
createUl('laino')

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
 Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 */


let createUl2 = function (text, count) {
    document.write(`<ul>`)
        for (let i =0; i < count; i +=1 ) {
            document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);


};
createUl2('laino function2', 7);


/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 */

function createElements(arr) {
    document.write(`<ul>`)

    for (const item of arr) {
        document.write(`<li>${item}<li>`);
    }

    document.write(`</ul>`);
}

createElements(['123qwe', 23, true, false, 'Ronaldo']);

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.
 */

function arrObj(arr) {
    for (const item of arr) {

        document.write(`<div>${item.id} - ${item.name} - ${item.age} - ${item.status}</div>`)
    }

}

arrObj(footballPlayers);

/*
- створити функцію яка повертає найменьше число з масиву
 */

const arr = [64, 7786, 34, 4, 43, -23987652, 0, 1234, 9999];


const minNumbersArr = function (arr) {
    let min = arr[0];

    for (let i=1; i < arr.length; i +=1) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

console.log(minNumbersArr(arr));

/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 Приклад sum([1,2,10]) //->13
 */

function sumNumber(arr) {
    let result = 0;

    for (const num of arr) {
        result += num;

    }
    return result;
}

console.log(sumNumber([29,10,5]));


/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 */

function swap(arr, index1, index2) {
    const num1 = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = num1;

    return arr;
}

console.log(swap([11,22,33,44], 0, 2));

/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
 */


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}


const currencies = [{currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}];

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));
