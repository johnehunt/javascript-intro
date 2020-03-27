class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  birthday() {
    this.age = this.age + 1;
    console.log("Happy Birthday you are now", this.age);
  }
  toString() {
    return this.name + ", " + this.age;
  }
}

class Employee extends Person {
  constructor(name, age, id, rate) {
    super(name, age); // super must be first statement in constructor
    this.id = id;
    this.rate = rate;
  }
  calculatePay(hours) {
    return this.rate * hours;
  }
  toString() {
    return (
      "Employee(" + super.toString() + ", " + this.id + ", " + this.rate + ")"
    );
  }
}

let employee = new Employee("John", 21, "1223", 8.5);
console.log(employee);
console.log(`${employee}`);
console.log("employee.calculatePay(40):", employee.calculatePay(40));

// Classes in action
console.log("Person");
let p = new Person("John", 25);
console.log(p);
p.birthday();
console.log(p.name);
console.log(p.age);

console.log("---------");

console.log("Employee");
let e = new Employee("Denise", 51, "VC123", 74.55);
console.log(e);
e.birthday();
console.log(e.name);
console.log(e.age);
console.log(e.id);
console.log("e.calculate_pay(40):", e.calculatePay(40));
