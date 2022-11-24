/*
"Find the next perfect square!" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
*/


function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let sqRoot = Math.sqrt(sq)
  return Number.isInteger(sqRoot) ? Math.pow(sqRoot + 1, 2) : -1
}

/*
Steps:
- find the square root of the input integer
- check if the square root is a whole number 
    - a whole number would signify that the input integer has a square root
- if the square root is a whole number then return the next perfect square
  - calculation: increment the square root by 1 then square it
  - example: if square root is 11 then calculation is 11 + 1 = 12 then 12 * 12 = 144.
- if the square root is not a whole number or integer (no float, no decimal),
  this means a square root was not found so return -1
*/