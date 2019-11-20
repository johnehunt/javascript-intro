var result;
var x = 10, y =2; 

console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x % 3);
console.log(x - y);
console.log('x++', x++);
console.log('x--', x--);

// Assignment operators
console.log(x += 2)
console.log(x -= 2)
console.log(x *= 2)
console.log(x /= 2)

result = (x + y) * 10;
console.log(result);

/*
If one of the numbers is a floating point number
then reuslts will be floating point.
*/
x = 23.5, y = 12;
console.log(x * y);
console.log(x / y);

// + can also do string concatenation
var name = 'John' + ' ' + 'Jones';
console.log(name);

