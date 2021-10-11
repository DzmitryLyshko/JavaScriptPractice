'use strict';

// Unit 7. String, RegExp, DataTime

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
console.log(currentDate.getMonth()+1); // метод getMonth возвращает номер месяца, но начиная с нуля, чтобы получить привычный нам номер месяца надо прибавить единицу
console.log(currentDate.getFullYear());
