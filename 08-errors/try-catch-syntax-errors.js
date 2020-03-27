// Can use try catch even to catch syntax errors

try {
  let average = count / 0;
} catch (ex) {
  console.log("Oops");
  console.log(("ex:", ex));
  console.log(ex.name);
}
