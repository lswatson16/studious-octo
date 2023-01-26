/*
"Build Tower" is a 6 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const towerBuilder = (floors) => {
  let pyramid = [];

  for (let i = 1; i <= floors; i++) {
    let space = ' '.repeat(floors - i);
    let star = '*'.repeat(2 * i - 1);
    pyramid.push(space + star + space);
  }

  return pyramid;
};