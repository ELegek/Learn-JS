'use strict';


// Типы данных
// var number = 5;
// var string = 'Hello!';
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4 / 0);
// console.log('string' * 9);


// let something;
// console.log(something);

// let persone = {
//   name: 'John',
//   age: 28,
//   isMarried: false,
// };

// console.log(persone['name']);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// // alert('Hello World!');

// let answer = +prompt('Есть ли вам 18?', "да");

// console.log(typeof (answer));

// console.log('arr' + ' - object');
// console.log(4 + ' - object');

// let incr = 10;
// let decr = 10;



// console.log(incr++);
// console.log(decr--);

// console.log(5 % 2);
// console.log("2" === 2);

// let isChecked = true;
// let isClose = false;
// console.log(isChecked && isClose);


// Условия

// let num = 50;

// if (num < 49) {
//   console.log('Неверно!');
// } else if (num > 100) {
//   console.log('Многовато!');
// } else {
//   console.log('Верно!');
// };

// (num == 50) ? console.log('Верно!'): console.log('Неверно!');


// switch (num) {
//   case num < 49:
//     console.log('Неверно!');
//     break;
//   case num > 100:
//     console.log('Многовато!');
//     break;
//   case num > 80:
//     console.log('Все еще многовато!');
//     break;
//   case 50: //Правильно записываем значение
//     console.log('Верно!');
//     break; //Всегда необходимо ставить после каждого действия
//   default:
//     console.log('Что-то пошло не так!');
//     break;
// }


// Циклы


// while (num < 55) {
//   console.log(num);
//   num++
// }

// do {
//   console.log(num);
//   num++
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }



// console.log(2 && 1 && null && 0 && undefined);

// Функции 

// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   num = 10;
// }

// showFirstMessage('Hello World!');
// console.log(num);

// let calc = function(a, b) {
//   return (a + b);
// }

let calc = (a, b) => a + b

console.log(calc(3, 4));
console.log(calc(8, 4));

function retVar() {
  let num = 50;
  return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = 'test';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = '12.2px'
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));