// Arrow function examples are listed here
// Arrow functions were introduced in ES6

var func = () => {
    console.log('Hello World');
}

func();

var func2 = () => console.log('Hello World');

// Arrow functions return a value by defualt
var hello = () => "Hello World!'";
console.log('hello():', hello());

// Arrow fucntions can take parameters
var printMessage = (message) => {
    console.log(message);
}
printMessage('Hello JavaScript world');

// Short hand form
printMessage = message => console.log(message);

printMessage('Hello Short Hand world');



