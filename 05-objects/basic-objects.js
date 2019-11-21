// This file provides some basic exampels of defining objects in JavaScript

// Create an object to represent a car
// JavaScript objects act as containers for named values such as properties
var car = {brand: 'Porsche', model: '911', colour: 'Red'};
console.log('car:', car);

// Often layout is important
var person = {
    name: 'John',
    age: 55
}

console.log('person:', person)

// Access object properties
console.log('person.name is person.age:', person.name, 'is', person.age);
// alternatively can use [] index notation
console.log('person.name is person.age:', person['name'], 'is', person['age']);

// Objects can have methods - functions that can be called on object
var person = {
    name: 'John',
    age: 55,
    birthday: function() {
        this.age = this.age + 1;
        console.log('Happy Birthday, you are now', this.age);
    }
}

person.birthday();
