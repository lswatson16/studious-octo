/*
"Find the smallest integer in the array" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/55a2d7ebe362935a210000b2
*/

/* Solution A

Steps to solve:
- sort the integers in ascending order (low to high)
- return the first element in the array which is the smallest
*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}