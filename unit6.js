'use strict';

// Unit 6. Prototype and Inheritance, Classes, Constructor

// Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move

const animal = {};
const cat = {};
animal.move = true;
cat.__proto__ = animal;

console.log(cat.move);
console.log(animal);
console.log(cat);
