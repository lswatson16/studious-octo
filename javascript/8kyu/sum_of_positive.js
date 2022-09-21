/*
Sum of positive is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.



I solved this problem using JavaScript.

Steps:
- filter through the array to get only the positive integers
- find the sum of the positive integers using reduce
and initilize the accumulator to 0

*/

function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((acc, n) => acc + n, 0);
}
