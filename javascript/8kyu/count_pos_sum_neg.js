/*
"Count of positives / sum of negatives" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
*/

/* 
||| Solution A |||

Steps:
- handle case for empty array or null input array
    - if empty array or null then return an empty array
- create an array of positive integers (greater than 0)
    - count the length of the array of positive integers
- create an array of negative integers (less than 0)
    - find the sum of the array of negative integers
- return an array 
    - first element represents the length of positive integers
    - second element represents the sum of negative numbers
*/

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  } else {
    const pos = input.filter((int) => int > 0).length;
    const neg = input.filter((int) => int < 0).reduce((a, b) => a + b, 0);
    return [pos, neg];
  }
}

// Solution B makes use of a ternary operator
function countPositivesSumNegatives(input) {
  return input === null || input.length === 0
    ? []
    : [
        input.filter((i) => i > 0).length,
        input.filter((i) => i < 0).reduce((a, b) => a + b, 0),
      ];
}
