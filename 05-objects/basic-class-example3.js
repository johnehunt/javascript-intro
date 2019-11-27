class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  birthday() {
    this.age = this.age + 1;
    console.log("Happy Birthday you are now", this.age);
  }

  getFormattedName() {
    return "'" + this.name.toUpperCase() + "'";
  }

  isTeenager() {
      if ((this.age > 12) && (this.age<20)) {
          return true;
      } else {
          return false;
      }
  }

  toString() {
    return "Person(" + this.name + "," + this.age + ")";
  }
}

var p1 = new Person("John", 36);

p1.birthday();

console.log(p1.isTeenager());
var formatedName = p1.getFormattedName();
console.log(formatedName);
