/*
Remove String Spaces is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

I solved this problem using JavaScript
*/

function noSpace(x) {
  return x
    .split("")
    .filter((char) => !char.includes(" "))
    .join("");
}

// Refactor
function noSpace(x) {
  return x.split(" ").join("");
}
