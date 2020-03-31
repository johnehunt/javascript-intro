const p1 = {age: 42, name: "John"};
const {age, name} = p1;

console.log(age); 
console.log(name); 

const {age: foo, name: bar} = p1;
 
console.log(foo); 
console.log(bar); 

let a, b;
// parentheses around the assignment statement are required 
// when using object literal destructuring assignment 
// without a declaration.
({a, b} = {a: 1, b: 2});
console.log(a); 
console.log(b);