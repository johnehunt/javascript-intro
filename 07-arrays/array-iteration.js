// This file contains examples of processing over / iterating over an array

// Basic looping over the values in an array
for (let i = 0; i< brands.length; i++) {
    console.log(brands[i]);
}

console.log('------ For in an array -------------');

// Access index of each element in array
for (let i in brands) {
  console.log(brands[i]);
}

console.log('------- for of elements in an array ------------');

// Iterating over elements in an array
for (brand of brands) {
    console.log('brand:', brand);
}

console.log('------- using forEach ------------');

// Apply a function to each element in an array
brands.forEach((e) => console.log(e.toUpperCase()));

// map

// filter