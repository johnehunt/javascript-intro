// Illustrates the scope of a letiable w.r.t. functions

// Function can access global letiable
let role = 'Writer';
function printRole() {
    console.log('role inside function:', role); // accesses a global letiable
}

printRole();

// letiables declared within a function have Function Scope
// They are only available within the function
function printIt() {
    let ageLimit = 21; // letiable that is local to a function 
    console.log('ageLimit inside function:', ageLimit);
}

printIt();
// console.log(ageLimit); // can't access ageLimit here - it is not defined

let window = {title: "host"}

function addToGlobal() {
    window.value = 42; // Sets a letiable on the window object which is gloabl
    console.log('window:', window);
}
addToGlobal();

console.log('window:', window); // can access this 

// Block Scope - prior to ES6 / ES2015 JavaScript did not have a block scope
// But now has let keyword to define a block scoped letiable
function myNewFunction() {
   // flag not available here
   console.log('In myNewFunction');
   // Define a block of code
   {
       let flag = true
       console.log('flag:', flag);
   }
   // flag not available here
   // console.log('flag:', flag);
}

myNewFunction();

// use of const keyword
// Defines a value as a const - is block aware
const MAX = 100;
console.log('MAX:', MAX);

// X is a variable with value 10 
let x = 10;
{
    // X is 2 and a constant within this block
    const x = 2
    console.log('x is a const inside block:', x);
}
console.log('x outside block:', x);