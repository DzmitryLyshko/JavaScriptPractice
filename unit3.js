'use strict';

// Unit 3. Conditional Statements and Data Types

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
let j = Number('string'); // NaN
let k = String(true); // 'true'
let l = Boolean(42); // true