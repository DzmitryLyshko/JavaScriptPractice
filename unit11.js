'use strict';

// Объявить и присвоить значение переменной в одном файле и вывести в консоль эту переменную в другом файле

// в HTML-файл прописываем <script type="module" src="unit11.js"></script>

import { firstName, lastName } from './unit11sourse.js';
console.log(`His name is ${firstName} ${lastName}`);
