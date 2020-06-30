// This file contains examples of processing over / iterating over an array
const brands = ["BMW", "Apple", "Microsoft", "BT"];
console.log("brands:", brands);

// Basic looping over the values in an array
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

console.log("------ For in an array -------------");

// Access index of each element in array
for (let i in brands) {
  console.log(brands[i]);
}

console.log("------- for of elements in an array ------------");

// Iterating over elements in an array
for (let brand of brands) {
  console.log("brand:", brand);
}

console.log("------- using forEach ------------");

// Apply a function to each element in an array
// FP way of doing it
brands.forEach(e => console.log(e.toUpperCase()));

console.log("------- using map ------------");

// map - createa a new array by aplying fucntion to
// each element in the array
let lowerCaseBrands = brands.map(e => e.toLowerCase());
console.log("lowerCaseBrands:", lowerCaseBrands);

console.log("------- using filter ------------");

// filter - return all array elements that pass test
var longNameBrands = brands.filter(s => s.length > 5);
console.log("longNameBrands:", longNameBrands);

console.log("------- using reduce ------------");

// reduce - used to perform some calculation with a running total
const totals = [10, 24, 45, 21, 89, 5];
console.log("totals;", totals);
const sum = totals.reduce((total, value) => total + value);
console.log("sum:", sum);

totals.filter(t => t > 25).forEach(t => console.log(t))
