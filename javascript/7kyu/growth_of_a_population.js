/*
"Growth of a Population" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/563b662a59afc2b5120000c6/

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const nbYear = (p0, percent, aug, p) => {
  let startPop = p0;
  let years = 0;

  for (years; startPop < p; years++) {
    startPop += Math.floor(startPop * (percent / 100) + aug);
  }
  return years;
};

// ---------- Solution B ----------
const nbYear = (p0, percent, aug, p) => {
  let startPop = p0;
  let years = 0;

  while (startPop < p) {
    years++;
    startPop += Math.floor(startPop * (percent / 100) + aug);
  }

  return years;
};