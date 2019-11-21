// This file illustrates examples of looping constrcuts
// specifically for, while and do-while loops

console.log('-------- Basic For loop -----------');

// Basic for loop - note use of let not var
for (let i = 0; i < 6; i++) {
  console.log(i);
}

console.log('------- simple while loop ------------');

// A simple while loop
var i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

console.log('------ simple do while loop -------------');

// A simple do while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

console.log('------ can nest loops -------------');

// Can nest loops
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    console.log("i * j =", i * j);
  }
}

console.log('------- can break out of a loop ------------');

// Can also break out of a loop
for (let i = 0; i < 6; i++) {
  if (i == 3) break;
  console.log(i);
}

console.log('------- can continue a loop ------------');

// Can also choose to continue to the next iteration
for (let i = 0; i < 6; i++) {
  if (i == 3) continue;
  console.log(i);
}

console.log('------- can label statements an break ------------');

// Can label statements and break to the label
outer: for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (j == 3) break outer;
    console.log("i * j =", i * j);
  }
}

console.log('------- can label statements and continue ------------');

// Can label statements and continue with the label
outer: for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (j == 3) continue outer;
      console.log("i * j =", i * j);
    }
  }
