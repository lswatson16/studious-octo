/*
"Vowel Count!" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/54ff3102c1bad923760001f3

Steps:
- keep count of the vowels by initializing a vowel count to 0
- check each character in the input string...
  - if the character is a vowel (a, e, i, ,o, u) then increment the vowel count by 1
- return the vowel count as an output integer
*/

function getCount(str) {
  let count = 0
  let strArr = str.split('')
  const vowels = ["a", "e", "i", "o", "u"]
  
  for (let i = 0; i < strArr.length; i ++) {
    if (vowels.includes(strArr[i])) { count++ }
  }
  return count
    
}