// Arrow function examples are listed here
// Arrow functions were introduced in ES6

let func = () => { 
    console.log('In here');
    console.log('Hello World');
};

func();

let func2 = () => console.log('Hello World');

// Arrow functions return a value by defualt
let hello = () => "Hello World!";
console.log('hello():', hello());

// Arrow fucntions can take parameters
let printMessage = (message) => {
    console.log(message);
}
printMessage('Hello JavaScript world');

// Short hand form
printMessage = message => console.log(message);

printMessage('Hello Short Hand world');

let adder = (x, y) => x + y;

console.log(adder(3, 4));

