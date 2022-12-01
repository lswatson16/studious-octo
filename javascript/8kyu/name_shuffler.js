/*
"Name shuffler" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/559ac78160f0be07c200005a

Steps:
- convert the string of a full name to an array separated by an empty string
    - why? the left of the empty string or space is the first name
    - and to the right of the empty string is the last name
- expect two indices in the array, 
    - the first element at index 0 is the first name
    - the second element at index 1 is the last name
- return an interpolated string that is lastName before firstName separated by a space (empty string)

*/

function nameShuffler(str) {
  let name = str.split(' ');
  let firstName = name[0];
  let lastName = name[1];
  return `${lastName} ${firstName}`;
}

// Similarly this would also work...
function nameShuffler(str) {
  let name = str.split(' ');
  return name[1] + ' ' + name[0];
}

// A different approach would be to convert the string to an array,
// then reverse the order of the elements in the array
// then convert the array to a string - seprated by a space or empty string
// return the string (expect the lastName to be before the first name)
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}
