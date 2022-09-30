/*
Jaden Casing String is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5390bac347d09b7da40006f6/

I solved this problem using JavaScript
*/

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
};
