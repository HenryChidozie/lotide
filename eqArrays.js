const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//FUNCTION IMPLEMENTATION

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`❌ ❌ ❌ Assertion Failed: ${actual} === ${actual} !== ${expected}.`);
//   }
// };

module.exports = eqArrays;