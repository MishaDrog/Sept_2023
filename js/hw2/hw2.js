/* Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
let arr = [100500, 29494, 3, 43, -5895, true, false, 'string', 'wtf', [84,6363,'ivan','false']];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/

const book1 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log(book1);
const book2 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log(book2);
const book3 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log(book3);

const book5 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
    authorName: [
        {name: 'John', age: 53},
        {name: 'Jack', age: 33}
    ]
};
console.log(book5);

/*
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/

let usersArr = [
    {name: 'Ivan', userName: 'stalker', password: 12345},
    {name: 'Olya', userName: 'strelok', password: 1335},
    {name: 'Nick', userName: 'jango', password: 12556},
    {name: 'Mika', userName: 'wicki', password: 187790},
    {name: 'Nika', userName: 'dred', password: 1209768},
    {name: 'Anthony', userName: 'anomaly', password: 1234005},
    {name: 'Messi', userName: 'skif', password: 123},
    {name: 'Heymar', userName: 'itan', password: 1233434345},
    {name: 'Mbape', userName: 'jackson', password: 123432},
    {name: 'Mudryk', userName: 'stalker', password: 1234345}
];

console.log('password: ' + usersArr[0]['password']);
console.log('password: ' + usersArr[1]['password']);
console.log('password: ' + usersArr[2]['password']);
console.log('password: ' + usersArr[3]['password']);
console.log('password: ' + usersArr[4].password);
console.log('password: ' + usersArr[5].password);
console.log('password: ' + usersArr[6].password);
console.log('password: ' + usersArr[7].password);
console.log('password: ' + usersArr[8].password);
console.log('password: ' + usersArr[9].password);


/*
Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/
let x = prompt('Введіть число');
if (x !== 0){
    console.log(true)
} else {
    console.log(false)
}

x !==0 ? console.log(true):  console.log(false)

 /*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/

let time= 18;
if (time> 45 && time <= 60){
    console.log('4 частина');
} else if (time > 30 && time <=45) {
    console.log('3 частина')
} else if (time > 15 && time <=30) {
    console.log('2 частина')
} else if (time > 0 && time <=15) {
    console.log('1 частина')
} else {
    console.log('Невірні дані')
}

/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/

/*
let day = 31;

if (day > 0 && day <= 15){
    console.log('перша декада');
} else if (day > 15 && <= 31) {
    console.log('друга декада');
}
*/

/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/

let week = +prompt('Enter number of week', 1);

switch (week){
    case 1:
        console.log('ПРокинувся')
        break;
    case 2:
        console.log('Зібрався')
        break;
    case 3:
        console.log('Поснідав')
        break;
    case 4:
        console.log('Пішов на роботу')
        break;
    case 5:
        console.log('Прийшов з роботи')
        break;
    case 6:
        console.log('Вихідні_субота')
        break;
    case 7:
        console.log('Неділя')
        break;
    default:
        console.log('ERROR')
}


/*
    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.
 */

    let num1 = 10;
    let num2 = +prompt('Enter number', 1);

    if (num1 === num2) {
        console.log('числа рівні')
    } else if (num1 > num2){
        console.log('MAX is: ' + num1)
    } else {
        console.log('MAX is: ' +num2)
    }

/*
    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
*/

let xxx = 7;
x = xxx || 'default';
console.log(xxx);


/*
    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
     За допомоги іф перевірити кожен його елемент на тривалість навчання.
      У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

 */

let array = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (array[0].monthDuration >= 5){console.log('Supper - course is cool!')};
if (array[1].monthDuration >= 5){console.log('Supper - course is cool!')};
if (array[2].monthDuration >= 5){console.log('Supper - course is cool!')};
if (array[3].monthDuration >= 5){console.log('Supper - course is cool!')
} else {
    console.log('Course min 4')
}
if (array[4].monthDuration >= 5) {console.log('Supper - course is cool!')};
if (array[5].monthDuration >= 5) {
    console.log('Supper - course is cool!')
} else {
    console.log('Course min 4')
}


