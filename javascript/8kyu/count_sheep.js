/*
If you can't sleep, just count sheep!! is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077  
*/

/* 
||| Solution A |||

Steps:
- set up a for loop to count the number of sheeps
- on each loop, add and reassign an interpolated string
- return the string
*/
var countSheep = function (num) {
  let murmur = "";
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  return murmur;
};

/* 
||| Solution B |||

Steps:
- create an array of numbers
- iterate (map) over the numbers array to return an array of interpolated strings --> .map()
- convert the array to a string --> .join()
*/

var countSheep = function (num) {
  let arr = [...Array(num).keys()];
  return arr.map((n) => `${n + 1} sheep...`).join("");
};
