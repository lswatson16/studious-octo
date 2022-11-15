/*
"Square every digit" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/546e2562b03326a88e000020
*/

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((n) => n * n)
      .join("")
  );
}
