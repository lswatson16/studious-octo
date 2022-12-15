/*
"Write Number in Expanded Form" is a 6kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/5842df8ccbd22792a4000245

--------------------------------------------------------------
Description:

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form.
- For more info on Expanded Form --> https://www.mathsisfun.com/definitions/expanded-notation.html

For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

--------------------------------------------------------------
*/

function expandedForm(num) {
  let arr = String(num).split('');
  let l = arr.length;
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      results.push(arr[i] * Math.pow(10, l - 1 - i));
    }
  }
  return results.join(' + ');
}
