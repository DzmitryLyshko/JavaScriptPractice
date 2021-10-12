'use strict';

// Unit 6. Prototype and Inheritance, Classes, Constructor

// Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move

const animal1 = {};
const cat1 = {};
animal1.move = true;
cat1.__proto__ = animal1;

console.log(cat1.move);
console.log(animal1.move);
console.log(animal1);
console.log(cat1);

class Animal {
  constructor(move) {
    this.move = move;
  }
}

class Cat extends Animal {}
const cat = new Cat(true);
const animal = new Animal(true);

console.log(cat.move);
console.log(animal.move);
console.log(animal);
console.log(cat);
