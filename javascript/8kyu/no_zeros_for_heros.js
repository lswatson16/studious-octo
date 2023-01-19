/*
"No zeros for heros" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

--------------------------------------------------------------
Description:

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const noBoringZeros = (n) => {
  let s = n.toString().replace(/0+$/, '');
  return Number(s);
};
