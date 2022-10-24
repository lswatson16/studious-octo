/*
Remove the Minimum is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/563cf89eb4747c5fb100001b


Steps:
- first find the smallest integer (minimum number) in the array of numbers --> Math.min()
- next, remove the smallest integer... to do this we need the index/position of the smallest integer --> indexOf()
- as per instructions, we dont want to mutate or modify the array so we will need to make a copy of the array 
- remove the smallest number from the copy array
    - i used slice which makes a shallow copy of an array and can take up to two params (start and end)
    - i passed in arguments to the array method of choice
- lastly, return an array that does not include the smallest integer
*/

function removeSmallest(numbers) {
  const i = numbers.indexOf(Math.min(...numbers));

  return [...numbers.slice(0, i), ...numbers.slice(i + 1)];
}

/*
Solution B below using splice on a copy array:
When solving with the array method splice(), you'll have to create a copy of the numbers array
- then call splice() on the copy array to remove the smallest integer
- then return the copy array
*/

function removeSmallest(numbers) {
  const smallestInt = Math.min(...numbers);
  const i = numbers.indexOf(smallestInt);
  let results = [...numbers];

  results.splice(i, 1);
  return results;
}
