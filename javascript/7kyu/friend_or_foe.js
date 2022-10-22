/*
Friend or Foe is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/55b42574ff091733d900002f

Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Example: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output.

Steps:
- goal: return an array of friends whose name length is 4
- iterate through the array of friend names (strings)
- for each iteration check if the friend name length is strictly equal to 4
- based on the condition, the friend name that has a length of 4 will be added to the filtered array
*/

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}
