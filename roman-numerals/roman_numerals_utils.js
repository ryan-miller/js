// Roman numeral utilities
//
// ROMAN MODERN
// I      1
// V      5
// X      10
// L      50
// C      100
// D      500
// M      1,000

// convert I to 1, XI to 11, and IC to 99

// convert 1 to I, 11 to XI, and 99 to IC

function isValidRomanNumeralCharacter(element, index, array) {



}

// valid roman characters (can be converted to modern)?
function validRomanNumeral(n) {

  var inputArray = n.split("");

  for (var i = 0; i < inputArray.length; i++) {

    switch(inputArray[i]) {
      case "I":
      case "V":
      case "X":
      case "L":
      case "C":
      case "D":
      case "M":
        break;
      default:
        console.log("'" + inputArray[i] + "' is not a valid roman numeral character");
        return false;
        break;
    }
  }

  return true;
}

// valid number (can be converted to roman)?
