/*
Vaporcode is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5966eeb31b229e44eb00007a

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

I solved this problem using JavaScript

Steps:
- convert the string value to uppercase
- remove all white space from the string value
- convert the string to an array
- convert array to a string separated by two spaces

*/

function vaporcode(string) {
  return string.toUpperCase().replace(/ /gi, "").split("").join("  ");
}

// another solution
function vaporcode(string) {
  return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ");
}

// another solution
const vaporcode = (string) => string.toUpperCase().match(/\S/g).join(`  `);
