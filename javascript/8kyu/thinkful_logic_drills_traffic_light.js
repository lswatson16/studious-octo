/*
"Thinkful - Logic Drills: Traffic light" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/58649884a1659ed6cb000072/

--------------------------------------------------------------
Description:

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const updateLight = (current) => {
  const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  };
  return lights[current];
};

// ---------- Solution A (refactored) ----------
const updateLight = (current) => {
  return {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current];
};

// ---------- Solution A (refactored) ----------
const updateLight = (current) =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);
