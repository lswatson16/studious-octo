/*
Welcome! is a 8kyu coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/577ff15ad648a14b780000e7

I solved this problem using JavaScript

Steps:
- store all greeting values in an object
- check if the languange is in the database
- if the languange exists then return the value based on the languange
- if the languange doesn't exit then return the default value english

*/

function greet(language) {
  const greetings = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return greetings[language] ? greetings[language] : greetings.english;
}
