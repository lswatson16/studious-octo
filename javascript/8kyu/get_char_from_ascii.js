/*
"Get Characters from ASCII value" is a 7kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/55ad04714f0b468e8200001c/

--------------------------------------------------------------
Description:

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

- get_char(65) should return: 'A'

Hint:

- For ASCII table, you can refer to http://www.asciitable.com/

--------------------------------------------------------------
*/

function getChar(c){
  return String.fromCharCode(c)
}