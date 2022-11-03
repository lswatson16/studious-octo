/*
"Sort array by string length" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
*/

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}
