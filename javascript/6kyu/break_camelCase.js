/*
"Break camelCase" is a 6kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5208f99aee097e6552000148

Steps to solve:
- convert the string to an array in order to iterate and check for casing of each element
- if the element is upper case then add a space before the element
- convert the array to a string
- return the string
*/

function solution(string) {
  let results = string.split("").map((e) => {
    if (e === e.toUpperCase()) {
      e = ` ${e}`;
    }
    return e;
  });

  return results.join("");
}
