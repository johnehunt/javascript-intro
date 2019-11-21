// This is a comment 

var count = 1; // Variable called count storing a numeric integer value
var total = 42.6; // Vaeriable holding a numeric decimal number
var name = 'Jasmine'; // Variable storing a string
var flag = true; // Variable holding a boolean value true
var age; // a declared variable but without an assigned value

console.log('count:', count);
console.log('total:', total);
console.log('name:', name);
console.log('age:', age); 

age = 55;
console.log('age now is:', age);

// Type Operator
console.log('typeof count:', typeof count ); // type of the value held in count - number
console.log('typeof total:', typeof total ); // type held in total - number
console.log('typeof flag:', typeof flag ); // type of the value held in flag1
console.log('typeof name:', typeof name ); // type of the value held in name

// Type is dynamic - it can change
var myvar;           // Now myvar is undefined
myvar = 5;           // Now myvar is a Number
myvar = "John";      // Now myvar is a String

var start = 1, role = 'Writer'; // Declaring multiple variables in one go
console.log('start:', start, ', role:', role);

// Integers are accurate up to 15 digits.
var x = 999999999999999;   // x will be 999999999999999
console.log('x:', x);
var y = 9999999999999999;  // y will be 10000000000000000
console.log('y:', y);

// Strings are written as text within double or single quotes
var name1 = "John";
console.log('name1:', name1);
var name2 = 'John';
console.log('name2:', name2);

var longString = "They said 'Hello'"; // single quotes inside double
console.log('LongString:', longString)
longString = 'They said "Hello"'; // double quotes inside single
console.log('LongString:', longString)

// null represents nothingness - as opposed to undefined
var project = null;
console.log('project = null: ', project);
// can also set to undefined
project = undefined;
console.log('project = null: ', undefined);
// Are logical equal
console.log(null == undefined)
