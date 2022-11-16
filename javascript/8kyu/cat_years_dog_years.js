/*
"Cat years, dog years" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

Steps to solve:
- create a conditional to determine the catYears and dogYears if humanYears is 1 or 2 or greater than 2
- when humanYears is equal to 1 then catYears and dogYears equals 15
- when humanYears is equal to 2 then catYears and dogYears equals 24 (15 + 9 = 24)
- when humanYears is greater than 2, perform some math: 
    - get the value of the remaining years (humanYears minus 2)
    - multiply the remaining years to the either 4 for catYears or 5 for dogYears
    - add this product value to 24 (remember the cat and dog is age 24 when you add first and second year -- 15 + 9 = 24)
- return the output array -- [humanYears, catYears, dogYears]
*/

// Solution 1
https: var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears =
    humanYears < 2 ? 15 : humanYears < 3 ? 24 : 24 + 4 * (humanYears - 2);
  let dogYears =
    humanYears < 2 ? 15 : humanYears < 3 ? 24 : 24 + 5 * (humanYears - 2);
  return [humanYears, catYears, dogYears];
};

// Solution 2
var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [1, 15, 15];
  if (humanYears === 2) return [2, 24, 24];
  return [humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2)];
};
