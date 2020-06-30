// Can use try catch even to catch syntax errors

try {
  console.log("In try");
  let average = count / 0;
  console.log("Finsihed");
} catch (ex) {
  console.log("Oops");
  console.log(("ex:", ex));
  console.log(ex.name);
} finally {
  console.log("Finally");
}
