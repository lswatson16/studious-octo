/*
"Cats and shelves" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/62c93765cef6f10030dfa92b/
--------------------------------------------------------------

*/

// ---------- Solution A ----------
const solution = (start, finish) => {
  let cat = start;
  let jumps = 0;
  while (cat < finish) {
    jumps++;
    if (cat + 3 <= finish) {
      cat += 3;
    } else {
      cat++;
    }
  }
  return jumps;
};

// ---------- Solution B ----------
const solution = (start, finish) => {
  const difference = finish - start;
  return Math.floor(difference / 3) + (difference % 3);
};

// ---------- Solution C ----------
const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + (difference % 3);