/*
"Powers of 2" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/57a083a57cb1f31db7000028

Steps to solve:
- create an array of the range of exponents from 0 to n (input)
- iterate through the new array... for each element, return the value of 2 raised to a power
- return an array of the values (power of twos)
*/

function powersOfTwo(n) {
  let arr = Array.from(Array(n + 1).keys());
  return arr.map((n) => Math.pow(2, n));
}
