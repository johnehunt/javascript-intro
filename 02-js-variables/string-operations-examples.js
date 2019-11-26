// Provides a set of exampels for operations on strings

var name = 'Phoebe Davies';
console.log('name.length:', name.length);

// Index of methods
console.log("name.indexOf('Davies'):", name.indexOf('Davies'));
console.log('name.lastIndexOf("Davies"):', name.lastIndexOf("Davies"));
console.log("name.indexOf('Smith'):", name.indexOf('Smith')); // returns -1 if doe snot contain string

// Substrings
// Take a slice of the string from index 2 upt o but not including index 6
// Strings are indexed form Zero
console.log('name.slice(2, 6):', name.slice(3, 6)); 
// If omit send index takes end of string
console.log('name.slice(2):', name.slice(2)); 
// Can also count from end of String
console.log('name.slice(-2):', name.slice(-2)); 

// Also have Substring - like slice but can't take negative numbers
console.log('name.substring(2, 6):', name.substring(2, 6));
console.log('name.substring(2):', name.substring(2));

// And substr() - like slice but 2nd param indictes length of extracted string
console.log('name.substr(2, 6):', name.substr(2, 6));
console.log('name.substr(2):', name.substr(2)); // slices to end of string
console.log('name.substr(-2):', name.substr(-2)); // counts from end backwards

// Extracting individual characters
console.log('name.charAt(3):', name.charAt(3));
console.log('name.charCodeAt(3):', name.charCodeAt(3));

// Replacing String content
console.log('name.replace("Davies", "Smith"):', name.replace("Davies", "Smith"));
// Above returns a new string - doesn't affect original string
console.log('name:', name);

// Converting to Upper or Lower Case
console.log('name.toUpperCase():', name.toUpperCase());
console.log('name.toLowerCase():', name.toLowerCase());

// Convert a number to a string
var x = 123;
var y = 456;
console.log('x.toString() + y.toString():', x.toString() + y.toString());

// Trim operator - removes white space
var location = '     London    ';
console.log('location:', location);
console.log('location.trim():', location.trim()); // Not supported by IE 8 or below
