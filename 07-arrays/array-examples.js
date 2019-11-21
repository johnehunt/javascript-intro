// This file illustrates the creation of arrays
// as well as how to access array elements and 
// loop over those elements

var brands = ["BMW", 'Apple', 'Microsoft', 'BT'];
console.log('brands:', brands);

var fruit = new Array('Banna', 'Apple', 'Raspberry'); // Available but considered bad style
console.log('fruit:', fruit);

// iterating over the values in an array
for (let i = 0; i< brands.length; i++) {
    console.log(brands[i]);
}

for (brand of brands) {
    console.log('brand:', brand);
}

// Apply a function to each element in an array
brands.forEach((e) => console.log(e.toUpperCase()));

console.log('brands[0]:', brands[0]);

console.log('Modify array element wiht index 0');
brands[0] = 'Ford';
console.log('brands[0]:', brands[0]);

// Adding to an array
brands.push('Jaguar');
console.log('brands:', brands);

// Mixed type arrays
var data = ['John', 55, 23.55, true];
console.log('data:', data);

// Array properties
console.log('brands.length:', brands.length);
console.log('brands.sort():', brands.sort());

// get the type of an array
console.log('typeof brans:', typeof brands); // note type is object but consider it an array
console.log('Array.isArray(brands):', Array.isArray(brands)); // Prints true
console.log('brands instanceof Array:', brands instanceof Array); // Prints true