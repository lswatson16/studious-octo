/*
"Alternate capitalization" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/59cfc000aeb2844d16000075/

--------------------------------------------------------------

*/

// ---------- Solution A ----------
const capitalize = (s) => {
  let even = '';
  let odd = '';

  [...s].forEach((char, i) => {
    if (i % 2) {
      odd += char.toUpperCase();
      even += char;
    } else {
      even += char.toUpperCase();
      odd += char;
    }
  });

  return [even, odd];
};
