/*
Extending JavaScript Objects: Reverse String is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/581270cb4927602fc800005a

Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:
'Hello, World!'.reverse();

The method shoulf return:
'!dlroW ,olleH'
*/

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

// another solution
String.prototype.reverse = function () {
  return [...this].reverse().join("");
};
