/*
"Extract the domain name from a URL" is a 5kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

/* 
Solution 1

Steps to solve:
- remove the method/protocol (example "http://" or "https://") from the string
- remove the "www." from the domain name
- one way to do this is by replacing the strings with an empty string
- convert the string to an array
- create a shallow copy of a portion of the array starting from index 0 and ending in the index number of the found element that matches "." (end is not included in copy)
- convert the array to a string
*/

function domainName(url) {
  let arr = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split("");

  return arr
    .slice(
      0,
      arr.findIndex((e) => e === ".")
    )
    .join("");
}

/* 
Solution 2

Steps to solve:
- remove the method/protocol (example "http://" or "https://") from the string
- remove the "www." from the domain name
- one way to do this is by replacing the strings with an empty string
- convert the string to an array -- separating the array by "."
- return the first element (index 0) -- example "google.com" --> ["google", "com"]

*/
function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}
