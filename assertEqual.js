//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ ✅ ✅ Assertion Passed: [actual] === [expected].");
  } else {
    console.log("❌ ❌ ❌ Assertion Failed: [actual] === [actual] !== [expected].");
  }
};

//TEST CODE
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(20, 20);
assertEqual(20, 24);
assertEqual('Dog', 'Dog');
assertEqual('James', 'John');