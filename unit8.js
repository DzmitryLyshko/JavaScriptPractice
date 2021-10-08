'use strict';

// Unit 8. Exception handling

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
