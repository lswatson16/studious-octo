/*
"DNA to RNA Conversion" is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/5556282156230d0e5e000089

Steps:
- check each character in the input string by converting the string to an array
- if the nucleic acid is dna "T" then return rna "U", else return the nucleic acid
  - example: "G" => "G"; "T" => "U"
*/

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna
    .split('')
    .map((m) => (m === 'T' ? 'U' : m))
    .join('');
}
