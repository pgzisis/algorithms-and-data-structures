// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
  return !array.length ? 1 : array[0] * productOfArray(array.slice(1));
}
