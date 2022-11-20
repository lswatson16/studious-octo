/*
"Find the unique number" is a 6kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

Steps to solve:
- if the first two elements in the array are the same number then...
  - iterate throught the array to find the first element that doesn't match the same value as first element in array
- if the first two elements do not have the same value then ...
  - compare the second and third elements...
    - if the second and third elements match then return the first element as the unique number
    - if the second and third elemts do not match then return the second element as the unique number
*/

function findUniq(arr) {
  let unique;
  if (arr[0] === arr[1]) {
    unique = arr.find((e) => e !== arr[0]);
  } else {
    unique = arr[1] === arr[2] ? arr[0] : arr[1];
  }
  return unique;
}
