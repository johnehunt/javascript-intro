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
    super(name, age); // super must be first statement in cons
    this.id = id;
    this.rate = rate;
  }
  calculatePay(hours) {
    return this.rate * hours;
  }
  toString() {
    return "Employee(" + super.toString() + ", " + this.id + ", " + this.rate + ")";
  }
}

employee = new Employee("John", 21, "1223", 8.5);
console.log(employee);
console.log(`${employee}`); 
console.log("employee.calculatePay(40):", employee.calculatePay(40));
