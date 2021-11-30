const middle = function(arr) {
  if (arr.length <= 3) return [];
  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 === 0 ?
    arr.slice(mid, mid + 1) : //for odd
    arr.slice(mid - 1, mid + 1); //for even
};

module.exports = middle;
