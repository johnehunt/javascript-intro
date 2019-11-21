// Example of defining classes in JavaScript

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
  }
  // Define setters and getters for property
  get name() {
      return this._name;
  }
  set name(n) {
      this._name = n;
  }
  // Override default toString method
  toString() {
    return "Person(" + this.name + "," + this.age + ")";
  }
}

person1 = new Person("John", 55);
person2 = new Person("Denise", 52);

console.log(person1);
console.log(person2);
// See outout using a template literal
// Template literals are string literals allowing embedded expressions
// Note use of back-ticks
console.log(`${person1}`); 

person1.birthday();
console.log(person1.name)

Person.hello();
// person1.hello(); // WOn;t work - statics only on class
