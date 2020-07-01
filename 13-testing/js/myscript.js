function enter() {
  // debugger;
  console.log("In enter");
  let x = document.myform.xoperand.value;
  let y = document.myform.yoperand.value;
  let result = divideBy(x, y);
  document.getElementById("result").innerHTML = result;
}

function checkXoperand() {
  console.log("in check");
  let x = document.myform.xoperand.value;
  if (isNumeric(x)) {
    console.log("All ok as is a number");
  } else {
    alert("X needs to be a number");
  }
}

function divideBy(x, y) {
  return x / y;
}

function isNumeric(num) {
  return !isNaN(num);
}

// Check to see if running under Node.js for testing
if (typeof process !== "undefined" && process.title === "node") {
  module.exports = { enter, divideBy, isNumeric };
}
