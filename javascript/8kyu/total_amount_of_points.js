/*
"Total amount of points" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

--------------------------------------------------------------
Description:

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by 
a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points 
our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const points = (games) => {
  let total = 0;
  for (let i = 0; i < games.length; i++) {
    let x = Number(games[i][0]);
    let y = Number(games[i][2]);

    if (x > y) {
      total += 3;
    } else if (x === y) total++;
  }
  return total;
};

// ---------- Solution B ----------
const points = (games) => {
  return games.reduce((total, point) => {
    let x = point[0];
    let y = point[2];
    let awards = x > y ? 3 : x === y ? 1 : 0;

    return total + awards;
  }, 0);
};
