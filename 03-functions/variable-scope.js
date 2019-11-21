// Illustrates the scope of a variable w.r.t. functions

function printRole() {
    console.log('role inside function:', role); // accesses a global function
}

printRole();

function printIt() {
    var ageLimit = 21; // variable that is local to a function
    console.log('ageLimit inside function:', ageLimit);
}

printIt();
// console.log(ageLimit); can't access ageLimit here - it is not defined

var window = {title: "host"}

function addToGlobal() {
    window.value = 42; // Sets a variable on the window object which is gloabl
    console.log('window:', window);
}
addToGlobal();

console.log('window:', window); // can access this 