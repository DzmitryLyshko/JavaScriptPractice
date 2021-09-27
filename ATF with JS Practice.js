'use strict';
// I. Conditional Statements and Data Types

// 1. Выполнить сложение различных типов(string + boolean, string + number, number + boolean)
let a = '42' + false; // '42false'
let b = '4' + 2; // '42'
let c = 41 + true; // 42

// 2. Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
let d = '42' * true; // 42
let e = '14' * 3; // 42
let f = 42 * false; // 0

// 3. Выполнить деление различных типов(string / boolean, string / number, number / Boolean)
let g = '42' / true; // 42
let h = '84' / 2; // 42
let i = 666 / false; // Infinity

// 4. Выполнить явное преобразование(number, string, boolean)
let j = Number('number'); // NaN
let k = String(true); // 'true'
let l = Boolean(42); // true

///////////////////////////////////////////////////////////////////////////////////////////////

// II. Objects and Functions

// - Создать объект car, добавить к нему свойство color со значением 'черный'

const car = {
  color: 'черный',
};

// - Изменить свойство color объекта car на 'зеленый'

car.color = 'зеленый';

// - В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

car.power = function (hp) {
  console.log(`This car has ${hp} horse powers`);
};
car.power(232);

// - На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

function sumFruits(apples, pears) {
  return apples + pears;
}
let storage = sumFruits(5, 6);
console.log(`There are ${storage} fruits in the storage`);
console.log(`There are ${sumFruits(5, 6)} fruits in the storage`);

// - В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

let properName = 'Dzmitry Lyshko';
function checkUser() {
  let checkingName = prompt('Enter your name');
  if (properName === checkingName) {
    alert(`Hello, ${properName}`);
  } else {
    alert('The name is not correct');
  }
}
// checkUser();

// - Напишите функцию вычисления типа аргумента и вывод типа в консоль

function getArgumentType(argument) {
  console.log(`The type is ${typeof argument}`);
}

getArgumentType(42);
getArgumentType('some text');
getArgumentType(true);
getArgumentType(null);
getArgumentType(Infinity);

// - Напишите функцию, которая определяет является ли число простым или нет

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return console.log(`${num} is not a prime number`);
  }
  console.log(`${num} is a prime number`);
}

checkPrime(19);
checkPrime(27);

///////////////////////////////////////////////////////////////////////////////////////////////

// III. Arrays and Cycles

// 1. Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

const films = ['Matrix', 'Hobbit', 'Wasabi'];
for (let film of films) {
  console.log(film);
}

// 2. Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

const cars = ['Volvo', 'Honda', 'Nissan'];
const carsList = String(cars); // array to string
const carsList2 = cars.join(', '); // array to string
console.log(carsList);
console.log(carsList2);
const cars2 = carsList.split(','); // string to array
console.log(cars2);

// 3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

const friends = ['Nikita', 'Dima', 'Sasha'];
for (let i = 0; i < friends.length; i++) {
  friends[i] = 'hello, ' + friends[i];
}

console.log(friends);

// 4. Преобразовать числовой массив в Boolean

const numbers = [0, 3, 10];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Boolean(numbers[i]);
}
console.log(numbers);

// 5. Отсортировать массив[1, 6, 7, 8, 3, 4, 5, 6] по убыванию

function compareNums(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

const arr1 = [1, 6, 7, 8, 3, 4, 5, 6];

arr1.sort(compareNums);

console.log(arr1);

// 6. Отфильтровать массив[1, 6, 7, 8, 3, 4, 5, 6] по значению > 3

const arr2 = [1, 6, 7, 8, 3, 4, 5, 6];
const filteredArray = arr2.filter(function (i) {
  return i > 3;
});
const filteredArray2 = arr2.filter((i) => i > 3);

const filteredArray3 = [];
for (let i of arr2) {
  if (i > 3) {
    filteredArray3.push(i);
  }
}

console.log(filteredArray);
console.log(filteredArray2);
console.log(filteredArray3);

// 7. Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function indexOfNumber(arr, num) {
  // выводит только первый найденный индекс
  console.log(`Number ${num} has index ${arr.indexOf(num, 0)}`);
}

function indexOfNumber2(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(`Number ${num} has index ${i}`);
    }
  }
}

indexOfNumber([1, 2, 6, 4, 5, 6], 6);
indexOfNumber2([1, 2, 6, 4, 5, 6], 6);

// 8. Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

// while (a >= 10) {
//   console.log(a);
// }

// 9. Реализовать цикл, который выводит в консоль простые числа

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) return console.log(`Number ${num} is not an integer`);
// }
// console.log(`Number ${num} is an integer`);

// 10. Реализовать цикл, который выводит в консоль нечетные числа

// if (num % 2 !== 0) {
//   console.log(`${num} is an odd number`);
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// IV. Prototype and Inheritance, Classes, Constructor

// Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move

const animal = {};
const cat = {};
animal.move = true;
cat.__proto__ = animal;

console.log(cat.move);
console.log(animal);
console.log(cat);

///////////////////////////////////////////////////////////////////////////////////////////////

// V. String, RegExp, DataTime

// 1. Дана строка 'ahb acb aeb aeeb adcb axeb'.Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'

const str = 'ahb acb aeb aeeb adcb axeb';
const strMatched = str.match(/a.b/g);
console.log(strMatched);

// 2. Дана строка '2+3 223 2223'.Напишите регулярку, которая найдет строку 2 + 3, не захватив остальные

const str2 = '2+3 223 2223';
const strMatched2 = str2.match(/2\+3/g);
const strMatched22 = str2.match(/\d\+\d/g);
const strMatched222 = str2.match(/2\D3/g);

console.log(strMatched2);
console.log(strMatched22);
console.log(strMatched222);

// 3. Получить день, месяц и год текущей даты и по отдельности вывести в консоль

const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());

///////////////////////////////////////////////////////////////////////////////////////////////

// VI. Exception handling - Udemy Section 16 - 259

// В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’.При выполнении 1 / 0  выводить ошибку 'на ноль делить нельзя'

try {
  console.log(a);
  let a = 3;
} catch (err) {
  // console.error(err.message);
  console.error('Ошибка: let перед использованием нужно объявить');
}

try {
  let expression = 1 / 0;
  if (expression === Infinity) {
    throw new Error('Ошибка: на ноль делить нельзя');
  }
} catch (err) {
  console.error(err.message);
}
