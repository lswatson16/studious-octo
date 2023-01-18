/*
"Anagram Detection" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

--------------------------------------------------------------
Description:

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples:
- "foefet" is an anagram of "toffee"

- "Buckethead" is an anagram of "DeathCubeK"

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const isAnagram = (test, original) => {
  const sort = (word) => word.toLowerCase().split('').sort().join('');
  return sort(test) === sort(original);
};
