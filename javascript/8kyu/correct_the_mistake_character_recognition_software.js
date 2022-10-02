/*
Correct the mistakes of the character recognition software is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/577bd026df78c19bca0002c0

I solved this problem using JavaScript.

Steps:
- Create an object that stores the incorrect characters as keys and the correct letters as values
- Convert the string to an array
- Iterate over the array and return a value based on whether each element in the array passes the condition
- The condition: if the key exists or if the incorrect character exists then return the value of that key else return the element
- Convert the array to a string
*/

function correct(string) {
  const corrections = { 0: "O", 1: "I", 5: "S" };
  return string
    .split("")
    .map((el) => (corrections[el] ? corrections[el] : el))
    .join("");
}

// other solution using regex
correct = (s) => s.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

// other solution using regex
const corrections = {
  5: "S",
  0: "O",
  1: "I",
};

const correct = (string) =>
  string.replace(/[501]/g, (char) => corrections[char]);
