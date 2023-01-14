/*
"Find the position!" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

--------------------------------------------------------------
Description:

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const position = (letter) => {
  const position = letter.toLowerCase().charCodeAt() - 96;
  return `Position of alphabet: ${position}`;
};
