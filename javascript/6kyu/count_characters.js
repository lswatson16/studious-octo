/*
"Count characters in your string" is a 6kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/52efefcbcdf57161d4000091
*/

/* 
||| Solution A |||

Steps:
- convert the input string to an array
- iterate through the array to create an object that keeps count of each character
- if the key doesn't exist in the obj then create the key and assign a value 1
- if the key exists then increment the value by 1 (increase the count value for the char key)
*/

function count(string) {
  return string.split("").reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }
    return acc;
  }, {});
}

// similar solution using a ternary operator
function count(string) {
  return string.split("").reduce((acc, char) => {
    acc[char] ? acc[char]++ : (acc[char] = 1);
    return acc;
  }, {});
}
