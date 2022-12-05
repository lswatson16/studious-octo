/*
"Last Survivor" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript

You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'

Notes:
- The given string will never be empty.
- The length of the array is always one less than the length of the string.
- All numbers are valid.
- There can be duplicate letters and numbers.
*/

// Solution A using array splice method 
function lastSurvivor(letters, coords) {
  let results = letters.split('')
  
  for(let i = 0; i < coords.length; i ++) {
    results.splice(coords[i], 1)
  }

  return results[0]
}

// Solution B using array slice method
function lastSurvivor(letters, coords) {
  let results = letters.split('');
  
  for(let i = 0; i < coords.length; i++) {
    results = [...results.slice(0, coords[i]), ...results.slice(coords[i] + 1)]
  }
  
  return results.join('')
}

// Solution C using array reduce method and string slice method
function lastSurvivor(letters, coords) {
  return coords.reduce((letters, coord) => {
    return letters.slice(0, coord) + letters.slice(coord + 1)
  }, letters)
}