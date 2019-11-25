// This file illustrates various array related methods

var songs = ['Set Fire to the Rain', 'Guilty', 'Havana']
console.log('songs:', songs);

// Convert an array to a string
var label1 = songs.toString();
console.log('label1:', label1);

// join elements in an array using link sgtring
var label2 = songs.join('; ');
console.log('label2:', label2);

// Pop removes the last element from an array
console.log('songs:', songs);
console.log('songs.pop()');
var song = songs.pop();
console.log('song:', song);
console.log('songs:', songs);

// Push ads a new element to the end of the array
console.log('songs:', songs);
console.log("songs.push(Livin' La Vida Loca)");
songs.push("'Livin' La Vida Loca");
console.log('songs:', songs);

// Shift rempoves the first element in the array
console.log('songs:', songs);
console.log("songs.shift()");
var song1 = songs.shift();
console.log('song1:', song1);
console.log('songs:', songs);

// Unsfhit adds an element to the start of the array
console.log('songs:', songs);
console.log("songs.unshift('Space Oddity')");
var newLength = songs.unshift('Space Oddity');
console.log('songs:', songs);
console.log('newLength:', newLength);

// Splicing an array - adding multiple elements
console.log('songs:', songs);
console.log('songs.splice(2, 0, "Hard Day\'s Night", "Help!")')
songs.splice(2, 0, "Hard Day's Night", "Help!")
console.log('songs:', songs);

// Merging Concatenating Arrays
var edSongs = ['Shape of You', 'Perfect', 'Castle on the Hill'];
var newSongs = songs.concat(edSongs);
console.log('newSongs:', newSongs);

// Slice an array - slices out a piece of an array
// Takes 1 or two params - 1st param indicates
// start point second param indicates last index (note up to not including)
// if second is omitted then slice is to end of array
var subSongList = newSongs.slice(3, 6);
console.log('subSongList:', subSongList);

// Sorting an array
console.log('songs');
console.log('songs.sort()');
console.log(songs.sort());

// Find highest / lowest Number in an array
// First parameter is a function to apply to calculate max or min value
// null uses the default
var totals = [10, 24, 45, 21, 89, 5];
console.log('totals;', totals);
console.log('Math.max.apply(null, totals)');
console.log(Math.max.apply(null, totals));
console.log('Math.min.apply(null, totals)');
console.log(Math.min.apply(null, totals));