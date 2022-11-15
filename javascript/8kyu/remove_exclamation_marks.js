/*
"Remove exclamation marks" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Steps to solve:
- convert the input string to an array
- filter out the elements in the array that are exclamation marks ("!")
- convert the array to a string
- return the output string
*/

// Solution 1
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((char) => char !== "!")
    .join("");
}

// Solution 2 using regex
function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}
