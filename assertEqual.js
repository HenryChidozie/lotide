//FUNCTION IMPLEMENTATION


const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`) :
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} === ${actual} !== ${expected}.`);
};

module.exports = assertEqual;
