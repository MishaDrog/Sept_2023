

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
        document.write(`<div class="player-block"> id: ${player.id} -- name: ${player.name} -- age: ${player.age} </div>`)

    }

};

fnPlayers(footballPlayers);


// - створити функцію яка повертає найменьше число з масиву

numbers = [213, 3, 2234, -342, 6534, 95, 123, 786787, 4];

let fnMinNam = function (arr) {
    let min = arr[0];

    for (const num of arr) {
            if (min > num){
                min = num;
            }

            return min;
    }

}

console.log(fnMinNam(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250