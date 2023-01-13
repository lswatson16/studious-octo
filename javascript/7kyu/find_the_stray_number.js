/*
"Find the stray number" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

--------------------------------------------------------------

DESCRIPTION:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples:
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const stray = (numbers) => {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
};