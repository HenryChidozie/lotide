// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`❌ ❌ ❌ Assertion Failed: ${actual} === ${actual} !== ${expected}.`);
//   }
// };

// const countLetters = function() {
//   for (const value of countLetters) {
//     console.log(`The number of letters in the sentence is: ${value}`);
//   }
// };
// countLetters('LHL');
// assertEqual(countLetters());

const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// Take in a string, count how many of each character in the string there are
// Return as object
const countLetters = function(inputString) {
  // Declare an empty object
  const countResults = {};

  // Loop through the string
  for (const input of inputString) {
    if (countResults[input]) {
      countResults[input] += 1;
    } else {
      if (input !== " ") {
        countResults[input] = 1;
      }
    }
  }
  return countResults;
};

console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));