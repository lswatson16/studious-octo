/*
Shortest Word is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

I solved this problem using JavaScript.

First, I converted the string of words into an array of words (using the split method).
Second, I iterated through the array (using map) to return the length of each string of words.
Third, I sorted the lengths in ascending order (lowest to highest number).
Fourth, I returned the first element in the sorted array which is positioned at index 0.
*/

function findShort(s) {
  return s
    .split(" ")
    .map((word) => word.length)
    .sort((a, b) => a - b)[0];
}

// other solution
function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}
