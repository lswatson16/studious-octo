/*
"Drink about" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/56170e844da7c6f647000063/

--------------------------------------------------------------

*/

// ---------- Solution A ----------
const peopleWithAgeDrink = (old) => {
  if (old < 14) {
    return 'drink toddy';
  }
  if (old < 18) {
    return 'drink coke';
  }
  if (old < 21) {
    return 'drink beer';
  }
  return 'drink whisky';
};

// ---------- Solution B ----------
const peopleWithAgeDrink = (age) => {
  const drinkOption =
    age < 14 ? 'toddy' : age < 18 ? 'coke' : age < 21 ? 'beer' : 'whisky';
  return `drink ${drinkOption}`;
};