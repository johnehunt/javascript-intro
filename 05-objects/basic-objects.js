// This file provides some basic exampels of defining objects in JavaScript

// Create an object to represent a car
// JavaScript objects act as containers for named values such as properties
const car = {brand: 'Porsche', model: '911', colour: 'Red'};
console.log('car:', car);

// Often layout is important for human readers only
let person = {
    name: 'John',
    age: 55
}

console.log('person:', person)

// Access object properties
console.log('person.name is person.age:', person.name, 'is', person.age);
// alternatively can use [] index notation
console.log("person['name'] is person['age']:", person['name'], 'is', person['age']);

// Objects can have methods - functions that can be called on object
let person = {
    name: 'John',
    age: 55,
    married: true,
    partner: {name: 'Denise', age: 36},
    birthday: function() {
        this.age = this.age + 1;
        console.log('Happy Birthday, you are now', this.age);
    }
}


person.birthday();
console.log(person.name);
