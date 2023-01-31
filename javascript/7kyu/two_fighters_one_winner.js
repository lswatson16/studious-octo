/*
"Two fighters, one winner" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

--------------------------------------------------------------

*/

// ---------- Solution A ----------
const declareWinner = (fighter1, fighter2, firstAttacker) => {
  let f1 = fighter1.health;
  let f2 = fighter2.health;
  let isF1 = fighter1.name === firstAttacker;

  const attack = () => {
    if (isF1) {
      f2 -= fighter1.damagePerAttack;
    } else {
      f1 -= fighter2.damagePerAttack;
    }
  };

  while (f1 > 0 && f2 > 0) {
    attack();
    isF1 = isF1 === true ? false : true;
  }

  return f1 > f2 ? fighter1.name : fighter2.name;
};
