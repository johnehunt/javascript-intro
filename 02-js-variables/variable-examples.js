// This is a comment 

let count = 1; // letiable called count storing a numeric integer value
let total = 42.6; // letiable holding a numeric decimal number
let name = 'Jasmine'; // letiable storing a string
let flag = true; // letiable holding a boolean value true
let age; // a declared letiable but without an assigned value

console.log('count:', count);
console.log('total:', total);
console.log('name:', name);
console.log('flag:', flag);
console.log('age:', age); 

age = 55;  // assigning a value to the letiable age
console.log('age now is:', age);

// Type Operator - JavaScript is a dynamcially typed langauge
console.log('typeof count:', typeof count ); // type of the value held in count - number
console.log('typeof total:', typeof total ); // type held in total - number
console.log('typeof name:', typeof name ); // type of the value held in name
console.log('typeof flag:', typeof flag ); // type of the value held in flag1

// Type is dynamic - it can change
let mylet;           // Now mylet is undefined
mylet = 5;           // Now mylet is a Number
mylet = "John";      // Now mylet is a String

// JavaScript also supports the idea of a constant
// Introduced in ES 6
const MAX_NUMBER = 100;
// MAX_NUMBER = 200; // Can;t reassign a value once it is set

// Declaring multiple letiables in one go
let start = 1, role = 'Writer'; 
console.log('start:', start, ', role:', role);

// Integers are accurate up to 15 digits.
let x = 999999999999999;   // x will be 999999999999999
console.log('x:', x);
let y = 9999999999999999;  // y will be 10000000000000000
console.log('y:', y);

// Strings are written as text within double or single quotes
let name1 = "John";
console.log('name1:', name1);
let name2 = 'John';
console.log('name2:', name2);

let longString = "They said 'Hello'"; // single quotes inside double
console.log('LongString:', longString)
longString = 'They said "Hello"'; // double quotes inside single
console.log('LongString:', longString)

// Since ES6 can have multi line strings using
// template literals - declared using backticks
let multiLineString = `This
is a multi line
string`;
console.log('multiLineString:', multiLineString);

// null represents nothingness - as opposed to undefined
let project = null;
console.log('project = null: ', project);
// can also set to undefined
project = undefined;
console.log('project = null: ', undefined);
// Are logical equal
console.log(null == undefined)