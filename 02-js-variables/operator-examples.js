var result;
var x = 10, y =2; 

console.log('x=', x, ', y=', y);
console.log('x + y:', x + y);
console.log('x * y:', x * y);
console.log('x / y:', x / y);
console.log('x % 3:', x % 3);
console.log('x - y:', x - y);
console.log('x ** 2:', x ** 2); // Exponentiation operator - raises 1st to the power of the 2nd

console.log('++x', ++x);  // Pre Increment
console.log('x++', x++);  // Post Increment
console.log('--x', --x);  // Pre Decrement
console.log('x--', x--);  // Post Decrement

// Assignment Operators
console.log('x += 2:', x += 2)
console.log('x -= 2:', x -= 2)
console.log('x *= 2:', x *= 2)
console.log('x /= 2:', x /= 2)

result = (x + y) * 10;
console.log('result = (x + y) * 10:', result);

/*
If one of the numbers is a floating point number
then results will be floating point.
*/
x = 23.5, y = 12;
console.log('x * y:', x * y);
console.log('x / y:', x / y);

// Becafeful of decimal numbers - arithmetic operations can give surprising results
console.log('0.2 + 0.1:', 0.2 + 0.1); // prints 0.30000000000000004

// + can also do string concatenation
var name = 'John' + ' ' + 'Jones';
console.log("name = 'John' + ' ' + 'Jones':", name);

// Logical Operators (becareful of bitwise versions)
var flag1 = true, flag2 = false;
console.log('flag1 && flag2:', flag1 && flag2); // Print the reuslt of flag1 AND flag2
console.log('flag1 || flag2:', flag1 || flag2); // Print the reuslt of flag1 OR flag2
console.log('! flag1:', ! flag1) // Print the reuslt of logical NOT flag1 (inverts the value)

console.log('5 & 1:', 5 & 1); // Bitwise AND really 0101 & 0001 => 0001

// Operator Precedence
// Operator precedence describes the order in 
// which operations are performed in an arithmetic expression.
var res = 100 + 5 * 3
console.log('res = = 100 + 5 * 3:', res)
res = (100 + 5) * 3
console.log('res = = (100 + 5) * 3:', res)

// Not a Number = NaN - indicates somethign is not a legal number
console.log('100 / "John":', 100 / "John");