// instructions can be found here for this kata --> https://www.codewars.com/kata/57fae964d80daa229d000126/

function remove (string) {
  return string.endsWith("!") ? string.slice(0,-1) : string
}
