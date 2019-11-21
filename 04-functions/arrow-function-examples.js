// Arrow function examples are listed here
// Arrow functions were introduced in ES6

var func = () => {
    console.log('Hello World');
}

func();

var printMessage = (message) => {
    console.log(message);
}
printMessage('Hello JavaScript world');

// Short hand form
printMessage = message => console.log(message);


printMessage('Hello Short Hand world');

// Arrow functions return a value by defualt
var hello = () => "Hello World!'";
console.log('hello():', hello());


