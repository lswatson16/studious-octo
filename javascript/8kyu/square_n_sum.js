/*
"Squared(n) sum" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/515e271a311df0350d00000f

Steps to solve:
- find the value of each element squared in the array -- example: 5^2 is 5 x 5
- add the squared values in order to find the sum of the squares
*/

//Solution 1
function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((a, b) => a + b, 0);
}

// Solution 2
function squareSum(numbers) {
  return numbers.reduce((sum, n) => sum + n * n, 0);
}
