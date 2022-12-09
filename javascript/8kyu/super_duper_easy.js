/*
Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".

--------------------------------------------------------------
"Super Duper Easy" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/55a5bfaa756cfede78000026
*/

function problem(x){
  return typeof x !== 'number' ? "Error" : x * 50 + 6
}