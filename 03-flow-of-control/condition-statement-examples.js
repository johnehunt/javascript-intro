// The file provides exampls of conditional statements
// It covers, if, if else, if elseif, and switch

// Change age to see how flow of control changes
var age = 17;
console.log('age:', age);

// Simple if statement
if (age < 18) {
    console.log('Under 18');
}

// If statement with else part
if (age < 18) {
    console.log('Under 18');
} else {
    console.log('18 or over');
}

// If statement with else if statement
if (age < 13) {
    console.log('Child');
} else if (age < 20) {
    console.log('Teenager');
} else {
    console.log('Over 20');
}

// Switch statement - selects code block(s) from alternatives
switch (age) {
    case 0:
        console.log('Baby');
        break;
    case 17:
        console.log('Can Drive');
        break;
    case 18:
        console.log('Can drink');
    case 21:
    case 40:
    case 60:
        console.log('Its a big birthday');
    default:
        console.log('Some other age');
}