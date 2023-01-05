/*
"Twice as old" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/5b853229cfde412a470000d0/

--------------------------------------------------------------
Description:

Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will 
be twice as old). The answer is always greater or equal to 0, no matter if it was in the past 
or it is in the future.

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const twiceAsOld = (dad, son) => {
  return Math.abs(dad - son * 2);
};
