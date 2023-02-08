/*
"The highest profit wins!" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/559590633066759614000063/train/javascript

--------------------------------------------------------------

*/

// ---------- Solution A ----------
const minMax = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  return [min, max];
};

// ---------- Solution B ----------
const minMax = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};
