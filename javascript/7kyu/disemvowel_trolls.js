/*
Remove String Spaces is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/52fba66badcd10859f00097e

I solved this problem using JavaScript
*/

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
