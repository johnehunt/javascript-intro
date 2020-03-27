class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
}

let p1 = new Person("John", 36);
let p2 = new Person("Phoebe", 21);

console.log(p1);
console.log(p1.name, 'is', p1.age);

console.log(p2);
console.log(p2.name, 'is', p2.age);