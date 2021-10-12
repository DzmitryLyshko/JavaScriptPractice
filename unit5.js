'use strict';

// Unit 5. Arrays and Cycles

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
  if (a === b) return 0;
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(`Number ${num} has index ${i}`);
    }
  }
}

indexOfNumber([1, 2, 6, 4, 5, 6], 6);
indexOfNumber2([1, 2, 6, 4, 5, 6], 6);

// 8. Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

// let a = 23;
// while (a >= 10) {
//   console.log(a);
//   a--;
// }
function showGreaterOrEqualTen(a) {
  // Честно, названия лучше не придумал, буду рад совету
  while (a >= 10) {
    console.log(a);
    a--;
  }
}
showGreaterOrEqualTen(23);

// 9. Реализовать цикл, который выводит в консоль простые числа

function checkPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

function showPrimes(max) {
  for (let i = 2; i < max; i++) {
    if (!checkPrime(i)) continue;

    console.log(`${i} is a prime number`);
  }
}

showPrimes(50);

// 10. Реализовать цикл, который выводит в консоль нечетные числа

function showOdd(num1, num2) {
  while (num1 <= num2) {
    if (num1 % 2 !== 0) {
      console.log(`${num1} is an odd number`);
    }
    num1++;
  }
}
showOdd(23, 42);
