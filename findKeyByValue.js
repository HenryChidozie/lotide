const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} === ${actual} !== ${expected}.`);
  }
};


const findKeyByValue = function(object, value) {
  let output = "";
  for (let key in object) {
    if (object[value] === object.key)
      output = key;
  }
  return output;
};

const bestTVShowsByGenre = {
  anime: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);