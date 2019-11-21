// This file illustrates examples of looping constrcuts
// specifically for, while and do-while loops

// Basic for loop
for (var i = 0; i < 6; i++) {
  console.log(i);
}

// For a set of values in an array
var data = [1, 2, 3, 4];
for (i in data) {
  console.log(i);
}

// Alternatively can use of with arays
for (i of data) {
  console.log(i);
}

// A simple while loop
var i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

// A simple do while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
