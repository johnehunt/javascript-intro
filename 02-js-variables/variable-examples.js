// This is a comment 

var count = 1; // Variable storing a numeric integer value
var total = 42.6 // Vaeriable holding a numeric floating point number
var name = 'Jasmine'; // Variable storing a string
var x; // a declared variable but without an assigned value

console.log(count);
console.log(total);
console.log(name);
console.log('age:', x); 

x = 55;
console.log('age now is:', x);

var start = 1, role = 'Writer'; // Declaring multiple variables
console.log(start);
console.log(role);

function printRole() {
    console.log(role); // accesses a global function
}

printRole();

function printIt() {
    var age = 21; // variable that is local to a function
    console.log(age);
}

printIt();
// console.log(age); can't acce3ss age here - it is not defined

var window = {title: "host"}

function addToGlobal() {
    window.value = 42; // Sets a variable on the window object which is gloabl
    console.log(window);
}
addToGlobal();

console.log(window.value); // can access this 

// Strings are written as text within double or single quotes
var name1 = "John"
var name2 = 'John'