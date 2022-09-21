/*
Mumbling is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"


I solved this problem using JavaScript.

Steps:
- convert the string to an array
- map over the array and return an array of concatenated strings
- convert the array to a string separated by dashes
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

// 2nd attempt
function accum(s) {
  return s
    .split("")
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-");
}
