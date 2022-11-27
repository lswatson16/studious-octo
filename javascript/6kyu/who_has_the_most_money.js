/*
"Who has the most money?" is a 6kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/528d36d7cc451cd7e4000339

Steps:
- If there's only one student in the array then return the student's name
- Calculate the sum of money for each student in the array
- Check if each student has the same amount of money
- If each student has the same amount of money then return string "all"
  - Else find the index of the student that has the most money AND return the student's name
*/

function mostMoney(students) {
  const sums = students.map((s) => (s.fives * 5) + (s.tens * 10) + (s.twenties * 20))
  const isEqual = sums.every((v) => v === sums[0])
  if (students.length < 2) {return students[0].name}
  if (isEqual) {
    return 'all'
  } else {
    let max = Math.max(...sums)
    let i = sums.indexOf(max)
    return students[i].name
  }
}