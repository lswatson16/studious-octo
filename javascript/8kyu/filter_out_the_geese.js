/*
"Filter out the geese" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

Steps to solve:
- iterate through the input array of birds
- filter out the birds that are included in the geese array
- return new array
*/

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((bird) => !geese.includes(bird));
}
