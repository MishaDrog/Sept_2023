/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log
*/
let hw1 = 'hello';
const hw2 = 'owu';
const hw3 = 'com';
const hw4 = 'ua';
const hw5 = 1;
const hw6 = 10;
const hw7 = -999;
const hw8 = 123;
const hw9 = 3.14;
const hw10 = 2.7;
const hw11 = true;
const hw12 = false;

console.log(hw1,hw2,hw3,hw4,hw5,hw6,hw7,hw8,hw9,hw10,hw11,hw12);

/*
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
*/
let lastName = 'Drogomyretskyi';
let firstName = 'Mykhailo';
let middleName = 'Mykhailovych';

const person = lastName+' '+firstName+' '+middleName;
console.log(person);

let person2 = `${lastName} ${firstName} ${middleName}`;
console.log(person2);

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
*/
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);




/*
Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
*/

const enterName = prompt('Введіть імʼя');
console.log(enterName);

const enterMiddleName = prompt('Введіть по-Батькові');
console.log(enterMiddleName);

const enterAge = prompt('Введіть вік');
console.log(enterAge);

let personInfoPrompt = `${enterName} ${enterMiddleName} ${enterAge}`;
console.log(personInfoPrompt);





