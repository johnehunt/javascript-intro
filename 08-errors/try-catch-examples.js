// Indicates that HavaScript code shoulf be executed in 'strict mode'
// Introduces in ES v 5 - ignored by older versions
// Ensures better code style - e.g. can;t use undeclared variables
// support by IE 10 and above, Chrome 13 and above etc.
"use strict";

// Illustrates use of try-catch and (optional) finally

var userInput = 11;
try {
  console.log("Entering try block");
  // Can throw an exception yourself
  /// exception can be a string, number, boolean or object
  if (userInput < 10) throw "too low";
  if (userInput > 10) throw "too high";
  console.log("Oh its just right");
} catch (ex) {
  console.log("In catch block");
  console.log("ex:", ex);
} finally {
  console.log("Always runs");
}
