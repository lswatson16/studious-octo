/*
"Vowel Count!" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/54ff3102c1bad923760001f3

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