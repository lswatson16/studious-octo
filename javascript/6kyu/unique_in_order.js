/*
Unique In Order is a 6kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/54e6533c92449cc251001667

I solved this problem using JavaScript
*/

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array

  let arr = Array.isArray(iterable) ? iterable : iterable.split("");
  let unique = arr.filter((char, i) => {
    return arr[i] !== arr[i + 1];
  });

  return unique;
};

/*
Notes:
I: string or array
O: array
Steps:
- create a unique array without the consecutive duplicates
- use filter method to filter out any elements with the same value next to each other 
and keep only one of the duplicates
*/
