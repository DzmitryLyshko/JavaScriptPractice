"use strict";

// Unit 4. Objects and Functions

// - Создать объект car, добавить к нему свойство color со значением 'черный'

const car = {
  color: "черный",
};

// - Изменить свойство color объекта car на 'зеленый'

car.color = "зеленый";

// - В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

car.power = function (horsepower) {
  console.log(`This car has ${horsepower} horse powers`);
};
car.power(232);

// - На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

function sumFruits(apples, pears) {
  return apples + pears;
}
let storage = sumFruits(5, 6);
console.log(`There are ${storage} fruits in the storage`);
// console.log(`There are ${sumFruits(5, 6)} fruits in the storage`);

// - В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

let properName = "Dzmitry Lyshko";
function checkUser() {
  let checkingName = "Dzmitry Lyshko";
  if (properName === checkingName) {
    console.log(`Hello, ${properName}`);
  } else {
    console.log("The name is not correct");
  }
}
checkUser();

// - Напишите функцию вычисления типа аргумента и вывод типа в консоль

function getArgumentType(argument) {
  console.log(`The type is ${typeof argument}`);
}

getArgumentType(42);
getArgumentType("some text");
getArgumentType(true);
getArgumentType(null);
getArgumentType(Infinity);

// - Напишите функцию, которая определяет является ли число простым или нет

function checkPrime(num) {
  if (num <= 1) {
    // число является простым, если оно больше 1 и при этом делится без остатка только на 1 и на самого себя
    console.log(`${num} is not a prime number`);
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return console.log(`${num} is not a prime number`);
    }
    console.log(`${num} is a prime number`);
  }
}

checkPrime(-2);
checkPrime(0);
checkPrime(1);
checkPrime(27);
checkPrime(5);
