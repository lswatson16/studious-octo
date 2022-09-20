/*
Mumbling is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

I solved this problem using JavaScript
*/

function accum(s) {
  let arr = s.split("");
  return arr
    .map((el, i) => {
      let str = el.toUpperCase() + el.repeat(i).toLowerCase();
      return str;
    })
    .join("-");
}
