function hello() {
    alert("Hello World!");
}

function formValidation() {
    console.log('formValidation()');
    return true;
}

function myFocusFunction(element) {
    console.log('myMouseOverFunction(', element, ')');
}

function myMouseOverFunction(element) {
    console.log('myMouseOverFunction(', element, ')');
    element.style.background = "green";
}

function myMouseOutFunction(element) {
    console.log('myMouseOutFunction(', element, ')');
    element.style.background = "white";
}

function myClickFunction() {
    console.log('myClickFunction');
}