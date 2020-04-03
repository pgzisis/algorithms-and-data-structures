// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not
// exist.

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

function sumZero(array) {
  if (array.length < 2) {
    return false;
  }

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const sum = array[i] + array[j];

    if (sum === 0) {
      return [array[i], array[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }

  return undefined;
}
