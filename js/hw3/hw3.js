

/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
*/
/*
for (let i = 0; i<10; i++) {
    document.write(`<div>  jjdkjngkdnk  </div>`)
}
*/

let item = 0;
while ( item < 20 ) {

    document.write(`<div> <h1> довільний текст </h1> </div>`);
    item++;
}



/*
- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:
*/
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let i = 0; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];
    console.log(listOfItems[i]);
    document.write(`<ul class="arr-items"> <li> ${listOfItems[i]} </li> </ul>`)

}



 /*


ШАБЛОН:
    <ul>
        <li>ITEM OF ARRAY</li>
        <!--
            і тд інші об'єкти масиву
             ...
             ...
             ...
        -->
    </ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
*/


/*
-----------------------------------------------

    Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

 // ШАБЛОН

// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
*/

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(` <div class="product-card">
    <h3 class="product-title">${product.title} Price - ${product.price}</h3>
<img class="product-image" src="${product.image}" alt="products image" >
</div> `)

}




let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.age>30) {
        document.write(`<div> ${user.name} --- ${user.age} --- ${user.status} </div>`)
    }

}

/*

є масив users
за допомоги циклу вивести:
    - користувачів зі статусом true
- користувачів зі статусом false
- користувачів які старші за 30 років

 */