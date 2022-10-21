/*
Reversed String is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.
Examples:
'world'  =>  'dlrow'
'word'   =>  'drow'

I solved this problem using JavaScript

Steps:
- Convert the input string to an array
- Reverse the order of the elements in the array
- Convert the array to a string
*/

function solution(str) {
  return str.split("").reverse().join("");
}
