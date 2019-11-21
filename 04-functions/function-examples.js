// This file illustrates examples of defining functions

// Basic function defintion
function printHelloWorld() {
    console.log('Hello World');
}

console.log('printHelloWorld:', printHelloWorld); // doe snot invoke the function
// Need to use the () operator to invoke the function
// Otherwise just refers to the function object
printHelloWorld();

// Function with Arguments
function printMessage(message) {
    console.log(message);
}

printMessage("Hello JavaScript World")

// Function with multiple parameters
function printInformation(info1, info2, info3) {
    console.log(info1, info2, info3);
}

printInformation('John', 'was', 'here');

// Function with a return value
function addTen(i) {
    return i + 10;
}

console.log('addTen(5):', addTen(5));

// Function expression example - define an anonymous function
// and assign it to a veriable
var sum = function(x, y) {
    return x + y;
}
console.log('sum(4, 5):', sum(4, 5));

// Function returning a Function and capturing value of X
function createMultipler(x) {
    function multiplier(y) {
        return x * y;
    }
    return multiplier;
}

var func1 = createMultipler(10);
console.log(func1); // Does not invoke the function
console.log('func1(5):', func1(5));

// Functions can take a function as a parameter
function processor(func, x, y) {
    return func(x, y);
}

var result = processor(function(a, b) { return a + b }, 4, 5);
console.log('result:', result);