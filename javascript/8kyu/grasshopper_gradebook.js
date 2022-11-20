/*
"Grasshopper - Grade book" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/55cbd4ba903825f7970000f5

Steps to solve:
- find the average score by adding the three scrores and diving the sum by 3
- use the average score value to determine the letter grade -- create a conditional...
    - if the score is 90 or above then return 'A' as the letter grade
    - if the score is 80 or above then return 'B' as the letter grade
    - if the score is 70 or above then return 'C' as the letter grade
    - if the score is 60 or above then return 'D' as the letter grade
    - if the score is below 60 then return 'F' as the letter grade
*/

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  let grade =
    average >= 90
      ? "A"
      : average >= 80
      ? "B"
      : average >= 70
      ? "C"
      : average >= 60
      ? "D"
      : "F";
  return grade;
}
