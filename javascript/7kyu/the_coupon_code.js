/*
"The Coupon Code" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

--------------------------------------------------------------
Description:



--------------------------------------------------------------
*/

// ---------- Solution A ----------
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  return enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
    ? true
    : false;
};