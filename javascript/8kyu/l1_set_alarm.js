/*
"L1: Set Alarm" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/568dcc3c7f12767a62000038/

--------------------------------------------------------------
Description:

Write a function named setAlarm which receives two parameters. 
The first parameter, employed, is true whenever you are employed and the second parameter, 
vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are 
the circumstances under which you need to set an alarm). It should return false otherwise. 
  
Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

--------------------------------------------------------------
*/

// ---------- Solution A ----------
function setAlarm(employed, vacation) {
  if (employed && !vacation) return true;
  return false;
}

// ---------- Solution B ----------
function setAlarm(employed, vacation) {
  return employed && !vacation;
}