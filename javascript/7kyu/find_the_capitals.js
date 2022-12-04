/*
"Find the capitals" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

Steps:
- check each character in the input string (by converting string to array)
- if the character is a capital letter then push the index into the output array
- return the array of indices
*/

const capitals = (word) => {
  return word.split('').reduce((acc, e, index) => {
    if (e === e.toUpperCase()) {
      acc.push(index);
    }
    return acc;
  }, []);
};
