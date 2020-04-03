// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

// flatten([1, [2, [3, 4], [[5]]]]) // [1,2,3,4,5];

function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
}
