/*
"Exes and Ohs" is a 7kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/55908aad6620c066bc00002a

--------------------------------------------------------------
Description:

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

--------------------------------------------------------------
*/

// Solution A uses a for loop
function XO(str) {
  let arr = str.split('');
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i ++) {
    if (arr[i] === 'x' || arr[i] === 'X') { x++ }
    if (arr[i] === 'o' || arr[i] === 'O') { o++ }
  }
  return x === o ? true : false
}

// Solution B uses the filter method and compares the lengths of the arrays
function XO(str) {
  let arr = str.toLowerCase().split('');
  return arr.filter(char => char === 'x').length === arr.filter(char => char === 'o').length  
}

// Solution C uses regex
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length)
}

// Solution C explanation:
// - match will return an array of values that match the regular expression passed as an argument
// - we want to compare the lengths of the two arrays and return a boolean output
// - in order to compare the length, we first have to check if the array has a truthy value
// - if the array has a truthy value then JS will evaluate and return the length of the array
// - else if the array has a null value (null is a falsey value) then JS will not evaluate the length