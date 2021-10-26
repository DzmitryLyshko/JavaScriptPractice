'use strict';

// Объявить и присвоить значение переменной в одном файле и вывести в консоль эту переменную в другом файле

// в HTML-файл прописываем <script type="module" src="unit11.js"></script>
export let firstName = 'Vasya';
let lastName = 'Pupkin';
export { lastName };
