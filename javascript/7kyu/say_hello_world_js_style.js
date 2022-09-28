/*
Say "Hello World" JS Style is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/53a20af2e0afd3e2cd000333
I solved this problem using JavaScript
*/

var say = function (string1) {
  return function (string2) {
    return `${string1} ${string2}`;
  };
};
