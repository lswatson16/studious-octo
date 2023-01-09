/*
"Remove anchor from URL" is a 7 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

--------------------------------------------------------------
Description:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

--------------------------------------------------------------
*/

// ---------- Solution A ----------
function removeUrlAnchor(url) {
  let anchor = [...url].indexOf('#');
  return anchor > -1 ? url.slice(0, anchor) : url;
}

// ---------- Solution B ----------
const removeUrlAnchor = (url) => url.split('#')[0];