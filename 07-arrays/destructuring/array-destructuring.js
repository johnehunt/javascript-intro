const brands = ["BMW", 'Apple', 'Microsoft', 'BT'];
console.log(brands);
console.log('----------');

let [b1, b2, b3, b4] = brands;
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log('----------');

let [a1, a2] = brands;
console.log(a1);
console.log(a2);
console.log('----------');

let [x1, , , x2] = brands;
console.log(x1);
console.log(x2);
console.log('----------');

let [head,...tail] = brands
console.log(head);
console.log(tail);
console.log('----------');

let x, y;
[x, y] = brands;
console.log(x);
console.log(y);