/*
Description:

There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer pairs. 

Elements of each pair represent number of people get into bus (The first item) 
and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
Even though it is the last bus stop, the bus is not empty and some people are still in the bus, 
and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

--------------------------------------------------------------

"Number of People in the Bus" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5648b12ce68d9daa6b000099
*/

const number = function(busStops){
  return busStops.reduce((results, intArr) => {
    results += intArr[0]
    results -= intArr[1]
    return results
  }, 0)
}

// Refactor with array destructuring
const number = function(busStops){
  return busStops.reduce((count, [on, off]) => count + on - off, 0)
}