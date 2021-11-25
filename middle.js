const middle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 === 0) {
    const val1 = arr[middleIndex - 1];
    const val2 = arr[middleIndex];
    return [val1, val2];
  } else {
    return [arr[middleIndex]];
  }
  // {
  //   return middle(arr[i] + 1);
  // } else {
  //   return arr[Math.floor / 2];
  // }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));