// Provides a set of exampels for operations on strings

let user_name = 'Phoebe Davies';
console.log('name.length:', user_name.length);

// Index of methods
console.log("name.indexOf('Davies'):", user_name.indexOf('Davies'));
console.log('name.lastIndexOf("Davies"):', user_name.lastIndexOf("Davies"));
console.log("name.indexOf('Smith'):", user_name.indexOf('Smith')); // returns -1 if doe snot contain string

// Substrings
// Take a slice of the string from index 2 up to but not including index 6
// Strings are indexed from Zero
console.log('name.slice(2, 6):', user_name.slice(3, 6)); 
// If omit second index takes to end of string
console.log('name.slice(2):', user_name.slice(2)); 
// Can also count from end of String
console.log('name.slice(-2):', user_name.slice(-2)); 

// Also have Substring - like slice but can't take negative numbers
console.log('name.substring(2, 6):', user_name.substring(2, 6));
console.log('name.substring(2):', user_name.substring(2));

// And substr() - like slice but 2nd param indicates length of extracted string
console.log('name.substr(2, 6):', user_name.substr(2, 6));
console.log('name.substr(2):', user_name.substr(2)); // slices to end of string
console.log('name.substr(-2):', user_name.substr(-2)); // counts from end backwards

// Extracting individual characters
console.log('name.charAt(3):', user_name.charAt(3));
console.log('name.charCodeAt(3):', user_name.charCodeAt(3));

// Replacing String content
console.log('name.replace("Davies", "Smith"):', user_name.replace("Davies", "Smith"));
// Above returns a new string - doesn't affect original string
console.log('name:', user_name);

// Converting to Upper or Lower Case
console.log('name.toUpperCase():', user_name.toUpperCase());
console.log('name.toLowerCase():', user_name.toLowerCase());

// Convert a number to a string
let x = 123;
let y = 456;
console.log('x.toString() + y.toString():', x.toString() + y.toString());

// Trim operator - removes white space
let location = '     London    ';
console.log('location:', location);
console.log('location.trim():', location.trim()); // Not supported by IE 8 or below
