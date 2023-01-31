/*
"What is between?" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/55ecd718f46fba02e5000029

--------------------------------------------------------------

Description:

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

// ---------- Solution A ----------

const between = (a, b) => {
  return [...Array(b - a + 1).fill(a)].map((n, i) => {
    return n + i;
  });
};
