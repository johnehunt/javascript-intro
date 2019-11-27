class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return "Person(" + this.name + "," + this.age + ")";
  }
}

var p1 = new Person("John", 36);
var p2 = new Person("Phoebe", 21);

console.log('p1:', p1);
console.log('p1.toString():', p1.toString());
console.log("`${p1}`:", `${p1}`); 

console.log('P2:', p2);
console.log('p2.toString():', p2.toString());
console.log("`${p2}`:", `${p2}`); 

var px = p1;
console.log(p1);
console.log(px);
