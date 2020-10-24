const adv = document.querySelector('.adv');
adv.remove();

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
book[0].before(book[1]);
book[2].before(book[3]);
book[3].before(book[4]);
book[3].before(book[5]);
book[5].before(book[3]);

const image = 'url(/image/you-dont-know-js.jpg)';
document.body.style.background = image;

const book3 = document.querySelectorAll('a');
book3[2].textContent = 'Книга 3. this и Прототипы Объектов';
console.log(book3[2]);

const book2 = document.querySelectorAll('li');

//Книга 2
book2[11].before(book2[12]);
book2[11].before(book2[10]);
book2[11].before(book2[14]);
book2[12].before(book2[17]);
book2[13].before(book2[10]);
book2[13].before(book2[11]);
console.log(book2[8]);
book2[16].before(book2[8]);


//Книга 5
const book5 = document.querySelectorAll('li');
book5[45].before(book5[38]);
book5[42].before(book5[38]);
book5[40].before(book5[45]);
book5[40].before(book5[39]);
book5[40].before(book5[38]);
book5[41].before(book5[38]);
book5[44].before(book5[41]);

const ul6 = document.querySelectorAll('ul')
const bookAddLi = document.createElement('li');
const book6 = document.querySelectorAll('li');

bookAddLi.textContent = 'Глава 8: За пределами ES6';
ul6[5].append(bookAddLi);

ul6[5].append(book6[56]);


console.log(book6[56]);
console.log(ul6[5]);
console.log(bookAddLi);
