
const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  JSON.stringify(actual) === JSON.stringify(expected) ?
    console.log(`✅ ✅ ✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`❌ ❌ ❌ Assertion Failed: "${inspect(actual)}" === "${inspect(actual)}" !== "${inspect(expected)}"`);
};

module.exports = assertArraysEqual;