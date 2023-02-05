/*
"Training JS #5: Basic data types--Object" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

*/

// ---------- Solution A ----------
const animal = (obj) => {
  const animal = obj;
  return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`;
};

// ---------- Solution B ----------
const animal = ({ name, color, legs }) => {
  return `This ${color} ${name} has ${legs} legs.`;
};