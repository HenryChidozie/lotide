//FUNCTION IMPLEMENTATION
// eslint-disable-next-line no-unused-vars
let array = [];
const head = function(array) {
  return array[0];
};
const assertEqual = function(a, b) {
  if (a === b) {
    console.log('Passed');
  } else {
    console.log('Failed');
  }
};

//TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([1]), 1);
