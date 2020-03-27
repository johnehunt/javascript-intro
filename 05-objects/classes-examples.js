// Example of defining classes in JavaScript
// Classes introduced in ES6 - previously had to use prototype form

class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  birthday() {
    this.age = this.age + 1;
    console.log("Happy Birthday you are now", this.age);
  }
  static hello() {
    console.log("hello");
    if (this.count === undefined) {
      this.count = 1;
    } else {
      ++this.count;
    }
  }
  // Define setters and getters for property
  get name() {
    console.log("In getter for name");
    return this._name;
  }
  set name(n) {
    console.log("In setter for name with ", n);
    this._name = n;
  }
  // Override default toString method
  toString() {
    return "Person(" + this.name + "," + this.age + ")";
  }
}

let person1 = new Person("John", 55);
let person2 = new Person("Denise", 52);

console.log(person1);
console.log(person2);
// See outout using a template literal
// Template literals are string literals allowing embedded expressions
// Note use of back-ticks
console.log(`${person1}`);

person1.birthday();
console.log(person1.name);
person1.name = "Bob";
console.log(person1.name);

Person.hello();
// person1.hello(); // Won'tt work - statics only on class

console.log(Person.count);
