// This file illustrates examples of defining functions

// Basic function defintion
function printHelloWorld() {
  console.log("Hello World");
}

// Need to use the () operator to invoke the function
// Otherwise just refers to the function object
printHelloWorld();

console.log("printHelloWorld:", printHelloWorld); // does not invoke the function
console.log(typeof printHelloWorld);

// Function with Arguments
function printMessage(message) {
  console.log(message);
}

printMessage("Hello JavaScript World");
printMessage("Welcome");
printMessage("Ola");
printMessage(34);

// Function with multiple parameters
function printInformation(info1, info2, info3) {
  console.log(info1, info2, info3);
}

printInformation("John", "was", "here");

console.log("-------");

// Function with a return value
function addTen(i) {
  return i + 10;
}

console.log("addTen(5):", addTen(4));
// # Store result from addTen in a letiable
let result = addTen(5);
console.log("result = addTen(5):", result);
// Use the result returned from square in a conditional expression
if (addTen(3) < 15) {
  console.log("Still less than 15");
}

console.log("-------");

// Function expression example - define an anonymous function
// and assign it to a veriable
let sum = function(x, y) {
  return x + y;
};

console.log("sum(4, 5):", sum(4, 5));
result = sum(3, 4);
console.log(result);

console.log("--- Function Alias ----");

function square(i) {
  return i * i;
}

console.log("square(5):", square(5));

let doit = square;
console.log("doit(5):", doit(5));

console.log("---- higher order functions ---");

// Functions can take a function as a parameter
function processor(func, x, y) {
  return func(x, y);
}

let result = processor(
  function(a, b) {
    return a + b;
  },
  4,
  5
);
console.log("result:", result);

function multByTwo(num1, num2) {
  return num1 * num2;
}

function multByFive(num1, num2) {
  return num1 + num2 * 5;
}

function addOne(num1, num2) {
  return num1 + num2 + 1;
}

console.log(processor(multByTwo, 3, 4));
console.log(processor(multByFive, 5, 6));
console.log(processor(addOne, 3, 2));

console.log("---- Function returning a function ---");

// Function returning a Function and capturing value of X
function createMultipler(x) {
  function multiplier(y) {
    return x * y;
  }
  return multiplier;
}

let func1 = createMultipler(10);
console.log(func1); // Does not invoke the function
console.log("func1(5):", func1(5));

let doubleit = createMultipler(2);
console.log('doubleit(5):', doubleit(5));

let trebleit = createMultipler(3);
console.log('trebleit(5):', trebleit(5));