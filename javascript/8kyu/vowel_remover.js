/*
"Vowel remover" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

--------------------------------------------------------------
Description:

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples:
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const shortcut = (string) => {
  return string.replace(/[a,e,i,o,u]/g, '');
};

// ---------- Solution B ----------
const shortcut = (string) => {
  let regex = /[a,e,i,o,u]/g;
  return string.split(regex).join('');
};

// ---------- Solution C ----------
const shortcut = (string) => {
  return string
    .split('')
    .filter((e) => !'aeiou'.includes(e))
    .join('');
};

// ---------- Solution D ----------
const shortcut = (string) => {
  return string
    .split('')
    .filter((e) => ['a', 'e', 'i', 'o', 'u'].indexOf(e) === -1)
    .join('');
};
