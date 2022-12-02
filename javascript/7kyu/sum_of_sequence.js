/*
"Sum of sequence" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/586f6741c66d18c22800010a

Steps:
- initialize the sum to a default value 0
  - the sum will be returned as the output
- add value to the sum value only if the starting number is less than or equal to the end value
- increment the starting number by the step value on each loop until the condition is no longer true
- return the sum value as the output
*/

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  
  for (let n = begin; n <= end; n += step) {
    sum += n
  }
  
  return sum
};