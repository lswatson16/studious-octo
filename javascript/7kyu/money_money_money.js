/*
"Money money money" is a 7kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/563f037412e5ada593000114

Steps to solve:
- create a variable "year" with a default value of 0
- while the principal remains less than the desired amount execute this code:
    - calculate the new sum to be re-invested...
      - starting with the principal...
        - ADD/calculate the accrued interest -- (principal * interest)
        - SUBTRACT/calculate the payed taxes on accrued interest acc -- (principal * interest * tax)
    - increment the year by 1
- return the years (number output) the principal would need to be invested to reach the desired amount 
*/

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal = principal + principal * interest - principal * interest * tax;
    years++;
  }

  return years;
}
