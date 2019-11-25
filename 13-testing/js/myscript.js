function enter() {
  // debugger;
  console.log("In enter");
  var x = document.myform.xoperand.value;
  var y = document.myform.yoperand.value;
  var result = divideBy(x, y);
  document.getElementById("result").innerHTML = result;
}

function checkXoperand() {
  console.log("in check");
  var x = document.myform.xoperand.value;
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
  module.exports = { divideBy: divideBy, isNumeric: isNumeric };
}
